import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  scene!: THREE.Scene
  camera!: THREE.OrthographicCamera
  sphere!: THREE.Mesh
  controls!: OrbitControls

  constructor() {
    this.initRenderer()
    this.initScene()
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(200, 200)
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    this.camera.position.z = 1

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    )
    this.scene.add(this.sphere)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1, 1, 1)
    this.scene.add(light)

  }

  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.renderer.domElement)
    this.resize()
    this.start()
  }

  resize(width?: number, height?: number) {
    width = width ?? this.renderer.domElement.parentElement?.clientWidth ?? 200
    height = height ?? this.renderer.domElement.parentElement?.clientHeight ?? 200
    let aspect = height / width
    this.renderer.setSize(width, height)
    this.camera.top = aspect
    this.camera.bottom = -aspect
    this.camera.updateProjectionMatrix()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    this.controls.update()
  }

  start(){
    this.renderer.setAnimationLoop(() => {
      this.render()
    })
  }

  stop(){
    this.renderer.setAnimationLoop(null)
  }

  dispose(){
    this.renderer.dispose()
  }

}
