import { describe, expect, test } from 'bun:test'
import { Operator } from './operator'
import { Complex } from './complex'

describe('Operator', () => {
  describe('identity()', () => {
    test('creates identity matrix', () => {
      const id = Operator.identity()
      expect(id.a.real).toBe(1)
      expect(id.a.imag).toBe(0)
      expect(id.b.real).toBe(0)
      expect(id.b.imag).toBe(0)
      expect(id.c.real).toBe(0)
      expect(id.c.imag).toBe(0)
      expect(id.d.real).toBe(1)
      expect(id.d.imag).toBe(0)
    })
  })

  describe('Matrix element accessors', () => {
    test('a returns [0][0] element', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      expect(op.a.real).toBe(1)
      expect(op.a.imag).toBe(2)
    })

    test('b returns [0][1] element', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      expect(op.b.real).toBe(3)
      expect(op.b.imag).toBe(4)
    })

    test('c returns [1][0] element', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      expect(op.c.real).toBe(5)
      expect(op.c.imag).toBe(6)
    })

    test('d returns [1][1] element', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      expect(op.d.real).toBe(7)
      expect(op.d.imag).toBe(8)
    })
  })

  describe('scale()', () => {
    test('scales all elements by scalar', () => {
      const op = new Operator([
        [new Complex(1, 0), new Complex(2, 0)],
        [new Complex(3, 0), new Complex(4, 0)],
      ])
      op.scale(2)
      expect(op.a.real).toBe(2)
      expect(op.a.imag).toBe(0)
      expect(op.b.real).toBe(4)
      expect(op.b.imag).toBe(0)
      expect(op.c.real).toBe(6)
      expect(op.c.imag).toBe(0)
      expect(op.d.real).toBe(8)
      expect(op.d.imag).toBe(0)
    })

    test('scale() returns this for chaining', () => {
      const op = Operator.identity()
      const result = op.scale(2)
      expect(result).toBe(op)
    })

    test('scale(1) leaves operator unchanged', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      op.scale(1)
      expect(op.a.real).toBe(1)
      expect(op.a.imag).toBe(2)
      expect(op.b.real).toBe(3)
      expect(op.b.imag).toBe(4)
      expect(op.c.real).toBe(5)
      expect(op.c.imag).toBe(6)
      expect(op.d.real).toBe(7)
      expect(op.d.imag).toBe(8)
    })

    test('scale(0) gives zero matrix', () => {
      const op = Operator.identity()
      op.scale(0)
      expect(op.a.real).toBe(0)
      expect(op.a.imag).toBe(0)
      expect(op.b.real).toBe(0)
      expect(op.b.imag).toBe(0)
      expect(op.c.real).toBe(0)
      expect(op.c.imag).toBe(0)
      expect(op.d.real).toBe(0)
      expect(op.d.imag).toBe(0)
    })
  })

  describe('times() - operator multiplication', () => {
    test('identity times operator is operator', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const result = Operator.identity().times(op)
      expect(result.a.real).toBeCloseTo(op.a.real, 10)
      expect(result.a.imag).toBeCloseTo(op.a.imag, 10)
      expect(result.b.real).toBeCloseTo(op.b.real, 10)
      expect(result.b.imag).toBeCloseTo(op.b.imag, 10)
      expect(result.c.real).toBeCloseTo(op.c.real, 10)
      expect(result.c.imag).toBeCloseTo(op.c.imag, 10)
      expect(result.d.real).toBeCloseTo(op.d.real, 10)
      expect(result.d.imag).toBeCloseTo(op.d.imag, 10)
    })

    test('operator times identity is operator', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const result = op.times(Operator.identity())
      expect(result.a.real).toBeCloseTo(op.a.real, 10)
      expect(result.a.imag).toBeCloseTo(op.a.imag, 10)
      expect(result.b.real).toBeCloseTo(op.b.real, 10)
      expect(result.b.imag).toBeCloseTo(op.b.imag, 10)
      expect(result.c.real).toBeCloseTo(op.c.real, 10)
      expect(result.c.imag).toBeCloseTo(op.c.imag, 10)
      expect(result.d.real).toBeCloseTo(op.d.real, 10)
      expect(result.d.imag).toBeCloseTo(op.d.imag, 10)
    })

    test('matrix multiplication is correct', () => {
      // [[1, 2], [3, 4]] * [[5, 6], [7, 8]] = [[19, 22], [43, 50]]
      const op1 = new Operator([
        [new Complex(1, 0), new Complex(2, 0)],
        [new Complex(3, 0), new Complex(4, 0)],
      ])
      const op2 = new Operator([
        [new Complex(5, 0), new Complex(6, 0)],
        [new Complex(7, 0), new Complex(8, 0)],
      ])
      const result = op1.times(op2)
      expect(result.a.real).toBe(19)
      expect(result.a.imag).toBe(0)
      expect(result.b.real).toBe(22)
      expect(result.b.imag).toBe(0)
      expect(result.c.real).toBe(43)
      expect(result.c.imag).toBe(0)
      expect(result.d.real).toBe(50)
      expect(result.d.imag).toBe(0)
    })

    test('Pauli X squared is identity', () => {
      // X = [[0, 1], [1, 0]]
      const X = new Operator([
        [Complex.ZERO, Complex.ONE],
        [Complex.ONE, Complex.ZERO],
      ])
      const X2 = X.times(X)
      expect(X2.a.real).toBeCloseTo(1, 10)
      expect(X2.a.imag).toBeCloseTo(0, 10)
      expect(X2.b.real).toBeCloseTo(0, 10)
      expect(X2.b.imag).toBeCloseTo(0, 10)
      expect(X2.c.real).toBeCloseTo(0, 10)
      expect(X2.c.imag).toBeCloseTo(0, 10)
      expect(X2.d.real).toBeCloseTo(1, 10)
      expect(X2.d.imag).toBeCloseTo(0, 10)
    })
  })

  describe('plus() - operator addition', () => {
    test('adds corresponding matrix elements', () => {
      const op1 = new Operator([
        [new Complex(1, 0), new Complex(2, 0)],
        [new Complex(3, 0), new Complex(4, 0)],
      ])
      const op2 = new Operator([
        [new Complex(5, 0), new Complex(6, 0)],
        [new Complex(7, 0), new Complex(8, 0)],
      ])
      const result = op1.plus(op2)
      expect(result.a.real).toBe(6)
      expect(result.a.imag).toBe(0)
      expect(result.b.real).toBe(8)
      expect(result.b.imag).toBe(0)
      expect(result.c.real).toBe(10)
      expect(result.c.imag).toBe(0)
      expect(result.d.real).toBe(12)
      expect(result.d.imag).toBe(0)
    })

    test('addition is commutative', () => {
      const op1 = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const op2 = new Operator([
        [new Complex(9, 10), new Complex(11, 12)],
        [new Complex(13, 14), new Complex(15, 16)],
      ])
      const result1 = op1.plus(op2)
      const result2 = op2.plus(op1)
      expect(result1.a.real).toBe(result2.a.real)
      expect(result1.a.imag).toBe(result2.a.imag)
      expect(result1.b.real).toBe(result2.b.real)
      expect(result1.b.imag).toBe(result2.b.imag)
      expect(result1.c.real).toBe(result2.c.real)
      expect(result1.c.imag).toBe(result2.c.imag)
      expect(result1.d.real).toBe(result2.d.real)
      expect(result1.d.imag).toBe(result2.d.imag)
    })
  })

  describe('conjugateTranspose()', () => {
    test('conjugate transpose of identity is identity', () => {
      const id = Operator.identity()
      const ct = id.conjugateTranspose()
      expect(ct.a.real).toBe(1)
      expect(Math.abs(ct.a.imag)).toBe(0)
      expect(ct.b.real).toBe(0)
      expect(Math.abs(ct.b.imag)).toBe(0)
      expect(ct.c.real).toBe(0)
      expect(Math.abs(ct.c.imag)).toBe(0)
      expect(ct.d.real).toBe(1)
      expect(Math.abs(ct.d.imag)).toBe(0)
    })

    test('conjugate transpose transposes and conjugates', () => {
      // [[1+2i, 3+4i], [5+6i, 7+8i]]† = [[1-2i, 5-6i], [3-4i, 7-8i]]
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const ct = op.conjugateTranspose()
      expect(ct.a.real).toBe(1)
      expect(ct.a.imag).toBe(-2)
      expect(ct.b.real).toBe(5)
      expect(ct.b.imag).toBe(-6)
      expect(ct.c.real).toBe(3)
      expect(ct.c.imag).toBe(-4)
      expect(ct.d.real).toBe(7)
      expect(ct.d.imag).toBe(-8)
    })

    test('double conjugate transpose returns original', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const double = op.conjugateTranspose().conjugateTranspose()
      expect(double.a.real).toBeCloseTo(op.a.real, 10)
      expect(double.a.imag).toBeCloseTo(op.a.imag, 10)
      expect(double.b.real).toBeCloseTo(op.b.real, 10)
      expect(double.b.imag).toBeCloseTo(op.b.imag, 10)
      expect(double.c.real).toBeCloseTo(op.c.real, 10)
      expect(double.c.imag).toBeCloseTo(op.c.imag, 10)
      expect(double.d.real).toBeCloseTo(op.d.real, 10)
      expect(double.d.imag).toBeCloseTo(op.d.imag, 10)
    })

    test('Pauli X is Hermitian (equals its conjugate transpose)', () => {
      const X = new Operator([
        [Complex.ZERO, Complex.ONE],
        [Complex.ONE, Complex.ZERO],
      ])
      const Xdag = X.conjugateTranspose()
      expect(Xdag.a.real).toBeCloseTo(X.a.real, 10)
      expect(Xdag.a.imag).toBeCloseTo(X.a.imag, 10)
      expect(Xdag.b.real).toBeCloseTo(X.b.real, 10)
      expect(Xdag.b.imag).toBeCloseTo(X.b.imag, 10)
      expect(Xdag.c.real).toBeCloseTo(X.c.real, 10)
      expect(Xdag.c.imag).toBeCloseTo(X.c.imag, 10)
      expect(Xdag.d.real).toBeCloseTo(X.d.real, 10)
      expect(Xdag.d.imag).toBeCloseTo(X.d.imag, 10)
    })
  })

  describe('determinant()', () => {
    test('determinant of identity is 1', () => {
      const id = Operator.identity()
      const det = id.determinant()
      expect(det.real).toBe(1)
      expect(det.imag).toBe(0)
    })

    test('determinant calculation', () => {
      // det([[1, 2], [3, 4]]) = 1*4 - 2*3 = -2
      const op = new Operator([
        [new Complex(1, 0), new Complex(2, 0)],
        [new Complex(3, 0), new Complex(4, 0)],
      ])
      const det = op.determinant()
      expect(det.real).toBe(-2)
      expect(det.imag).toBe(0)
    })

    test('determinant of Pauli X is -1', () => {
      const X = new Operator([
        [Complex.ZERO, Complex.ONE],
        [Complex.ONE, Complex.ZERO],
      ])
      const det = X.determinant()
      expect(det.real).toBeCloseTo(-1, 10)
      expect(det.imag).toBeCloseTo(0, 10)
    })

    test('determinant of zero matrix is 0', () => {
      const zero = new Operator([
        [Complex.ZERO, Complex.ZERO],
        [Complex.ZERO, Complex.ZERO],
      ])
      const det = zero.determinant()
      expect(det.real).toBe(0)
      expect(det.imag).toBe(0)
    })
  })

  describe('applyTo() - apply to density matrix', () => {
    test('identity leaves density matrix unchanged', () => {
      const rho = [
        [new Complex(1, 0), new Complex(0, 0)],
        [new Complex(0, 0), new Complex(0, 0)],
      ]
      const id = Operator.identity()
      const result = id.applyTo(rho)
      expect(result[0][0].real).toBeCloseTo(1, 10)
      expect(result[0][1].real).toBeCloseTo(0, 10)
      expect(result[1][0].real).toBeCloseTo(0, 10)
      expect(result[1][1].real).toBeCloseTo(0, 10)
    })

    test('Pauli X flips |0><0| to |1><1|', () => {
      const rho = [
        [Complex.ONE, Complex.ZERO],
        [Complex.ZERO, Complex.ZERO],
      ]
      const X = new Operator([
        [Complex.ZERO, Complex.ONE],
        [Complex.ONE, Complex.ZERO],
      ])
      const result = X.applyTo(rho)
      // After applying X, should get |1><1| = [[0, 0], [0, 1]]
      expect(result[0][0].real).toBeCloseTo(0, 10)
      expect(result[1][1].real).toBeCloseTo(1, 10)
    })

    test('result is Hermitian', () => {
      const rho = [
        [new Complex(0.5, 0), new Complex(0.5, 0)],
        [new Complex(0.5, 0), new Complex(0.5, 0)],
      ]
      const op = new Operator([
        [new Complex(1, 0), new Complex(0, 1)],
        [new Complex(0, -1), new Complex(1, 0)],
      ])
      const result = op.applyTo(rho)
      // Check Hermitian: result[0][1]* = result[1][0]
      expect(result[0][1].real).toBeCloseTo(result[1][0].real, 10)
      expect(result[0][1].imag).toBeCloseTo(-result[1][0].imag, 10)
    })

    test('result has trace 1', () => {
      const rho = [
        [new Complex(1, 0), new Complex(0, 0)],
        [new Complex(0, 0), new Complex(0, 0)],
      ]
      const op = new Operator([
        [new Complex(0.7071, 0), new Complex(0.7071, 0)],
        [new Complex(0.7071, 0), new Complex(-0.7071, 0)],
      ])
      const result = op.applyTo(rho)
      const trace = result[0][0].real + result[1][1].real
      expect(trace).toBeCloseTo(1, 4) // Reduced precision due to rounding
    })
  })

  describe('quaternion()', () => {
    test('identity operator gives unit quaternion', () => {
      const id = Operator.identity()
      const q = id.quaternion()
      const norm = Math.sqrt(q.x ** 2 + q.y ** 2 + q.z ** 2 + q.w ** 2)
      expect(norm).toBeCloseTo(1, 10)
    })

    test('quaternion is normalized', () => {
      const op = new Operator([
        [new Complex(1, 2), new Complex(3, 4)],
        [new Complex(5, 6), new Complex(7, 8)],
      ])
      const q = op.quaternion()
      const norm = Math.sqrt(q.x ** 2 + q.y ** 2 + q.z ** 2 + q.w ** 2)
      expect(norm).toBeCloseTo(1, 10)
    })
  })
})
