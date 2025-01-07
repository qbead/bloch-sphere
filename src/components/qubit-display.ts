import { BaseComponent } from './component'
import { QubitArrow } from './qubit-arrow'
import { AngleIndicators } from './angle-indicators'
import { QubitProjWedge } from './qubit-proj-wedge'
import { BlochVector } from '../math/bloch-vector'
import { animate } from '../animation'
import { lerp } from '../math/interpolation'

export class QubitDisplay extends BaseComponent {
  private arrow: QubitArrow
  private wedge: QubitProjWedge
  private angleIndicators: AngleIndicators
  state: BlochVector
  private _anim: any = null
  constructor(q?: BlochVector) {
    super('qubit-display')

    this.arrow = new QubitArrow()
    this.add(this.arrow)

    this.wedge = new QubitProjWedge()
    this.add(this.wedge)

    this.angleIndicators = new AngleIndicators()
    this.add(this.angleIndicators)

    this.state = BlochVector.zero()
    if (q) {
      this.set(q)
    }
  }

  set(q: BlochVector, duration = 0, easing = 'quadInOut') {
    if (duration > 0) {
      let start = this.state.angles()
      let end = q.angles()
      this._anim?.call()
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
