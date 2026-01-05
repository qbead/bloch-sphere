import { describe, expect, test } from 'bun:test'
import { Complex } from './complex'

describe('Complex', () => {
  describe('Static constructors', () => {
    test('ZERO returns 0 + 0i', () => {
      const zero = Complex.ZERO
      expect(zero.real).toBe(0)
      expect(zero.imag).toBe(0)
    })

    test('ONE returns 1 + 0i', () => {
      const one = Complex.ONE
      expect(one.real).toBe(1)
      expect(one.imag).toBe(0)
    })

    test('I returns 0 + 1i', () => {
      const i = Complex.I
      expect(i.real).toBe(0)
      expect(i.imag).toBe(1)
    })

    test('from(number) creates complex number', () => {
      const c = Complex.from(5)
      expect(c.real).toBe(5)
      expect(c.imag).toBe(0)
    })

    test('from(number, number) creates complex number', () => {
      const c = Complex.from(3, 4)
      expect(c.real).toBe(3)
      expect(c.imag).toBe(4)
    })

    test('from([number, number]) creates complex number', () => {
      const c = Complex.from([3, 4])
      expect(c.real).toBe(3)
      expect(c.imag).toBe(4)
    })

    test('from(Complex) clones complex number', () => {
      const original = new Complex(3, 4)
      const clone = Complex.from(original)
      expect(clone.real).toBe(3)
      expect(clone.imag).toBe(4)
      expect(clone).not.toBe(original) // Different instances
    })

    test('random() returns complex number with values in [0, 1)', () => {
      const c = Complex.random()
      expect(c.real).toBeGreaterThanOrEqual(0)
      expect(c.real).toBeLessThan(1)
      expect(c.imag).toBeGreaterThanOrEqual(0)
      expect(c.imag).toBeLessThan(1)
    })

    test('unitRandom() returns complex number with magnitude 1', () => {
      const c = Complex.unitRandom()
      expect(c.magnitude).toBeCloseTo(1, 10)
    })

    test('fromPolar() creates complex number from polar coordinates', () => {
      const c = Complex.fromPolar(5, Math.PI / 2)
      expect(c.real).toBeCloseTo(0, 10)
      expect(c.imag).toBeCloseTo(5, 10)
    })

    test('fromPolar() with zero angle gives real number', () => {
      const c = Complex.fromPolar(3, 0)
      expect(c.real).toBeCloseTo(3, 10)
      expect(c.imag).toBeCloseTo(0, 10)
    })
  })

  describe('Arithmetic operations', () => {
    test('plus() adds two complex numbers', () => {
      const a = new Complex(3, 4)
      const b = new Complex(1, 2)
      const result = a.plus(b)
      expect(result.real).toBe(4)
      expect(result.imag).toBe(6)
    })

    test('plus() works with real numbers', () => {
      const a = new Complex(3, 4)
      const result = a.plus(5)
      expect(result.real).toBe(8)
      expect(result.imag).toBe(4)
    })

    test('plus() works with array notation', () => {
      const a = new Complex(3, 4)
      const result = a.plus([1, 2])
      expect(result.real).toBe(4)
      expect(result.imag).toBe(6)
    })

    test('minus() subtracts two complex numbers', () => {
      const a = new Complex(5, 6)
      const b = new Complex(2, 3)
      const result = a.minus(b)
      expect(result.real).toBe(3)
      expect(result.imag).toBe(3)
    })

    test('minus() works with real numbers', () => {
      const a = new Complex(5, 4)
      const result = a.minus(2)
      expect(result.real).toBe(3)
      expect(result.imag).toBe(4)
    })

    test('times() multiplies two complex numbers', () => {
      // (3 + 4i) * (1 + 2i) = 3 + 6i + 4i + 8i² = 3 + 10i - 8 = -5 + 10i
      const a = new Complex(3, 4)
      const b = new Complex(1, 2)
      const result = a.times(b)
      expect(result.real).toBe(-5)
      expect(result.imag).toBe(10)
    })

    test('times() multiplies by real number', () => {
      const a = new Complex(3, 4)
      const result = a.times(2)
      expect(result.real).toBe(6)
      expect(result.imag).toBe(8)
    })

    test('times() by i rotates by 90 degrees', () => {
      const a = new Complex(3, 4)
      const result = a.times(Complex.I)
      expect(result.real).toBe(-4)
      expect(result.imag).toBe(3)
    })

    test('dividedBy() divides two complex numbers', () => {
      // (3 + 4i) / (1 + 2i) = (3 + 4i)(1 - 2i) / (1 + 4) = (3 - 6i + 4i - 8i²) / 5 = (11 - 2i) / 5
      const a = new Complex(3, 4)
      const b = new Complex(1, 2)
      const result = a.dividedBy(b)
      expect(result.real).toBeCloseTo(11 / 5, 10)
      expect(result.imag).toBeCloseTo(-2 / 5, 10)
    })

    test('dividedBy() real number scales', () => {
      const a = new Complex(6, 8)
      const result = a.dividedBy(2)
      expect(result.real).toBe(3)
      expect(result.imag).toBe(4)
    })

    test('dividedBy() ONE returns same number', () => {
      const a = new Complex(3, 4)
      const result = a.dividedBy(Complex.ONE)
      expect(result.real).toBeCloseTo(3, 10)
      expect(result.imag).toBeCloseTo(4, 10)
    })
  })

  describe('Properties', () => {
    test('magnitude of 3 + 4i is 5', () => {
      const c = new Complex(3, 4)
      expect(c.magnitude).toBe(5)
    })

    test('magnitude of real number is absolute value', () => {
      const c = new Complex(-5, 0)
      expect(c.magnitude).toBe(5)
    })

    test('magnitude of i is 1', () => {
      const c = Complex.I
      expect(c.magnitude).toBe(1)
    })

    test('phase of 1 + 0i is 0', () => {
      const c = new Complex(1, 0)
      expect(c.phase).toBe(0)
    })

    test('phase of 0 + 1i is π/2', () => {
      const c = new Complex(0, 1)
      expect(c.phase).toBeCloseTo(Math.PI / 2, 10)
    })

    test('phase of -1 + 0i is π', () => {
      const c = new Complex(-1, 0)
      expect(Math.abs(c.phase)).toBeCloseTo(Math.PI, 10)
    })

    test('phase of 0 - 1i is -π/2', () => {
      const c = new Complex(0, -1)
      expect(c.phase).toBeCloseTo(-Math.PI / 2, 10)
    })
  })

  describe('conjugate()', () => {
    test('conjugate of 3 + 4i is 3 - 4i', () => {
      const c = new Complex(3, 4)
      const conj = c.conjugate()
      expect(conj.real).toBe(3)
      expect(conj.imag).toBe(-4)
    })

    test('conjugate of real number is itself', () => {
      const c = new Complex(5, 0)
      const conj = c.conjugate()
      expect(conj.real).toBe(5)
      expect(Math.abs(conj.imag)).toBe(0) // Handle -0 vs 0
    })

    test('conjugate of i is -i', () => {
      const c = Complex.I
      const conj = c.conjugate()
      expect(conj.real).toBe(0)
      expect(conj.imag).toBe(-1)
    })

    test('double conjugate returns original', () => {
      const c = new Complex(3, 4)
      const double = c.conjugate().conjugate()
      expect(double.real).toBe(c.real)
      expect(double.imag).toBe(c.imag)
    })
  })

  describe('Identity and algebraic properties', () => {
    test('z * conjugate(z) is real and equals |z|²', () => {
      const z = new Complex(3, 4)
      const product = z.times(z.conjugate())
      expect(product.imag).toBeCloseTo(0, 10)
      expect(product.real).toBeCloseTo(z.magnitude ** 2, 10)
    })

    test('addition is commutative', () => {
      const a = new Complex(3, 4)
      const b = new Complex(1, 2)
      const ab = a.plus(b)
      const ba = b.plus(a)
      expect(ab.real).toBe(ba.real)
      expect(ab.imag).toBe(ba.imag)
    })

    test('multiplication is commutative', () => {
      const a = new Complex(3, 4)
      const b = new Complex(1, 2)
      const ab = a.times(b)
      const ba = b.times(a)
      expect(ab.real).toBeCloseTo(ba.real, 10)
      expect(ab.imag).toBeCloseTo(ba.imag, 10)
    })

    test('addition is associative', () => {
      const a = new Complex(1, 2)
      const b = new Complex(3, 4)
      const c = new Complex(5, 6)
      const ab_c = a.plus(b).plus(c)
      const a_bc = a.plus(b.plus(c))
      expect(ab_c.real).toBeCloseTo(a_bc.real, 10)
      expect(ab_c.imag).toBeCloseTo(a_bc.imag, 10)
    })

    test('multiplication is associative', () => {
      const a = new Complex(1, 2)
      const b = new Complex(3, 4)
      const c = new Complex(5, 6)
      const ab_c = a.times(b).times(c)
      const a_bc = a.times(b.times(c))
      expect(ab_c.real).toBeCloseTo(a_bc.real, 10)
      expect(ab_c.imag).toBeCloseTo(a_bc.imag, 10)
    })

    test('distributive property', () => {
      const a = new Complex(1, 2)
      const b = new Complex(3, 4)
      const c = new Complex(5, 6)
      const left = a.times(b.plus(c))
      const right = a.times(b).plus(a.times(c))
      expect(left.real).toBeCloseTo(right.real, 10)
      expect(left.imag).toBeCloseTo(right.imag, 10)
    })

    test('i² = -1', () => {
      const i = Complex.I
      const result = i.times(i)
      expect(result.real).toBeCloseTo(-1, 10)
      expect(result.imag).toBeCloseTo(0, 10)
    })
  })

  describe('toString()', () => {
    test('formats complex number correctly', () => {
      const c = new Complex(3, 4)
      expect(c.toString()).toBe('3 + 4i')
    })

    test('formats real number correctly', () => {
      const c = new Complex(5, 0)
      expect(c.toString()).toBe('5 + 0i')
    })

    test('formats negative imaginary part', () => {
      const c = new Complex(3, -4)
      expect(c.toString()).toBe('3 + -4i')
    })
  })
})
