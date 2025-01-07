import { Qubit } from '../bloch-vector'
import { Wedge } from './wedge'

export class QubitProjWedge extends Wedge {
  constructor() {
    super()
  }

  follow(qubit: Qubit) {
    const { theta, phi } = qubit
    if (theta > Math.PI / 2) {
      this.rotation.set(0, Math.PI, Math.PI - phi)
    } else {
      this.rotation.set(0, 0, phi)
    }
  }
}
