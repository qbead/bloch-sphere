import { normalizeAzimuthal } from "./angles"
import { shortestModDist } from "./geometry"

/**
 * Standard linear interpolation function
 */
export function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}

/**
 * Linear interpolation function that wraps around 2π
 */
export function lerpAngle(a: number, b: number, t: number) {
  const delta = shortestModDist(a, b, 2 * Math.PI)
  return normalizeAzimuthal(a + delta * t)
}