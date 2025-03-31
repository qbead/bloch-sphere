// @ts-ignore
import { Parsers } from 'intween'

export type AnimationCallback = (progress: number) => void
export type CancelAnimation = () => void

/**
 * Animation helper function
 *
 * This helper will set up an animation loop and call the callback function
 * with the progress of the animation.
 *
 * A cancel function is returned that can be called to stop the animation.
 *
 * @param callback - The function to call with the progress of the animation.
 * @param duration - The duration of the animation in milliseconds (default is 1000).
 * @param easing - The easing function to use (default is 'linear').
 * @param loop - Whether to loop the animation (default is false).
 * @returns A function that can be called to cancel the animation.
 *
 * @example
 * ```ts
 * // looping animation that fades in and out
 * const cancel = animate((progress) => {
 *   myElement.style.opacity = progress
 * }, 1000, 'easeInOut', true)
 * ```
 */
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
