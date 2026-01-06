// @ts-ignore
import { Parsers } from 'intween'

export type AnimationCallback = (progress: number) => void
/** @deprecated Use CancellablePromise instead */
export type CancelAnimation = () => void

export interface CancellablePromise<T> extends Promise<T> {
  cancel(): void
}

/**
 * Creates a deferred promise with exposed resolve and reject functions
 */
function deferred<T>() {
  let resolve: (value: T | PromiseLike<T>) => void
  let reject: (reason?: any) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve: resolve!, reject: reject! }
}

/**
 * Animation helper function
 *
 * This helper will set up an animation loop and call the callback function
 * with the progress of the animation.
 *
 * Returns a promise that resolves when the animation completes. The promise
 * has a cancel() method that can be called to stop the animation early.
 * If the callback throws an error, the promise will reject with that error.
 *
 * @param callback - The function to call with the progress of the animation.
 * @param duration - The duration of the animation in milliseconds (default is 1000).
 * @param easing - The easing function to use (default is 'linear').
 * @param loop - Whether to loop the animation (default is false). Looping animations never resolve unless cancelled.
 * @returns A cancellable promise that resolves when the animation completes or rejects if the callback throws an error.
 *
 * @example
 * ```ts
 * // await animation completion
 * await animate((progress) => {
 *   myElement.style.opacity = progress
 * }, 1000, 'easeInOut')
 *
 * // looping animation with cancellation
 * const anim = animate((progress) => {
 *   myElement.style.opacity = progress
 * }, 1000, 'easeInOut', true)
 * // later...
 * anim.cancel()
 *
 * // handle errors
 * try {
 *   await animate((progress) => {
 *     if (someCondition) throw new Error('Animation failed')
 *     myElement.style.opacity = progress
 *   }, 1000)
 * } catch (error) {
 *   console.error('Animation error:', error)
 * }
 * ```
 */
export function animate(
  callback: AnimationCallback,
  duration = 1000,
  easing = 'linear',
  loop = false
): CancellablePromise<void> {
  const easeFn = Parsers.parseEasing(easing)
  let start = performance.now()
  let cancelled = false

  const { promise, resolve, reject } = deferred<void>()

  const cancellablePromise = promise as CancellablePromise<void>

  const step = () => {
    if (cancelled) {
      // exit early
      if (!loop) {
        callback(1)
      }
      resolve()
      return
    }

    try {
      const time = performance.now()
      const progress = Math.min((time - start) / duration, 1)
      const k = easeFn(progress)
      callback(k)

      if (progress >= 1) {
        if (loop) {
          start = time
        } else {
          resolve()
          return
        }
      }
      requestAnimationFrame(step)
    } catch (error) {
      reject(error)
    }
  }

  cancellablePromise.cancel = () => {
    if (!cancelled) {
      cancelled = true
    }
  }

  requestAnimationFrame(step)
  return cancellablePromise
}
