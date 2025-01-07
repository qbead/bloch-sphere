import { Complex } from './complex'
import { Operator } from './operator'

export function identity() {
  return Operator.identity()
}

export function x() {
  return new Operator([
    [Complex.ZERO, Complex.ONE],
    [Complex.ONE, Complex.ZERO],
  ])
}

export const not = x

export function y() {
  return new Operator([
    [Complex.ZERO, Complex.I.times(-1)],
    [Complex.I, Complex.ZERO],
  ])
}

export function z() {
  return new Operator([
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.ONE.times(-1)],
  ])
}

export function hadamard() {
  return x()
    .plus(z())
    .scale(1 / Math.sqrt(2))
}

export function phase(phi: number) {
  return new Operator([
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.fromPolar(1, phi)],
  ])
}

// TODO check these
export function rx(theta: number) {
  return new Operator([
    [
      Complex.from(Math.cos(theta / 2), 0),
      Complex.I.times(Math.sin(theta / 2)),
    ],
    [
      Complex.I.times(Math.sin(theta / 2)),
      Complex.from(Math.cos(theta / 2), 0),
    ],
  ])
}

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

export function rz(theta: number) {
  return new Operator([
    [
      Complex.from(Math.cos(theta / 2), 0),
      Complex.I.times(Math.sin(theta / 2)),
    ],
    [
      Complex.I.times(Math.sin(theta / 2)),
      Complex.from(Math.cos(theta / 2), 0),
    ],
  ])
}
