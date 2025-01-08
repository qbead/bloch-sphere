import * as THREE from 'three'
import { BaseComponent } from './component'
import { Operator } from '../math/operator'
import { animate } from '../animation'

export class OperatorDisplay extends BaseComponent {
  operator: Operator
  innerGroup: THREE.Group
  private anim: any

  constructor(op?: Operator) {
    super('operator-display')

    const innerGroup = new THREE.Group()
    this.innerGroup = innerGroup

    // const cone = new THREE.Mesh(
    //   new THREE.ConeGeometry(0.25, 0.05, 32),
    //   new THREE.MeshBasicMaterial({
    //     color: 0x888800,
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
        color: 0x888800,
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
        color: 0x888800,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      })
    )
    ring.position.z = 0
    const ring2 = ring.clone()
    ring2.rotation.z = Math.PI
    rings.add(ring)
    rings.add(ring2)

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(ringRadius - 0.01, 64),
      new THREE.MeshBasicMaterial({
        color: 0x888800,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.1,
      })
    )
    innerGroup.add(disc)

    this.anim = animate(
      (k) => {
        rings.rotation.z = -Math.PI * 2 * k
      },
      3000,
      'linear',
      true
    )

    innerGroup.add(rings)

    this.add(innerGroup)

    this.operator = Operator.identity()
    if (op) {
      this.set(op)
    }
  }

  set(op: Operator) {
    this.operator = op
    const q = this.operator.quaternion()
    // the quaternion components are the axis of rotation
    // so we want to point this group in that direction
    const n = new THREE.Vector3(q.x, q.y, q.z)
    const rot = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      n
    )
    this.setRotationFromQuaternion(rot)
  }

  dispose() {
    this.anim()
  }
}
