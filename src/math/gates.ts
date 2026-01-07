import { Complex } from './complex'
import { Operator } from './operator'

/**
 * The identity operator
 */
export function identity() {
  return Operator.identity()
}

/**
 * The Pauli-X operator (also known as NOT or bit-flip operator)
 */
export function x() {
  return new Operator([
    [Complex.ZERO, Complex.ONE],
    [Complex.ONE, Complex.ZERO],
  ])
}

/**
 * Alias for the Pauli-X operator
 */
export const not = x

/**
 * The Pauli-Y operator
 */
export function y() {
  return new Operator([
    [Complex.ZERO, Complex.I.times(-1)],
    [Complex.I, Complex.ZERO],
  ])
}

/**
 * The Pauli-Z operator
 */
export function z() {
  return new Operator([
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.ONE.times(-1)],
  ])
}

/**
 * The Hadamard operator
 *
 * Often used to create superposition states from the |0> state
 */
export function hadamard() {
  return x()
    .plus(z())
    .scale(1 / Math.sqrt(2))
}

/**
 * The phase operator
 *
 * Applies a phase of `phi` to the |1> state
 */
export function phase(phi: number) {
  return new Operator([
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.fromPolar(1, phi)],
  ])
}

/**
 * Rotation around the X axis
 * Applies a rotation of `theta` radians around the X axis
 */
export function rx(theta: number) {
  return new Operator([
    [
      Complex.from(Math.cos(theta / 2), 0),
      Complex.I.times(-Math.sin(theta / 2)),
    ],
    [
      Complex.I.times(-Math.sin(theta / 2)),
      Complex.from(Math.cos(theta / 2), 0),
    ],
  ])
}

/**
 * Rotation around the Y axis
 * Applies a rotation of `theta` radians around the Y axis
 */
export function ry(theta: number) {
  return new Operator([
    [
      Complex.from(Math.cos(theta / 2), 0),
      Complex.from(-Math.sin(theta / 2), 0),
    ],
    [
      Complex.from(Math.sin(theta / 2), 0),
      Complex.from(Math.cos(theta / 2), 0),
    ],
  ])
}

/**
 * Rotation around the Z axis
 * Applies a rotation of `theta` radians around the Z axis
 */
export function rz(theta: number) {
  return new Operator([
    [
      Complex.fromPolar(1, -theta / 2),
      Complex.ZERO,
    ],
    [
      Complex.ZERO,
      Complex.fromPolar(1, theta / 2),
    ],
  ])
}
