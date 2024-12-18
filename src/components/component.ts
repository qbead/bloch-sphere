import * as THREE from 'three'
export class BaseComponent extends THREE.Object3D {
  protected _color: THREE.Color

  constructor(name?: string) {
    super()
    this.userData.component = this
    this._color = new THREE.Color(0xffffff)
    if (name) {
      this.name = name
    }
  }

  get color() {
    console.log('foo')
    return this._color
  }

  set color(color: number | THREE.Color) {
    this._color.set(color)
    this.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({ color })
      }
    })
  }
}
