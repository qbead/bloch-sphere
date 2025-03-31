import { Complex } from './complex'
import { Vector3 } from 'three'
import { Operator } from './operator'
import { lerp } from './interpolation'

/**
 * A class representing a Bloch vector
 *
 * Angle `theta` is the angle between the Bloch vector and the z-axis
 * Angle `phi` is the "timezone" angle, the angle from the x-axis in the xy-plane
 *
 * This class extends the Vector3 class from three.js and provides additional
 * functionality.
 *
 * @example
 * ```ts
 * const blochVector = BlochVector.from(1, 0, 0)
 * const blochVector2 = BlochVector.from([0, 1, 0])
 * const blochVector3 = BlochVector.fromAngles(0.5 * Math.PI, 1.5 * Math.PI)
 * const blochVector4 = BlochVector.MINUS_I
 * const blochVector5 = BlochVector.random()
 * ```
 */
export class BlochVector extends Vector3 {
  /**
   * A bloch vector representing the zero state
   */
  static get ZERO() {
    return new BlochVector(0, 0, 1)
  }
  /**
   * A bloch vector representing the one state
   */
  static get ONE() {
    return new BlochVector(0, 0, -1)
  }

  /**
   * A bloch vector representing the plus state (|+>) or (|0> + |1>)/sqrt(2)
   */
  static get PLUS() {
    return new BlochVector(1, 0, 0)
  }
  /**
   * A bloch vector representing the minus state (|->) or (|0> - |1>)/sqrt(2)
   */
  static get MINUS() {
    return new BlochVector(-1, 0, 0)
  }
  /**
   * A bloch vector representing the imaginary state (|i>) or (|0> + i|1>)/sqrt(2)
   */
  static get I() {
    return new BlochVector(0, 1, 0)
  }
  /**
   * A bloch vector representing the minus imaginary state (|-i>) or (|0> - i|1>)/sqrt(2)
   */
  static get MINUS_I() {
    return new BlochVector(0, -1, 0)
  }

  /**
   * Generate a random Bloch vector with magnitude 1
   */
  static random() {
    const theta = Math.random() * Math.PI
    const phi = Math.random() * 2 * Math.PI
    return BlochVector.fromAngles(theta, phi)
  }

  /**
   * Create a zero state Bloch vector
   */
  static zero() {
    return BlochVector.from(BlochVector.ZERO)
  }

  /**
   * Utility function to create a bloch vector in many ways
   *
   * - `BlochVector.from(x, y, z)` creates a Bloch vector from x, y, z coordinates
   * - `BlochVector.from([x, y, z])` creates a Bloch vector from an array of coordinates
   * - `BlochVector.from(new Vector3(x, y, z))` creates a Bloch vector from a three.js Vector3
   * - `BlochVector.from(new BlochVector(x, y, z))` creates a Bloch vector from another Bloch vector
   */
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
      return new BlochVector(x[0], x[1], x[2])
    }
    if (x instanceof BlochVector) {
      return x.clone()
    }
    if (x instanceof Vector3) {
      return new BlochVector(x.x, x.y, x.z)
    }
    return new BlochVector(x, y, z)
  }

  /**
   * Create a Bloch vector from angles (theta, phi)
   */
  static fromAngles(theta: number, phi: number) {
    return BlochVector.zero().setAngles([theta, phi])
  }

  /** The angle between the BlochVector and the z-axis */
  get theta() {
    return Math.acos(this.z)
  }

  /** The angle between the projection of the BlochVector on the xy-plane
      and the x-axis */
  get phi() {
    return Math.atan2(this.y, this.x)
  }

  /** The amplitude of the Bloch vector */
  get amplitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }

  /** The density matrix representation of the Bloch vector */
  get rho() {
    return this.densityMatrix()
  }

  /** The density matrix representation of the Bloch vector */
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

  /**
   * Create a Bloch vector from a density matrix
   *
   * @param rho - The density matrix to create the Bloch vector from
   */
  static fromDensityMatrix(rho: Complex[][]) {
    const x = rho[0][1].real * 2
    const y = rho[1][0].imag * 2
    const z = rho[0][0].minus(rho[1][1]).real
    return new BlochVector(x, y, z)
  }

  /**
   * Apply an operator to the Bloch vector returning a new Bloch vector
   *
   * @param op - The operator to apply
   * @returns The new Bloch vector
   */
  applyOperator(op: Operator) {
    return BlochVector.fromDensityMatrix(op.applyTo(this.rho))
  }

  /**
   * Get both angles of the Bloch vector as an array `[theta, phi]`
   */
  angles() {
    return [this.theta, this.phi]
  }

  /**
   * Set the Bloch vector from angles `[theta, phi]`
   *
   * @param angles - The angles to set the Bloch vector to
   */
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

  /**
   * Spherical linear interpolation of this Bloch vector to another Bloch vector
   *
   * @param other - The other Bloch vector to interpolate to
   * @param t - The interpolation factor (0 <= t <= 1)
   * @returns The interpolated Bloch vector
   */
  slerpTo(other: BlochVector, t: number) {
    // using spherical interpolation
    const theta = lerp(this.theta, other.theta, t)
    const phi = lerp(this.phi, other.phi, t)
    return BlochVector.fromAngles(theta, phi)
  }
}
