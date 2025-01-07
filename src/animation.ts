// @ts-ignore
import { Parsers } from 'intween'

export type AnimationCallback = (progress: number) => void
export type CancelAnimation = () => void

export function animate(
  callback: AnimationCallback,
  duration = 1000,
  easing = 'linear',
  loop = false
): CancelAnimation {
  const easeFn = Parsers.parseEasing(easing)
  let start = performance.now()
  let cancelled = false
  const step = () => {
    if (cancelled) return
    const time = performance.now()
    const progress = Math.min((time - start) / duration, 1)
    const k = easeFn(progress)
    callback(k)
    if (progress >= 1) {
      if (loop) {
        start = time
      } else {
        return
      }
    }
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
  return () => {
    cancelled = true
  }
}
