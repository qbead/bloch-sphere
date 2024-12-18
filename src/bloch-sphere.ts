import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { BlochSphereScene } from './bloch-sphere-scene'

// 3D Bloch Sphere Widget
// Embeddable widget with configuration options for color, transparency,
// size, viewport size. And ability to plot: arrows describing state,
// surface areas, surface point-clouds, surface trajectories.
// API to allow for programatic access, including camera motion, camera control.

export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  cssRenderer!: CSS2DRenderer
  el!: HTMLElement
  scene: BlochSphereScene
  camera: THREE.OrthographicCamera
  controls: OrbitControls

  constructor() {
    this.initRenderer()
    this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 50)
    this.camera.position.set(10, 10, 5)
    this.camera.up.set(0, 0, 1)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.scene = new BlochSphereScene()
  }

  private initRenderer() {
    this.el = document.createElement('div')
    this.el.innerHTML = `
      <style>
        .label,
        .axis-label,
        .angle-label {
          line-height: 1;
          display: inline-block;
          color: var(--label-color, white);
          text-align: center;
          font-size: 18px;
          font-family: monospace;
          text-shadow: 0 0 2px black;
        }
        .axis-label {
          font-size: 24px;
        }
        .axis-label::before {
          content: '';
          border: solid var(--label-color, white);
          border-width: 0 0 0 3px;
          display: inline-block;
          padding: 0.4em;
          transform: scale(0.6, 1.55) translate(0.6em, 0.036em);
        }
        .axis-label::after {
          content: '';
          border: solid var(--label-color, white);
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 0.4em;
          transform: scaleX(0.6) translate(-0.4em, 0.1em) rotate(-45deg);
        }
      </style>
    `
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

  clearPlot() {
    this.scene.clearPlot()
  }

  scale(size: number) {
    this.scene.sphere.scale.set(size, size, size)
  }

  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.el)
    this.resize()
    this.start()
  }

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

  render() {
    this.renderer.render(this.scene, this.camera)
    this.cssRenderer.render(this.scene, this.camera)
    this.controls.update()
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.render()
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

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
