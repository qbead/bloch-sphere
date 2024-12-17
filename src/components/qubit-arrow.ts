import * as THREE from 'three'
import { BaseComponent } from './component'
import { Qubit } from '../qubit'

export class QubitArrow extends BaseComponent {
  object: THREE.ArrowHelper
  constructor() {
    super('qubit-arrow')

    const arrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, 0),
      1,
      0xffffff,
      0.1,
      0.05
    )

    this.object = arrow
  }

  set color(color: number | THREE.Color) {
    this._color.set(color)
    this.object.setColor(new THREE.Color(color))
  }

  follow(qubit: Qubit) {
    this.object.setDirection(qubit.vector3())
  }
}
