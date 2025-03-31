import { Vector3 } from 'three'

/**
 * Format a vector as a string with a given precision.
 */
export function formatVector(v: Vector3, precision = 2) {
  const xyz = [v.x, v.y, v.z].map((n) => n.toFixed(precision))
  return `(${xyz.join(', ')})`
}

/**
 * Format an angle given in radians as a string in degrees
 * with a given precision.
 */
export function formatDegrees(radians: number, precision = 2) {
  return `${((radians * 180) / Math.PI).toFixed(precision)}°`
}

/**
 * Format an angle given in radians as a string in radians
 * with a given precision.
 */
export function formatRadians(radians: number, precision = 2) {
  return `${radians.toFixed(precision)} rad`
}
