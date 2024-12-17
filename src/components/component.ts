import * as THREE from 'three'
export class BaseComponent {
  object: THREE.Object3D
  protected _color: THREE.Color

  constructor(name?: string) {
    this.object = new THREE.Group()
    this._color = new THREE.Color(0xffffff)
    if (name) {
      this.object.name = name
    }
  }

  set color(color: number | THREE.Color) {
    this._color.set(color)
    this.object.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({ color })
      }
    })
  }

  get color() {
    console.log('foo')
    return this._color
  }

  set scale(scale: number) {
    this.object.scale.set(scale, scale, scale)
  }

  get scale() {
    return this.object.scale.x
  }

  set visible(visible: boolean) {
    this.object.visible = visible
  }

  get visible() {
    return this.object.visible
  }
}
