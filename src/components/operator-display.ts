import * as THREE from 'three'
import { BaseComponent } from './component'
import { Operator } from '../math/operator'
import { animate, type CancellablePromise } from '../animation'
import { Label } from './label'
import { defaultColors } from '../colors'
import { axisFromQuaternion } from '../math/geometry'
import { formatDegrees } from '../format'

/**
 * A display for a quantum operator
 *
 * @example
 * ```ts
 * const op = gates.hadamard()
 * const display = new OperatorDisplay(op)
 * blochSphere.add(display)
 * ```
 */
export class OperatorDisplay extends BaseComponent {
  operator: Operator
  innerGroup: THREE.Group
  label: Label
  private anim: CancellablePromise<void>

  constructor(op?: Operator) {
    super('operator-display')

    const innerGroup = new THREE.Group()
    this.innerGroup = innerGroup

    // const cone = new THREE.Mesh(
    //   new THREE.ConeGeometry(0.25, 0.05, 32),
    //   new THREE.MeshBasicMaterial({
    //     color: defaultColors.operator,
    //     transparent: true,
    //     opacity: 0.5,
    //   })
    // )
    // cone.rotation.x = Math.PI / 2
    // cone.position.z = 1.075
    // innerGroup.add(cone)

    const cyl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.005, 0.005, 1.05, 32),
      new THREE.MeshBasicMaterial({
        color: defaultColors.operator,
        transparent: true,
        opacity: 0.5,
      })
    )
    cyl.rotation.x = Math.PI / 2
    cyl.position.z = 0.525
    innerGroup.add(cyl)

    const ringRadius = 0.7
    const rings = new THREE.Group()
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(
        ringRadius - 0.01,
        ringRadius,
        64,
        1,
        0,
        Math.PI / 2
      ),
      new THREE.MeshBasicMaterial({
        color: defaultColors.operator,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      })
    )
    ring.material.depthTest = false
    ring.renderOrder = 5
    ring.position.z = 0
    const ring2 = ring.clone()
    ring2.rotation.z = Math.PI
    rings.add(ring)
    rings.add(ring2)

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(ringRadius - 0.01, 64),
      new THREE.MeshBasicMaterial({
        color: defaultColors.operator,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.1,
      })
    )
    disc.material.depthTest = false
    innerGroup.add(disc)

    this.anim = animate(
      (k) => {
        rings.rotation.z = Math.PI * 2 * k
      },
      3000,
      'linear',
      true
    )

    innerGroup.add(rings)

    this.label = new Label('')
    this.label.position.z = 1.1
    innerGroup.add(this.label)

    this.add(innerGroup)
    this.renderOrder = 4

    this.operator = Operator.identity()
    if (op) {
      this.set(op)
    }
  }

  /**
   * Set the operator to display
   * @param op The operator to display
   */
  set(op: Operator) {
    this.operator.copy(op)
    const q = this.operator.quaternion()
    const info = axisFromQuaternion(q)
    if (info.angle == 0) {
      this.label.text = 'Identity'
      return
    }
    this.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), info.axis)
    this.label.text = `α = ${formatDegrees(info.angle)}`
  }

  /**
   * Perform cleanup tasks
   */
  dispose() {
    this.anim.cancel()
  }
}
