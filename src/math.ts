export type DegreesUnits = 'deg' | 'DEG' | 'degrees'
export type RadiansUnits = 'rad' | 'RAD' | 'radians'
export type AngleUnits = DegreesUnits | RadiansUnits

export function isDegreesUnits(units: string): units is DegreesUnits {
  return ['deg', 'DEG', 'degrees'].includes(units)
}

export function isRadiansUnits(units: string): units is RadiansUnits {
  return ['rad', 'RAD', 'radians'].includes(units)
}

export function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}
