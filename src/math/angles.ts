/**
 * Normalize an azimuthal angle to the range [0, 2π).
 *
 * @param angle - The angle in radians to normalize.
 * @returns The normalized angle in radians.
 */
export function normalizeAzimuthal(angle: number) {
  const twoPi = 2 * Math.PI
  return ((angle % twoPi) + twoPi) % twoPi
}
