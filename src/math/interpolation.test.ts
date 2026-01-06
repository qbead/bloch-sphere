import { describe, expect, test } from 'bun:test'
import { lerpAngle } from './interpolation'

describe('Interpolation', () => {
  describe('LerpAngle', () => {
    test('lerpAngle interpolates angles correctly', () => {
      expect(lerpAngle(0, Math.PI, 0.5)).toBeCloseTo(Math.PI / 2)
      expect(lerpAngle(Math.PI, 2 * Math.PI, 0.5)).toBeCloseTo(3 * Math.PI / 2)
      expect(lerpAngle(-Math.PI, Math.PI, 0.5)).toBeCloseTo(Math.PI)
      expect(lerpAngle(3 * Math.PI / 2, 0, 0.5)).toBeCloseTo(7 * Math.PI / 4)
    })
  })
})
