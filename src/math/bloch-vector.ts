import { Complex } from './complex'
import { Vector3 } from 'three'
import { Operator } from './operator'
import { lerp } from './interpolation'

export class BlochVector extends Vector3 {
  constructor(vec: [number, number, number]) {
    super(vec[0], vec[1], vec[2])
  }

  static get ZERO() {
    return new BlochVector([0, 0, 1])
  }
  static get ONE() {
    return new BlochVector([0, 0, -1])
  }
  static get PLUS() {
    return new BlochVector([1, 0, 0])
  }
  static get MINUS() {
    return new BlochVector([-1, 0, 0])
  }
  static get I() {
    return new BlochVector([0, 1, 0])
  }
  static get MINUS_I() {
    return new BlochVector([0, -1, 0])
  }

  static random() {
    const theta = Math.random() * Math.PI
    const phi = Math.random() * 2 * Math.PI
    return BlochVector.fromAngles(theta, phi)
  }

  static zero() {
    return BlochVector.from(BlochVector.ZERO)
  }

  static from(x: number, y: number, z: number): BlochVector
  static from(y: Vector3): BlochVector
  static from(array: [number, number, number]): BlochVector
  static from(q: BlochVector): BlochVector
  static from(
    x: number | Vector3 | [number, number, number] | BlochVector,
    y: number = 0,
    z: number = 0
  ) {
    if (Array.isArray(x)) {
      return new BlochVector(x)
    }
    if (x instanceof BlochVector) {
      return x.clone()
    }
    if (x instanceof Vector3) {
      return new BlochVector([x.x, x.y, x.z])
    }
    return new BlochVector([x, y, z])
  }

  static fromAngles(theta: number, phi: number) {
    return BlochVector.zero().setAngles([theta, phi])
  }

  // the angle between the BlochVector and the z-axis
  get theta() {
    return Math.acos(this.z)
  }

  // the angle between the projection of the BlochVector on the xy-plane
  // and the x-axis
  get phi() {
    return Math.atan2(this.y, this.x)
  }

  get amplitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }

  get rho() {
    return this.densityMatrix()
  }

  densityMatrix() {
    const x = Complex.from(this.x)
    const y = Complex.from(this.y)
    const z = Complex.from(this.z)
    const half = Complex.from(0.5)
    const i = Complex.from(0, 1)
    return [
      [half.times(z.plus(1)), half.times(x.minus(i.times(y)))],
      [half.times(x.plus(i.times(y))), half.times(Complex.ONE.minus(z))],
    ]
  }

  static fromDensityMatrix(rho: Complex[][]) {
    const x = rho[0][1].real * 2
    const y = rho[1][0].imag * 2
    const z = rho[0][0].minus(rho[1][1]).real
    return new BlochVector([x, y, z])
  }

  applyOperator(op: Operator) {
    return BlochVector.fromDensityMatrix(op.applyTo(this.rho))
  }

  angles() {
    return [this.theta, this.phi]
  }

  setAngles(angles: [number, number]) {
    const [theta, phi] = angles
    this.set(
      Math.sin(theta) * Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(theta)
    )
    return this
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`
  }

  lerpTo(other: BlochVector, t: number) {
    // using spherical interpolation
    const theta = lerp(this.theta, other.theta, t)
    const phi = lerp(this.phi, other.phi, t)
    return BlochVector.fromAngles(theta, phi)
  }
}
