import { BaseComponent } from './component'
import { QubitArrow } from './qubit-arrow'
import { AngleIndicators } from './angle-indicators'
import { QubitProjWedge } from './qubit-proj-wedge'
import { BlochVector } from '../math/bloch-vector'
import { animate, type CancellablePromise } from '../animation'
import { lerp } from '../math/interpolation'
import type { ColorRepresentation, Color } from 'three'

/**
 * A display for a qubit state on the Bloch sphere
 *
 * This component shows the arrow, angle indicators, and a label.
 *
 * @example
 * ```ts
 * const q = new BlochVector(0, 0, 1)
 * const qubit = new QubitDisplay(q)
 * qubit.color = 0xe1b53e
 * blochSphere.add(qubit)
 * ```
 */
export class QubitDisplay extends BaseComponent {
  arrow: QubitArrow
  wedge: QubitProjWedge
  angleIndicators: AngleIndicators
  state: BlochVector
  private _anim: CancellablePromise<void> | null = null
  constructor(q?: BlochVector) {
    super('qubit-display')

    this.arrow = new QubitArrow()
    this.add(this.arrow)

    this.wedge = new QubitProjWedge()
    // this.add(this.wedge)

    this.angleIndicators = new AngleIndicators()
    this.add(this.angleIndicators)

    this.state = BlochVector.zero()
    if (q) {
      this.set(q)
    }
  }

  set color(color: ColorRepresentation) {
    super.color = color
    this.arrow.color = color
  }

  /**
   * Set the bloch vector state of the display
   *
   * Can also be used to animate the state of the qubit.
   *
   * @param q - The new Bloch vector state to set.
   * @param duration - The duration of the animation (default is 0).
   * @param easing - The easing function to use for the animation (default is 'quadInOut').
   */
  set(q: BlochVector, duration = 0, easing = 'quadInOut') {
    if (duration > 0) {
      let start = this.state.angles()
      let end = q.angles()
      this._anim?.cancel()
      this._anim = animate(
        (k) => {
          this.state.setAngles([
            lerp(start[0], end[0], k),
            lerp(start[1], end[1], k),
          ])
          this.set(this.state)
        },
        duration,
        easing
      )
      return this._anim
    }
    this.arrow.follow(q)
    this.wedge.follow(q)
    this.angleIndicators.update(q)
  }
}
