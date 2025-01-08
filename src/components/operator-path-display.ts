import * as THREE from 'three'
import { BaseComponent } from './component'
import { Operator } from '../math/operator'
import { BlochVector } from '../math/bloch-vector'

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
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      })
    )
    innerGroup.add(this.path)

    this.disc = new THREE.Mesh(
      new THREE.CircleGeometry(1, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2,
      })
    )
    this.disc.renderOrder = -1
    // @ts-ignore
    this.disc.material.depthTest = false
    // this.disc.material.blending = THREE.CustomBlending
    // this.disc.material.blendSrc = THREE.SrcAlphaFactor
    // this.disc.material.blendDst = THREE.OneMinusSrcAlphaFactor
    // this.disc.material.blendEquation = THREE.AddEquation
    innerGroup.add(this.disc)
    this.add(innerGroup)

    this.operator = Operator.identity()
    if (op) {
      this.setOperator(op)
    }
    this.vector = BlochVector.ONE
    if (v) {
      this.setVector(v)
    }
  }

  set(op: Operator, v: BlochVector) {
    this.operator = op
    const q = this.operator.quaternion()
    // the quaternion components are the axis of rotation
    // so we want to point this group in that direction
    const n = new THREE.Vector3(q.x, q.y, q.z).normalize()
    const rot = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      n
    )
    this.setRotationFromQuaternion(rot)
    const angle = 2 * Math.acos(q.w)
    // we need to calculate the radius of the circle for the vector path
    this.vector = v
    // get the regressed vector
    const l = v.vector3().dot(n)
    const r = Math.sqrt(1 - l ** 2)
    const c = v.vector3().projectOnPlane(n)
    const c0 = new THREE.Vector3(0, 0, 1).projectOnPlane(n)
    const a0 = c.angleTo(c0) * (c0.cross(c).dot(n) < 0 ? -1 : 1)
    this.path.geometry = new THREE.RingGeometry(r, r + 0.01, 64, 1, a0, angle)
    this.disc.geometry = new THREE.CircleGeometry(r, 64)
    // then shift the path
    this.innerGroup.position.z = l
  }

  setOperator(op: Operator) {
    this.set(op, this.vector)
  }

  setVector(v: BlochVector) {
    this.set(this.operator, v)
  }
}
