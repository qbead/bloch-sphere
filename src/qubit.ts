import { Complex } from './complex'
import { Vector3 } from 'three'

export class Qubit {
  blochVector: [number, number, number] = [0, 0, 1]

  constructor(blochVector: [number, number, number]) {
    this.blochVector = blochVector
  }

  static ZERO = new Qubit([0, 0, 1])
  static ONE = new Qubit([0, 0, -1])
  static PLUS = new Qubit([1, 0, 0])
  static MINUS = new Qubit([-1, 0, 0])
  static I = new Qubit([0, 1, 0])
  static MINUS_I = new Qubit([0, -1, 0])

  static random() {
    const theta = Math.random() * Math.PI
    const phi = Math.random() * 2 * Math.PI
    return Qubit.fromAngles(theta, phi)
  }

  static zero() {
    return Qubit.from(Qubit.ZERO)
  }

  static from(u: number, v: number, w: number): Qubit
  static from(v: Vector3): Qubit
  static from(array: [number, number, number]): Qubit
  static from(q: Qubit): Qubit
  static from(
    u: number | Vector3 | [number, number, number] | Qubit,
    v: number = 0,
    w: number = 0
  ) {
    if (Array.isArray(u)) {
      return new Qubit(u)
    }
    if (u instanceof Qubit) {
      return new Qubit(u.blochVector)
    }
    if (u instanceof Vector3) {
      return new Qubit([u.x, u.y, u.z])
    }
    return new Qubit([u, v, w])
  }

  static fromAngles(theta: number, phi: number) {
    return Qubit.zero().setAngles([theta, phi])
  }

  get u() {
    return this.blochVector[0]
  }

  get v() {
    return this.blochVector[1]
  }

  get w() {
    return this.blochVector[2]
  }

  // the angle between the qubit and the z-axis
  get theta() {
    return Math.acos(this.w)
  }

  // the angle between the projection of the qubit on the xy-plane
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
      [half.times(u.plus(i.times(v))), half.times(w.minus(1))],
    ]
  }

  vector3() {
    return new Vector3(this.u, this.v, this.w)
  }

  angles() {
    return [this.theta, this.phi]
  }

  setAngles(angles: [number, number]) {
    const [theta, phi] = angles
    this.blochVector = [
      Math.sin(theta) * Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(theta),
    ]
    return this
  }

  clone() {
    return new Qubit(this.blochVector)
  }
}
