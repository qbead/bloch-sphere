import { BaseComponent } from './component'
import { QubitArrow } from './qubit-arrow'
import { AngleIndicators } from './angle-indicators'
import { QubitProjWedge } from './qubit-proj-wedge'
import { Qubit } from '../qubit'
import { animate } from '../animator'
import { lerp } from '../math'

export class QubitDisplay extends BaseComponent {
  private arrow: QubitArrow
  private wedge: QubitProjWedge
  private angleIndicators: AngleIndicators
  state: Qubit
  private _anim: any = null
  constructor(q?: Qubit) {
    super('qubit-display')

    this.arrow = new QubitArrow()
    this.add(this.arrow)

    this.wedge = new QubitProjWedge()
    this.add(this.wedge)

    this.angleIndicators = new AngleIndicators()
    this.add(this.angleIndicators)

    this.state = Qubit.zero()
    if (q) {
      this.set(q)
    }
  }

  set(q: Qubit, duration = 0, easing = 'quadInOut') {
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
