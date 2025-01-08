import { Complex } from './complex'
import { Vector3 } from 'three'
import { Operator } from './operator'

export class BlochVector {
  vec: [number, number, number] = [0, 0, 1]

  constructor(vec: [number, number, number]) {
    this.vec = vec
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

  static from(u: number, v: number, w: number): BlochVector
  static from(v: Vector3): BlochVector
  static from(array: [number, number, number]): BlochVector
  static from(q: BlochVector): BlochVector
  static from(
    u: number | Vector3 | [number, number, number] | BlochVector,
    v: number = 0,
    w: number = 0
  ) {
    if (Array.isArray(u)) {
      return new BlochVector(u)
    }
    if (u instanceof BlochVector) {
      return new BlochVector(u.vec)
    }
    if (u instanceof Vector3) {
      return new BlochVector([u.x, u.y, u.z])
    }
    return new BlochVector([u, v, w])
  }

  static fromAngles(theta: number, phi: number) {
    return BlochVector.zero().setAngles([theta, phi])
  }

  get u() {
    return this.vec[0]
  }

  get v() {
    return this.vec[1]
  }

  get w() {
    return this.vec[2]
  }

  // the angle between the BlochVector and the z-axis
  get theta() {
    return Math.acos(this.w)
  }

  // the angle between the projection of the BlochVector on the xy-plane
  // and the x-axis
  get phi() {
    return Math.atan2(this.v, this.u)
  }

  get amplitude() {
    return Math.sqrt(this.u ** 2 + this.v ** 2 + this.w ** 2)
  }

  get rho() {
    return this.densityMatrix()
  }

  densityMatrix() {
    const u = Complex.from(this.u)
    const v = Complex.from(this.v)
    const w = Complex.from(this.w)
    const half = Complex.from(0.5)
    const i = Complex.from(0, 1)
    return [
      [half.times(w.plus(1)), half.times(u.minus(i.times(v)))],
      [half.times(u.plus(i.times(v))), half.times(Complex.ONE.minus(w))],
    ]
  }

  static fromDensityMatrix(rho: Complex[][]) {
    const u = rho[0][1].real * 2
    const v = rho[1][0].imag * 2
    const w = rho[0][0].minus(rho[1][1]).real
    return new BlochVector([u, v, w])
  }

  applyOperator(op: Operator) {
    return BlochVector.fromDensityMatrix(op.applyTo(this.rho))
  }

  vector3() {
    return new Vector3(this.u, this.v, this.w)
  }

  angles() {
    return [this.theta, this.phi]
  }

  setAngles(angles: [number, number]) {
    const [theta, phi] = angles
    this.vec = [
      Math.sin(theta) * Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(theta),
    ]
    return this
  }

  clone() {
    return new BlochVector(this.vec)
  }

  toString() {
    return `(${this.u}, ${this.v}, ${this.w})`
  }
}
