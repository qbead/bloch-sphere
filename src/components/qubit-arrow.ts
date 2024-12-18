import * as THREE from 'three'
import { BaseComponent } from './component'
import { Qubit } from '../qubit'
import { Label } from './label'
import { formatVector } from '../format'

export class QubitArrow extends BaseComponent {
  object: THREE.ArrowHelper
  label: Label

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

    this.label = new Label('(0, 0, 0)')
    this.label.position.set(0, 1.1, 0)
    this.object.add(this.label.object)
    this.object.userData.component = this
  }

  set color(color: number | THREE.Color) {
    this._color.set(color)
    this.object.setColor(new THREE.Color(color))
  }

  follow(qubit: Qubit) {
    this.object.setDirection(qubit.vector3())
    this.label.text = formatVector(qubit.vector3())
  }
}
