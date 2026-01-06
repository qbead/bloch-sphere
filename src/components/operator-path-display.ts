import * as THREE from 'three'
import { BaseComponent } from './component'
import { Operator } from '../math/operator'
import { BlochVector } from '../math/bloch-vector'
import { getRotationArc } from '../math/geometry'
import { defaultColors } from '../colors'

/**
 * A display for the path a qbit takes when it is rotated by an operator
 * @example
 * ```ts
 * const op = gates.hadamard()
 * const v = new BlochVector(0, 0, 1)
 * const display = new OperatorPathDisplay(v, op)
 * blochSphere.add(display)
 * ```
 */
export class OperatorPathDisplay extends BaseComponent {
  operator: Operator
  vector: BlochVector
  innerGroup: THREE.Group
  path: THREE.Mesh
  disc: THREE.Mesh

  constructor(op?: Operator, v?: BlochVector) {
    super('operator-path-display')

    const innerGroup = new THREE.Group()
    this.innerGroup = innerGroup

    this.path = new THREE.Mesh(
      new THREE.RingGeometry(0, 0.01, 64),
      new THREE.MeshBasicMaterial({
        color: defaultColors.operatorPath,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      })
    )
    // @ts-ignore
    this.path.material.depthTest = false
    innerGroup.add(this.path)

    this.disc = new THREE.Mesh(
      new THREE.CircleGeometry(1, 64),
      new THREE.MeshBasicMaterial({
        color: defaultColors.operatorPath,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.15,
      })
    )
    // @ts-ignore
    this.disc.material.depthTest = false
    // this.disc.material.blending = THREE.CustomBlending
    // this.disc.material.blendSrc = THREE.SrcAlphaFactor
    // this.disc.material.blendDst = THREE.OneMinusSrcAlphaFactor
    // this.disc.material.blendEquation = THREE.AddEquation

    // UNCOMMENT THIS TO SEE THE DISC
    // innerGroup.add(this.disc)
    this.add(innerGroup)

    this.operator = Operator.identity()
    this.vector = BlochVector.ONE
    if (op) {
      this.setOperator(op)
    }
    if (v) {
      this.setVector(v)
    }
  }

  /**
   * Set the operator and vector
   */
  set(op: Operator, v: BlochVector) {
    this.operator.copy(op)
    this.vector.copy(v)
    const q = this.operator.quaternion()
    // the quaternion components are the axis of rotation
    // so we want to point this group in that direction
    const n = new THREE.Vector3(q.x, q.y, q.z).normalize()
    const rot = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      n
    )
    this.setRotationFromQuaternion(rot)
    let angle = 2 * Math.acos(q.w)
    const greatArc = getRotationArc(v, n, angle)
    const { radius, height, arcOffset, arcAngle } = greatArc
    this.path.geometry = new THREE.RingGeometry(
      radius,
      radius + 0.01,
      64,
      1,
      arcOffset,
      arcAngle
    )
    this.disc.geometry = new THREE.CircleGeometry(radius, 64)
    // then shift the path
    this.innerGroup.position.z = height
  }

  /**
   * Set the operator
   */
  setOperator(op: Operator) {
    this.set(op, this.vector)
  }

  /**
   * Set the vector
   */
  setVector(v: BlochVector) {
    this.set(this.operator, v)
  }
}
