import * as THREE from 'three'

// Gets properties of a great arc starting from v and rotating about n by angle
export function getGreatArc(v: THREE.Vector3, n: THREE.Vector3, angle: number) {
  const height = v.dot(n)
  const radius = Math.sqrt(1 - height ** 2)
  // project the vector onto the plane defined by n
  const c = v.projectOnPlane(n)
  let c0 = new THREE.Vector3(1, 0, 0).projectOnPlane(n)
  // trick for if the normal vector is the same as the x-axis
  // TODO: check if this works for small perturbations around the x-axis
  if (c0.length() === 0) {
    c0 = new THREE.Vector3(0, 0, 1).projectOnPlane(n)
    angle = -angle
  }
  const a0 = c.angleTo(c0) * (c0.cross(c).dot(n) < 0 ? -1 : 1)
  return {
    radius,
    height,
    norm: n.clone(),
    arcOffset: a0,
    arcAngle: angle,
  }
}
