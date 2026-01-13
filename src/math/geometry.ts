import * as THREE from 'three'

/**
 * Properties of a arc on a sphere
 */
export type ArcProperties = {
  /**
   * The radius of the arc
   */
  radius: number
  /**
   * The distance from the center of the sphere to the plane containing the arc
   */
  height: number
  /**
   * The normal vector of the plane containing the arc
   */
  norm: THREE.Vector3
  /**
   * The angle of the arc offset from the x-axis
   */
  arcOffset: number
  /**
   * The angle of the arc
   */
  arcAngle: number
}

/**
 * Gets properties of an arc starting from v and rotating about n by angle
 */
export function getRotationArc(
  v: THREE.Vector3,
  axis: THREE.Vector3,
  angle: number
): ArcProperties {
  const norm = axis.clone().normalize()
  // Rotate v into the local frame where axis === +Z
  const toLocal = new THREE.Quaternion().setFromUnitVectors(
    norm,
    new THREE.Vector3(0, 0, 1)
  )

  const vLocal = v.clone().applyQuaternion(toLocal)

  // In local space:
  //  - Z is the normal
  //  - XY plane is the ring plane
  const height = vLocal.z
  const radius = Math.sqrt(vLocal.x * vLocal.x + vLocal.y * vLocal.y)

  // Degenerate: no arc
  if (radius === 0) {
    return {
      radius: 0,
      height,
      norm,
      arcOffset: 0,
      arcAngle: angle,
    }
  }

  // RingGeometry: 0 angle is +X, rotation around +Z
  const arcOffset = Math.atan2(vLocal.y, vLocal.x)

  return {
    radius,
    height,
    norm,
    arcOffset,
    arcAngle: angle,
  }
}

/**
 * Gets the properties of an great arc between two vectors
 * @param v1 The first vector
 * @param v2 The second vector
 * @returns The properties of the great arc
 */
export function getArcBetween(v1: THREE.Vector3, v2: THREE.Vector3) {
  const norm = v1.clone().cross(v2).normalize()
  const arcAngle = v1.angleTo(v2)

  const rot = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    norm
  )
  const xaxis = new THREE.Vector3(1, 0, 0).applyQuaternion(rot)
  const arcOffset = xaxis.angleTo(v1) * (v1.cross(xaxis).dot(norm) < 0 ? 1 : -1)

  return {
    norm,
    arcOffset,
    arcAngle,
  }
}

/**
 * Computes the shortest distance between two angles, considering wrap-around
 * @param a0 The first angle
 * @param a1 The second angle
 * @param modulo The modulo value (e.g., 2π for radians)
 * @returns The shortest distance from a0 to a1
 */
export function shortestModDist(a0: number, a1: number, modulo: number) {
  a0 = (a0 % modulo + modulo) % modulo
  let delta = (a1 - a0) % modulo
  if (delta > modulo / 2) {
    delta -= modulo
  } else if (delta < -modulo / 2) {
    delta += modulo
  }
  return delta
}

export type RotationInfo = {
  axis: THREE.Vector3
  angle: number
}

/**
 * Get axis of rotation and angle from a quaternion
 * @param q The quaternion
 * @returns The axis of rotation
 */
export function axisFromQuaternion(q: THREE.Quaternion): RotationInfo {
  const v = new THREE.Vector3(q.x, q.y, q.z)
  if (v.length() < 1e-6) {
    return { axis: new THREE.Vector3(0, 0, 0), angle: 0 }
  }
  const angle = 2 * Math.atan2(v.length(), q.w)
  return { axis: v.normalize(), angle }
}
