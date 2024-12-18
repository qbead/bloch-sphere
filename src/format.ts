import { Vector3 } from 'three'

export function formatVector(v: Vector3, precision = 2) {
  const xyz = [v.x, v.y, v.z].map((n) => n.toFixed(precision))
  return `(${xyz.join(', ')})`
}

export function formatDegrees(radians: number, precision = 2) {
  return `${((radians * 180) / Math.PI).toFixed(precision)}°`
}

export function formatRadians(radians: number, precision = 2) {
  return `${radians.toFixed(precision)} rad`
}
