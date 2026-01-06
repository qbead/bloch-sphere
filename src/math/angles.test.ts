import { describe, expect, test } from 'bun:test'
import { normalizeAzimuthal } from './angles'

describe('Angles', () => {
  describe('Normalization', () => {
    test('normalizeAzimuthal normalizes angles to [0, 2π)', () => {
      expect(normalizeAzimuthal(0)).toBe(0)
      expect(normalizeAzimuthal(Math.PI)).toBe(Math.PI)
      expect(normalizeAzimuthal(2 * Math.PI)).toBe(0)
      expect(normalizeAzimuthal(-Math.PI)).toBe(Math.PI)
      expect(normalizeAzimuthal(-3 * Math.PI)).toBe(Math.PI)
    })
  })
})
