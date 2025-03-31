import STYLES from './styles.js'
import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { BlochSphereScene, BlockSphereSceneOptions } from './bloch-sphere-scene'

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

  constructor(options?: BlochSphereOptions) {
    this.initRenderer()
    this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 50)
    this.camera.position.set(10, 10, 5)
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

  /**
   * Performs cleanup and disposes everything contained in the widget
   */
  dispose() {
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
