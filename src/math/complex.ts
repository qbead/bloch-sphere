/**
 * A type that can be converted to a Complex number.
 */
export type IntoComplex = Complex | number | [number, number]

/**
 * A class representing a complex number.
 */
export class Complex {
  real: number
  imag: number

  static get ZERO() {
    return new Complex(0, 0)
  }

  static get ONE() {
    return new Complex(1, 0)
  }

  static get I() {
    return new Complex(0, 1)
  }

  constructor(real: number, imag: number = 0) {
    this.real = real
    this.imag = imag
  }

  static from(value: IntoComplex): Complex
  static from(real: number, imag?: number): Complex
  static from(value: IntoComplex | number, imag?: number): Complex {
    if (typeof value === 'number') {
      return new Complex(value, imag)
    }
    if (Array.isArray(value)) {
      return new Complex(value[0], value[1])
    }
    return new Complex(value.real, value.imag)
  }

  static random() {
    return Complex.from(Math.random(), Math.random())
  }

  static unitRandom() {
    const theta = Math.random() * 2 * Math.PI
    return Complex.from(Math.cos(theta), Math.sin(theta))
  }

  static fromPolar(magnitude: number, phase: number) {
    return Complex.from(
      magnitude * Math.cos(phase),
      magnitude * Math.sin(phase)
    )
  }

  copy(other: Complex) {
    this.real = other.real
    this.imag = other.imag
    return this
  }

  clone() {
    return new Complex(this.real, this.imag)
  }

  plus(other: IntoComplex) {
    const { real, imag } = Complex.from(other)
    return Complex.from(this.real + real, this.imag + imag)
  }

  minus(other: IntoComplex) {
    const { real, imag } = Complex.from(other)
    return Complex.from(this.real - real, this.imag - imag)
  }

  times(other: IntoComplex) {
    const { real, imag } = Complex.from(other)
    return Complex.from(
      this.real * real - this.imag * imag,
      this.real * imag + this.imag * real
    )
  }

  dividedBy(other: IntoComplex) {
    const { real, imag } = Complex.from(other)
    const denominator = real * real + imag * imag
    return Complex.from(
      (this.real * real + this.imag * imag) / denominator,
      (this.imag * real - this.real * imag) / denominator
    )
  }

  get magnitude() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag)
  }

  get phase() {
    return Math.atan2(this.imag, this.real)
  }

  conjugate() {
    return Complex.from(this.real, -this.imag)
  }

  reciprocal() {
    const denominator = this.real * this.real + this.imag * this.imag
    return Complex.from(this.real / denominator, -this.imag / denominator)
  }

  pow(exponent: number) {
    const r = this.magnitude ** exponent
    const theta = this.phase * exponent
    return Complex.fromPolar(r, theta)
  }

  sqrt() {
    return this.pow(0.5)
  }

  toString() {
    return `${this.real} + ${this.imag}i`
  }
}
