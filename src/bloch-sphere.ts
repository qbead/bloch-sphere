import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { Qubit } from './qubit'

// 3D Bloch Sphere Widget
// Embeddable widget with configuration options for color, transparency,
// size, viewport size. And ability to plot: arrows describing state,
// surface areas, surface point-clouds, surface trajectories.
// API to allow for programatic access, including camera motion, camera control.

export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  scene!: THREE.Scene
  camera!: THREE.OrthographicCamera
  sphere!: THREE.Mesh
  arrow!: THREE.ArrowHelper
  controls!: OrbitControls

  constructor() {
    this.initRenderer()
    this.initScene()
  }

  private initRenderer() {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(200, 200)
  }

  private initScene() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 10)
    this.camera.position.x = 2
    this.camera.up.set(0, 0, 1)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshNormalMaterial({
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      })
    )
    this.sphere.rotation.x = Math.PI / 2
    this.scene.add(this.sphere)

    // inner sphere
    const innerSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.995, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.5,
      })
    )
    innerSphere.rotation.x = Math.PI / 2
    this.scene.add(innerSphere)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1, 0, 1)
    this.scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040)
    this.scene.add(ambientLight)

    this.arrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, 0),
      1,
      0xffffff,
      0.1,
      0.05
    )

    this.scene.add(this.arrow)
  }

  setState(q: Qubit) {
    this.arrow.setDirection(q.vector3())
  }

  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.renderer.domElement)
    this.resize()
    this.start()
  }

  resize(width?: number, height?: number) {
    width = width ?? this.renderer.domElement.parentElement?.clientWidth ?? 200
    height =
      height ?? this.renderer.domElement.parentElement?.clientHeight ?? 200
    let aspect = height / width
    this.renderer.setSize(width, height)
    this.camera.top = 2 * aspect
    this.camera.bottom = -2 * aspect
    this.camera.updateProjectionMatrix()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
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
    this.renderer.dispose()
  }
}
