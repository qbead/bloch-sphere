import { describe, expect, test } from 'bun:test'
import { BlochVector } from './bloch-vector'
import { Complex } from './complex'
import { Vector3 } from 'three'
import * as gates from './gates'

describe('BlochVector', () => {
  describe('Static quantum state constructors', () => {
    test('ZERO represents |0> state (north pole)', () => {
      const zero = BlochVector.ZERO
      expect(zero.x).toBe(0)
      expect(zero.y).toBe(0)
      expect(zero.z).toBe(1)
    })

    test('ONE represents |1> state (south pole)', () => {
      const one = BlochVector.ONE
      expect(one.x).toBe(0)
      expect(one.y).toBe(0)
      expect(one.z).toBe(-1)
    })

    test('PLUS represents |+> state', () => {
      const plus = BlochVector.PLUS
      expect(plus.x).toBe(1)
      expect(plus.y).toBe(0)
      expect(plus.z).toBe(0)
    })

    test('MINUS represents |-> state', () => {
      const minus = BlochVector.MINUS
      expect(minus.x).toBe(-1)
      expect(minus.y).toBe(0)
      expect(minus.z).toBe(0)
    })

    test('I represents |i> state', () => {
      const i = BlochVector.I
      expect(i.x).toBe(0)
      expect(i.y).toBe(1)
      expect(i.z).toBe(0)
    })

    test('MINUS_I represents |-i> state', () => {
      const minusI = BlochVector.MINUS_I
      expect(minusI.x).toBe(0)
      expect(minusI.y).toBe(-1)
      expect(minusI.z).toBe(0)
    })

    test('random() creates vector on Bloch sphere surface', () => {
      const v = BlochVector.random()
      expect(v.amplitude).toBeCloseTo(1, 10)
    })

    test('zero() creates zero state', () => {
      const z = BlochVector.zero()
      expect(z.x).toBe(0)
      expect(z.y).toBe(0)
      expect(z.z).toBe(1)
    })
  })

  describe('from() constructor', () => {
    test('from(x, y, z) creates vector - overload 1', () => {
      const v = BlochVector.from(1, 0, 0)
      expect(v.x).toBe(1)
      expect(v.y).toBe(0)
      expect(v.z).toBe(0)
      expect(v).toBeInstanceOf(BlochVector)
    })

    test('from(x, y, z) with all coordinates - overload 1', () => {
      const v = BlochVector.from(0.5, 0.6, 0.7)
      expect(v.x).toBe(0.5)
      expect(v.y).toBe(0.6)
      expect(v.z).toBe(0.7)
    })

    test('from([x, y, z]) creates vector from array - overload 3', () => {
      const v = BlochVector.from([0, 1, 0])
      expect(v.x).toBe(0)
      expect(v.y).toBe(1)
      expect(v.z).toBe(0)
      expect(v).toBeInstanceOf(BlochVector)
    })

    test('from(Vector3) creates vector from three.js Vector3 - overload 2', () => {
      const vec3 = new Vector3(0, 0, 1)
      const v = BlochVector.from(vec3)
      expect(v.x).toBe(0)
      expect(v.y).toBe(0)
      expect(v.z).toBe(1)
      expect(v).toBeInstanceOf(BlochVector)
      expect(v).not.toBe(vec3)
    })

    test('from(Vector3) with non-unit vector - overload 2', () => {
      const vec3 = new Vector3(2, 3, 4)
      const v = BlochVector.from(vec3)
      expect(v.x).toBe(2)
      expect(v.y).toBe(3)
      expect(v.z).toBe(4)
    })

    test('from(BlochVector) clones vector - overload 4', () => {
      const original = new BlochVector(1, 2, 3)
      const clone = BlochVector.from(original)
      expect(clone.x).toBe(1)
      expect(clone.y).toBe(2)
      expect(clone.z).toBe(3)
      expect(clone).toBeInstanceOf(BlochVector)
      expect(clone).not.toBe(original)
    })

    test('from(BlochVector) preserves quantum state - overload 4', () => {
      const original = BlochVector.PLUS
      const clone = BlochVector.from(original)
      expect(clone.x).toBeCloseTo(original.x, 10)
      expect(clone.y).toBeCloseTo(original.y, 10)
      expect(clone.z).toBeCloseTo(original.z, 10)
    })
  })

  describe('fromAngles()', () => {
    test('fromAngles(0, 0) creates |0> state', () => {
      const v = BlochVector.fromAngles(0, 0)
      expect(v.x).toBeCloseTo(0, 10)
      expect(v.y).toBeCloseTo(0, 10)
      expect(v.z).toBeCloseTo(1, 10)
    })

    test('fromAngles(π, 0) creates |1> state', () => {
      const v = BlochVector.fromAngles(Math.PI, 0)
      expect(v.x).toBeCloseTo(0, 10)
      expect(v.y).toBeCloseTo(0, 10)
      expect(v.z).toBeCloseTo(-1, 10)
    })

    test('fromAngles(π/2, 0) creates |+> state', () => {
      const v = BlochVector.fromAngles(Math.PI / 2, 0)
      expect(v.x).toBeCloseTo(1, 10)
      expect(v.y).toBeCloseTo(0, 10)
      expect(v.z).toBeCloseTo(0, 10)
    })

    test('fromAngles(π/2, π/2) creates |i> state', () => {
      const v = BlochVector.fromAngles(Math.PI / 2, Math.PI / 2)
      expect(v.x).toBeCloseTo(0, 10)
      expect(v.y).toBeCloseTo(1, 10)
      expect(v.z).toBeCloseTo(0, 10)
    })

    test('fromAngles creates unit vector', () => {
      const v = BlochVector.fromAngles(Math.PI / 3, Math.PI / 4)
      expect(v.amplitude).toBeCloseTo(1, 10)
    })
  })

  describe('Properties', () => {
    test('theta for |0> is 0', () => {
      const v = BlochVector.ZERO
      expect(v.theta).toBeCloseTo(0, 10)
    })

    test('theta for |1> is π', () => {
      const v = BlochVector.ONE
      expect(v.theta).toBeCloseTo(Math.PI, 10)
    })

    test('theta for |+> is π/2', () => {
      const v = BlochVector.PLUS
      expect(v.theta).toBeCloseTo(Math.PI / 2, 10)
    })

    test('phi for |+> is 0', () => {
      const v = BlochVector.PLUS
      expect(v.phi).toBeCloseTo(0, 10)
    })

    test('phi for |i> is π/2', () => {
      const v = BlochVector.I
      expect(v.phi).toBeCloseTo(Math.PI / 2, 10)
    })

    test('phi for |-i> is -π/2', () => {
      const v = BlochVector.MINUS_I
      expect(v.phi).toBeCloseTo(-Math.PI / 2, 10)
    })

    test('amplitude for unit vector is 1', () => {
      const v = BlochVector.PLUS
      expect(v.amplitude).toBe(1)
    })

    test('amplitude for scaled vector', () => {
      const v = new BlochVector(3, 4, 0)
      expect(v.amplitude).toBe(5)
    })
  })

  describe('angles() and setAngles()', () => {
    test('angles() returns [theta, phi]', () => {
      const v = BlochVector.PLUS
      const [theta, phi] = v.angles()
      expect(theta).toBeCloseTo(Math.PI / 2, 10)
      expect(phi).toBeCloseTo(0, 10)
    })

    test('setAngles() modifies vector in place', () => {
      const v = BlochVector.zero()
      v.setAngles([Math.PI / 2, 0])
      expect(v.x).toBeCloseTo(1, 10)
      expect(v.y).toBeCloseTo(0, 10)
      expect(v.z).toBeCloseTo(0, 10)
    })

    test('setAngles() returns this for chaining', () => {
      const v = BlochVector.zero()
      const result = v.setAngles([Math.PI / 2, 0])
      expect(result).toBe(v)
    })

    test('round trip through angles', () => {
      const original = new BlochVector(0.5, 0.6, 0.62)
      const normalized = original.clone().normalize() // Normalize first
      const angles = normalized.angles()
      const reconstructed = BlochVector.zero().setAngles(angles)
      expect(reconstructed.x).toBeCloseTo(normalized.x, 8)
      expect(reconstructed.y).toBeCloseTo(normalized.y, 8)
      expect(reconstructed.z).toBeCloseTo(normalized.z, 8)
    })
  })

  describe('Density matrix', () => {
    test('densityMatrix() for |0> state', () => {
      const v = BlochVector.ZERO
      const rho = v.densityMatrix()
      // |0><0| = [[1, 0], [0, 0]]
      expect(rho[0][0].real).toBeCloseTo(1, 10)
      expect(rho[0][0].imag).toBeCloseTo(0, 10)
      expect(rho[0][1].real).toBeCloseTo(0, 10)
      expect(rho[0][1].imag).toBeCloseTo(0, 10)
      expect(rho[1][0].real).toBeCloseTo(0, 10)
      expect(rho[1][0].imag).toBeCloseTo(0, 10)
      expect(rho[1][1].real).toBeCloseTo(0, 10)
      expect(rho[1][1].imag).toBeCloseTo(0, 10)
    })

    test('densityMatrix() for |1> state', () => {
      const v = BlochVector.ONE
      const rho = v.densityMatrix()
      // |1><1| = [[0, 0], [0, 1]]
      expect(rho[0][0].real).toBeCloseTo(0, 10)
      expect(rho[0][0].imag).toBeCloseTo(0, 10)
      expect(rho[1][1].real).toBeCloseTo(1, 10)
      expect(rho[1][1].imag).toBeCloseTo(0, 10)
    })

    test('densityMatrix() for |+> state', () => {
      const v = BlochVector.PLUS
      const rho = v.densityMatrix()
      // |+><+| = 0.5 * [[1, 1], [1, 1]]
      expect(rho[0][0].real).toBeCloseTo(0.5, 10)
      expect(rho[0][1].real).toBeCloseTo(0.5, 10)
      expect(rho[1][0].real).toBeCloseTo(0.5, 10)
      expect(rho[1][1].real).toBeCloseTo(0.5, 10)
    })

    test('rho is alias for densityMatrix()', () => {
      const v = BlochVector.PLUS
      const rho1 = v.densityMatrix()
      const rho2 = v.rho
      expect(rho1[0][0].real).toBe(rho2[0][0].real)
      expect(rho1[0][0].imag).toBe(rho2[0][0].imag)
    })

    test('density matrix is Hermitian', () => {
      const v = BlochVector.random()
      const rho = v.densityMatrix()
      // ρ† = ρ (Hermitian)
      expect(rho[0][1].real).toBeCloseTo(rho[1][0].real, 10)
      expect(rho[0][1].imag).toBeCloseTo(-rho[1][0].imag, 10)
    })

    test('density matrix has trace 1', () => {
      const v = BlochVector.random()
      const rho = v.densityMatrix()
      const trace = rho[0][0].real + rho[1][1].real
      expect(trace).toBeCloseTo(1, 10)
    })
  })

  describe('fromDensityMatrix()', () => {
    test('round trip through density matrix for |0>', () => {
      const original = BlochVector.ZERO
      const rho = original.densityMatrix()
      const reconstructed = BlochVector.fromDensityMatrix(rho)
      expect(reconstructed.x).toBeCloseTo(original.x, 10)
      expect(reconstructed.y).toBeCloseTo(original.y, 10)
      expect(reconstructed.z).toBeCloseTo(original.z, 10)
    })

    test('round trip through density matrix for |+>', () => {
      const original = BlochVector.PLUS
      const rho = original.densityMatrix()
      const reconstructed = BlochVector.fromDensityMatrix(rho)
      expect(reconstructed.x).toBeCloseTo(original.x, 10)
      expect(reconstructed.y).toBeCloseTo(original.y, 10)
      expect(reconstructed.z).toBeCloseTo(original.z, 10)
    })

    test('round trip through density matrix for random state', () => {
      const original = BlochVector.random()
      const rho = original.densityMatrix()
      const reconstructed = BlochVector.fromDensityMatrix(rho)
      expect(reconstructed.x).toBeCloseTo(original.x, 10)
      expect(reconstructed.y).toBeCloseTo(original.y, 10)
      expect(reconstructed.z).toBeCloseTo(original.z, 10)
    })
  })

  describe('applyOperator()', () => {
    test('Hadamard on |0> gives |+>', () => {
      const zero = BlochVector.ZERO
      const result = zero.applyOperator(gates.hadamard())
      expect(result.x).toBeCloseTo(1, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(0, 10)
    })

    test('Hadamard on |1> gives |->', () => {
      const one = BlochVector.ONE
      const result = one.applyOperator(gates.hadamard())
      expect(result.x).toBeCloseTo(-1, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(0, 10)
    })

    test('X gate flips |0> to |1>', () => {
      const zero = BlochVector.ZERO
      const result = zero.applyOperator(gates.x())
      expect(result.x).toBeCloseTo(0, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(-1, 10)
    })

    test('X gate flips |1> to |0>', () => {
      const one = BlochVector.ONE
      const result = one.applyOperator(gates.x())
      expect(result.x).toBeCloseTo(0, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(1, 10)
    })

    test('Z gate leaves |0> unchanged', () => {
      const zero = BlochVector.ZERO
      const result = zero.applyOperator(gates.z())
      expect(result.x).toBeCloseTo(0, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(1, 10)
    })

    test('Z gate flips |+> to |->', () => {
      const plus = BlochVector.PLUS
      const result = plus.applyOperator(gates.z())
      expect(result.x).toBeCloseTo(-1, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(0, 10)
    })

    test('Y gate on |0> gives i|1>', () => {
      const zero = BlochVector.ZERO
      const result = zero.applyOperator(gates.y())
      // Y|0> = i|1>, which on Bloch sphere is -|1>
      expect(result.x).toBeCloseTo(0, 10)
      expect(result.y).toBeCloseTo(0, 10)
      expect(result.z).toBeCloseTo(-1, 10)
    })

    test('applying operator preserves norm', () => {
      const v = BlochVector.random()
      const result = v.applyOperator(gates.hadamard())
      expect(result.amplitude).toBeCloseTo(1, 10)
    })
  })

  describe('slerpTo()', () => {
    test('slerpTo() with t=0 returns start vector', () => {
      const start = BlochVector.ZERO
      const end = BlochVector.ONE
      const result = start.slerpTo(end, 0)
      expect(result.x).toBeCloseTo(start.x, 10)
      expect(result.y).toBeCloseTo(start.y, 10)
      expect(result.z).toBeCloseTo(start.z, 10)
    })

    test('slerpTo() with t=1 returns end vector', () => {
      const start = BlochVector.ZERO
      const end = BlochVector.ONE
      const result = start.slerpTo(end, 1)
      expect(result.x).toBeCloseTo(end.x, 10)
      expect(result.y).toBeCloseTo(end.y, 10)
      expect(result.z).toBeCloseTo(end.z, 10)
    })

    test('slerpTo() with t=0.5 gives midpoint on sphere', () => {
      const start = BlochVector.ZERO
      const end = BlochVector.ONE
      const result = start.slerpTo(end, 0.5)
      expect(result.amplitude).toBeCloseTo(1, 10)
      // Midpoint between north and south pole
      expect(result.z).toBeCloseTo(0, 10)
    })

    test('slerpTo() preserves unit length', () => {
      const start = BlochVector.random()
      const end = BlochVector.random()
      const result = start.slerpTo(end, 0.5)
      expect(result.amplitude).toBeCloseTo(1, 10)
    })
  })

  describe('toString()', () => {
    test('formats vector correctly', () => {
      const v = new BlochVector(1, 2, 3)
      expect(v.toString()).toBe('(1, 2, 3)')
    })
  })
})
