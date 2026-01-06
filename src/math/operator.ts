import { Complex } from './complex'
import { Quaternion } from 'three'

/**
 * Quantum operators are 2x2 matrices of complex numbers
 *
 * ```
 * [ a  b ]
 * [ c  d ]
 * ```
 */
export class Operator {
  elements: Complex[][]

  static identity() {
    return new Operator([
      [Complex.ONE, Complex.ZERO],
      [Complex.ZERO, Complex.ONE],
    ])
  }

  constructor(elements: Complex[][]) {
    this.elements = elements
  }

  /**
   * The first row, first column element of the operator
   */
  get a() {
    return this.elements[0][0]
  }

  /**
   * The first row, second column element of the operator
   */
  get b() {
    return this.elements[0][1]
  }

  /**
   * The second row, first column element of the operator
   */
  get c() {
    return this.elements[1][0]
  }

  /**
   * The second row, second column element of the operator
   */
  get d() {
    return this.elements[1][1]
  }

  copy(other: Operator) {
    this.elements = other.elements.map((row) => row.map((e) => e.clone()))
    return this
  }

  clone() {
    return new Operator(
      this.elements.map((row) => row.map((e) => e.clone()))
    )
  }

  /**
   * Multiply the operator by a scalar
   */
  scale(scalar: number) {
    this.elements = this.elements.map((row) => row.map((e) => e.times(scalar)))
    return this
  }

  /**
   * Multiply the operator by another operator
   */
  times(other: Operator) {
    const a = this.a.times(other.a).plus(this.b.times(other.c))
    const b = this.a.times(other.b).plus(this.b.times(other.d))
    const c = this.c.times(other.a).plus(this.d.times(other.c))
    const d = this.c.times(other.b).plus(this.d.times(other.d))
    return new Operator([
      [a, b],
      [c, d],
    ])
  }

  /**
   * Get the conjugate transpose of the operator as a new operator
   */
  conjugateTranspose() {
    return new Operator([
      [this.a.conjugate(), this.c.conjugate()],
      [this.b.conjugate(), this.d.conjugate()],
    ])
  }

  /**
   * Apply this operator to a density matrix
   */
  applyTo(rho: Complex[][]) {
    return this.times(new Operator(rho)).times(this.conjugateTranspose())
      .elements
  }

  /**
   * Add another operator to this operator
   */
  plus(other: Operator) {
    const a = this.a.plus(other.a)
    const b = this.b.plus(other.b)
    const c = this.c.plus(other.c)
    const d = this.d.plus(other.d)
    return new Operator([
      [a, b],
      [c, d],
    ])
  }

  /**
   * Get the determinant of the operator
   */
  determinant() {
    return this.a.times(this.d).minus(this.b.times(this.c))
  }

  /**
   * Get this operator as a THREE.Quaternion
   */
  quaternion() {
    const w = this.a.plus(this.d).real
    const x = this.c.plus(this.b)
    const y = this.c.minus(this.b)
    const z = this.a.minus(this.d)

    if (x.real == 0 && y.real == 0 && z.real == 0) {
      return new Quaternion(x.imag, y.imag, z.imag, w).normalize()
    } else {
      return new Quaternion(x.real, y.real, z.real, w).normalize()
    }
  }
}
