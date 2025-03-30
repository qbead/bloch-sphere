import * as THREE from 'three'
import { BaseComponent } from './component'
import { BlochVector } from '../math/bloch-vector'
// import { getArcBetween } from '../math/geometry'
// import { Operator } from '../math/operator'

class BlochSpherePath extends THREE.Curve<THREE.Vector3> {
  from: BlochVector
  to: BlochVector

  constructor(from: BlochVector, to: BlochVector) {
    super()

    this.from = from
    this.to = to
  }

  getPoint(
    t: number,
    optionalTarget: THREE.Vector3 = new THREE.Vector3()
  ): THREE.Vector3 {
    // we interpolate using their angles so they interpolate spherically
    optionalTarget.copy(this.from.lerpTo(this.to, t))
    return optionalTarget
  }
}

function* pairs<T>(arr: T[]): Generator<[T, T]> {
  for (let i = 0; i < arr.length - 1; i++) {
    yield [arr[i], arr[i + 1]]
  }
}

function tubePath(vertices: BlochVector[], material: THREE.Material) {
  const curves = Array.from(pairs(vertices))
    .map(([v1, v2]) => new BlochSpherePath(v1, v2))
    .reduce((curvePath, curve) => {
      curvePath.add(curve)
      return curvePath
    }, new THREE.CurvePath<THREE.Vector3>())

  const tube = new THREE.TubeGeometry(curves, 256, 0.005, 6, false)
  return new THREE.Mesh(tube, material)
}

// function makeMeshes(path: BlochVector[], material: THREE.Material) {
//   return pairs(path).map(([v1, v2]) => {
//     const { arcOffset, arcAngle, norm } = getArcBetween(
//       v1,
//       v2
//     )
//     // const geo = new THREE.RingGeometry(1, 1 + 0.01, 64, 1, arcOffset, arcAngle)
//     // TODO: potentially use tube geometry
//     const geo = new THREE.TorusGeometry(1, 0.005, 12, 64, arcAngle)
//     const mesh = new THREE.Mesh(geo, material)
//     const rot = new THREE.Quaternion().setFromUnitVectors(
//       new THREE.Vector3(0, 0, 1),
//       norm
//     )
//     mesh.applyQuaternion(rot)
//     const zrot = new THREE.Quaternion().setFromAxisAngle(norm, arcOffset)
//     mesh.applyQuaternion(zrot)
//     return mesh
//   })
// }

export class PathDisplay extends BaseComponent {
  constructor(path?: BlochVector[]) {
    super('path-display')

    if (path) {
      this.set(path)
    }
  }

  set(vertices: BlochVector[]) {
    this.clear()
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    })
    // @ts-ignore
    material.depthTest = false
    const mesh = tubePath(vertices, material)
    mesh.renderOrder = 10
    this.add(mesh)
  }
}
