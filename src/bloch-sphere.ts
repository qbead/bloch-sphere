import STYLES from './styles.js'
import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { BlochSphereScene, BlockSphereSceneOptions } from './bloch-sphere-scene'
import { BlochVector } from './math/bloch-vector'
import { animate, type CancelAnimation } from './animation'
import { lerp } from './math/interpolation'

/**
 * Camera state for the Bloch sphere
 */
export type CameraState = {
  /** Angle from Z-axis in radians (0 to π) - polar angle */
  theta?: number
  /** Angle from X-axis in XY-plane in radians (0 to 2π) - azimuthal angle */
  phi?: number
  /** Camera zoom level (1.0 = default, >1 = zoomed in, <1 = zoomed out) */
  zoom?: number
}

/**
 * Options for the Bloch Sphere widget
 */
export type BlochSphereOptions = {
  /** font size in em */
  fontSize?: number
  /** show grid */
  showGrid?: boolean
} & Partial<typeof BlockSphereSceneOptions>

/**
 * A Bloch Sphere Widget
 *
 * This class is a wrapper around the THREE.js WebGLRenderer and CSS2DRenderer
 * to create a Bloch sphere visualization.
 *
 * It provides methods to add and remove objects from the scene.
 *
 * It must be attached to a parent element in the DOM to be visible. It will
 * automatically resize to fit the parent element.
 *
 * To resize on window resize, you can call the `resize` method in the
 * window resize event listener.
 *
 * @example
 * ```ts
 * import { BlochSphere } from 'bloch-sphere'
 *
 * const blochSphere = new BlochSphere({
 *  fontSize: 1.25,
 * })
 *
 * blochSphere.attach(document.body)
 * window.addEventListener(
 *  'resize',
 *  () => {
 *   blochSphere.resize()
 *  },
 *  { passive: true }
 * )
 *
 * // create a qubit display
 * const qubit = new QubitDisplay(BlochVector.fromAngles(1, 0))
 * // add the qubit to the Bloch sphere
 * blochSphere.add(qubit)
 * ```
 */
export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  cssRenderer!: CSS2DRenderer
  el!: HTMLElement
  scene: BlochSphereScene
  camera: THREE.OrthographicCamera
  controls: OrbitControls

  private _cameraAnimation: CancelAnimation | null = null
  private _defaultDistance = 10

  constructor(options?: BlochSphereOptions) {
    this.initRenderer()
    this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 50)
    this.camera.position
      .set(10, 10, 5)
      .normalize()
      .multiplyScalar(this._defaultDistance)
    this.camera.up.set(0, 0, 1)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.scene = new BlochSphereScene(options)
    this.setOptions(options)
  }

  setOptions(options?: BlochSphereOptions) {
    if (!options) return
    if (options.fontSize) {
      this.el.style.fontSize = `${options.fontSize}em`
    }
    if (options.showGrid !== undefined) {
      this.showGrid = options.showGrid
    }
  }

  private initRenderer() {
    this.el = document.createElement('div')
    this.el.className = 'bloch-sphere-widget-container'
    this.el.innerHTML = STYLES
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(200, 200)
    this.el.appendChild(this.renderer.domElement)

    this.cssRenderer = new CSS2DRenderer()
    this.cssRenderer.setSize(200, 200)
    this.cssRenderer.domElement.style.position = 'absolute'
    this.cssRenderer.domElement.style.top = '0'
    this.cssRenderer.domElement.style.pointerEvents = 'none'
    this.cssRenderer.domElement.style.zIndex = '1'
    this.el.appendChild(this.cssRenderer.domElement)
  }

  get showGrid() {
    return this.scene.grids.visible
  }

  set showGrid(value: boolean) {
    this.scene.grids.visible = value
  }

  add(item: THREE.Object3D) {
    this.scene.plotStage.add(item)
  }

  remove(item: THREE.Object3D) {
    this.scene.plotStage.remove(item)
  }

  /**
   * Removes all objects from the plot
   *
   * This will not remove the grid or the sphere.
   */
  clearPlot() {
    this.scene.clearPlot()
  }

  /**
   * Rescales the sphere
   */
  scale(size: number) {
    this.scene.sphere.scale.set(size, size, size)
  }

  /**
   * Attaches the widget to a parent element
   *
   * Must be called to make the widget visible.
   */
  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.el)
    this.resize()
    this.start()
  }

  /**
   * Resizes the widget to fit the parent element
   *
   * Optionally, you can specify the width and height to resize to.
   */
  resize(width?: number, height?: number) {
    width = width ?? this.el.parentElement?.clientWidth ?? 200
    height = height ?? this.el.parentElement?.clientHeight ?? 200
    let aspect = height / width
    this.renderer.setSize(width, height)
    this.cssRenderer.setSize(width, height)
    this.camera.top = 2 * aspect
    this.camera.bottom = -2 * aspect
    this.camera.updateProjectionMatrix()
  }

  /**
   * Renders the scene
   *
   * This is called automatically in the animation loop unless that
   * loop is stopped.
   */
  render() {
    this.renderer.render(this.scene, this.camera)
    this.cssRenderer.render(this.scene, this.camera)
    this.controls.update()
  }

  /**
   * Starts the animation loop
   *
   * Automatically started when the widget is attached to a parent element.
   *
   * This will call the render method automatically.
   */
  start() {
    this.renderer.setAnimationLoop(() => {
      this.render()
    })
  }

  /**
   * Stops the animation loop
   *
   * This will stop the render loop
   */
  stop() {
    this.renderer.setAnimationLoop(null)
  }

  // Camera API Methods

  /**
   * Core method to set camera state with optional animation
   * This is the single source of truth for camera positioning - other methods delegate to this
   */
  private _setCameraState(
    cameraState: CameraState,
    duration = 0,
    easing = 'quadInOut'
  ): Promise<void> | void {
    // Cancel any existing animation
    if (this._cameraAnimation) {
      this._cameraAnimation()
      this._cameraAnimation = null
    }

    // Get current state and merge with provided state
    const currentAngles = this.getCameraAngles()
    const currentState = {
      theta: currentAngles[0],
      phi: currentAngles[1],
      zoom: this.getCameraZoom(),
    }

    const targetState = {
      theta: cameraState.theta ?? currentState.theta,
      phi: cameraState.phi ?? currentState.phi,
      zoom: cameraState.zoom ?? currentState.zoom,
    }

    if (duration > 0) {
      return new Promise<void>((resolve) => {
        this._cameraAnimation = animate(
          (progress) => {
            const interpolatedState = {
              theta: lerp(currentState.theta, targetState.theta, progress),
              phi: lerp(currentState.phi, targetState.phi, progress),
              zoom: lerp(currentState.zoom, targetState.zoom, progress),
            }
            this._applyCameraState(interpolatedState)
          },
          duration,
          easing
        )

        // Set up completion callback
        setTimeout(() => {
          this._cameraAnimation = null
          resolve()
        }, duration)
      })
    } else {
      this._applyCameraState(targetState)
    }
  }

  /**
   * Immediately apply camera state without animation
   */
  private _applyCameraState(state: Required<CameraState>): void {
    // Convert spherical angles to camera position
    // Camera should be positioned OPPOSITE to the Bloch vector direction
    // so that the Bloch vector points AT the camera
    const blochVector = BlochVector.fromAngles(state.theta, state.phi)
    const cameraPosition = blochVector
      .clone()
      .multiplyScalar(this._defaultDistance)

    // Set camera position and orientation
    this.camera.position.copy(cameraPosition)
    this.camera.lookAt(0, 0, 0)
    this.camera.zoom = state.zoom
    this.camera.updateProjectionMatrix()

    // Update controls to match new position
    this.controls.update()
  }

  /**
   * Get current camera zoom level
   */
  getCameraZoom(): number {
    return this.camera.zoom
  }

  /**
   * Get current camera angles as [theta, phi]
   */
  getCameraAngles(): [number, number] {
    const blochVector = this.getCameraBlochVector()
    return [blochVector.theta, blochVector.phi]
  }

  /**
   * Get the Bloch vector pointing from origin to camera
   */
  getCameraBlochVector(): BlochVector {
    const direction = this.camera.position.clone().normalize()
    // Camera position represents where the camera IS,
    // so this IS the Bloch vector that points at the camera
    return new BlochVector(direction.x, direction.y, direction.z)
  }

  /**
   * Set camera state (unified method)
   */
  setCameraState(
    cameraState: CameraState,
    duration?: number,
    easing?: string
  ): Promise<void> | void {
    return this._setCameraState(cameraState, duration, easing)
  }

  /**
   * Position camera such that the given Bloch vector points directly at camera
   */
  setCameraToBlochVector(
    blochVector: BlochVector,
    duration?: number,
    easing?: string
  ): Promise<void> | void {
    const currentZoom = this.getCameraZoom()
    const cameraState: CameraState = {
      theta: blochVector.theta,
      phi: blochVector.phi,
      zoom: currentZoom,
    }
    return this._setCameraState(cameraState, duration, easing)
  }

  /**
   * Set camera position using spherical coordinates
   */
  setCameraAngles(
    theta: number,
    phi: number,
    duration?: number,
    easing?: string
  ): Promise<void> | void {
    const currentZoom = this.getCameraZoom()
    const cameraState: CameraState = {
      theta,
      phi,
      zoom: currentZoom,
    }
    return this._setCameraState(cameraState, duration, easing)
  }

  /**
   * Set camera zoom level
   */
  setCameraZoom(
    zoomLevel: number,
    duration?: number,
    easing?: string
  ): Promise<void> | void {
    const [theta, phi] = this.getCameraAngles()
    const cameraState: CameraState = {
      theta,
      phi,
      zoom: zoomLevel,
    }
    return this._setCameraState(cameraState, duration, easing)
  }

  /**
   * Performs cleanup and disposes everything contained in the widget
   */
  dispose() {
    // Cancel any pending camera animation
    if (this._cameraAnimation) {
      this._cameraAnimation()
      this._cameraAnimation = null
    }

    this.stop()
    this.clearPlot()
    this.renderer.dispose()
    this.el.remove()
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        child.material.dispose()
      }
    })
  }
}
