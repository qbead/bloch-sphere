import * as THREE from 'three'

/**
 * Abstract base class for all components
 */
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

  /**
   * Get color of the component
   */
  get color() {
    return this._color
  }

  /**
   * Set color of the component
   */
  set color(color: THREE.ColorRepresentation) {
    this._color.set(color)
    this.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.color.set(this._color)
      }
    })
  }
}
