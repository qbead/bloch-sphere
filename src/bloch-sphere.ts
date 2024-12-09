import * as THREE from 'three'

export class BlochSphere {
  renderer!: THREE.WebGLRenderer
  scene!: THREE.Scene
  camera!: THREE.OrthographicCamera
  sphere!: THREE.Mesh

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

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    )
    this.scene.add(this.sphere)
  }

  attach(parent?: HTMLElement) {
    parent = parent ?? document.body
    parent.appendChild(this.renderer.domElement)
  }

  resize(width?: number, height?: number) {
    width = width ?? this.renderer.domElement.clientWidth
    height = height ?? this.renderer.domElement.clientHeight
    this.renderer.setSize(width, height)
  }

  render() {
    this.renderer.render(this.scene, this.camera)
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
