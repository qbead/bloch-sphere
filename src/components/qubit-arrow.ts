import * as THREE from 'three'
import { BaseComponent } from './component'
import { BlochVector } from '../math/bloch-vector'
import { Label } from './label'
import { formatVector } from '../format'

/**
 * A display for just a qubit arrow
 *
 * @see {@link QubitDisplay} for a full qubit display
 *
 * @example
 * ```ts
 * const q = new BlochVector(0, 0, 1)
 * const arrow = new QubitArrow()
 * arrow.color = 0xe1b53e
 * arrow.follow(q)
 * blochSphere.add(arrow)
 * ```
 */
export class QubitArrow extends BaseComponent {
  private arrowHelper: THREE.ArrowHelper
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

    this.arrowHelper = arrow

    this.label = new Label('(0, 0, 0)')
    this.label.position.set(0, 1.1, 0)
    this.arrowHelper.add(this.label)
    this.arrowHelper.userData.component = this
    this.add(this.arrowHelper)
  }

  set color(color: THREE.ColorRepresentation) {
    this._color.set(color)
    this.arrowHelper.setColor(new THREE.Color(color))
  }

  follow(v: BlochVector) {
    this.arrowHelper.setDirection(v)
    this.label.text = formatVector(v)
  }
}
