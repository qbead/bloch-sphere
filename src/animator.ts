// @ts-ignore
import { Parsers } from 'intween'

export type AnimationCallback = (progress: number) => void
export type CancelAnimation = () => void

export function animate(
  callback: AnimationCallback,
  duration = 1000,
  easing = 'linear'
): CancelAnimation {
  const easeFn = Parsers.parseEasing(easing)
  const start = performance.now()
  let cancelled = false
  const step = () => {
    if (cancelled) return
    const time = performance.now()
    const progress = easeFn(Math.min((time - start) / duration, 1))
    callback(progress)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
  return () => {
    cancelled = true
  }
}
