[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / animate

# Function: animate()

> **animate**(`callback`, `duration`, `easing`, `loop`): [`CancellablePromise`](../interfaces/CancellablePromise.md)\<`void`\>

Defined in: [src/animation.ts:66](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/animation.ts#L66)

Animation helper function

This helper will set up an animation loop and call the callback function
with the progress of the animation.

Returns a promise that resolves when the animation completes. The promise
has a cancel() method that can be called to stop the animation early.
If the callback throws an error, the promise will reject with that error.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback` | [`AnimationCallback`](../type-aliases/AnimationCallback.md) | `undefined` | The function to call with the progress of the animation. |
| `duration` | `number` | `1000` | The duration of the animation in milliseconds (default is 1000). |
| `easing` | `string` | `'linear'` | The easing function to use (default is 'linear'). |
| `loop` | `boolean` | `false` | Whether to loop the animation (default is false). Looping animations never resolve unless cancelled. |

## Returns

[`CancellablePromise`](../interfaces/CancellablePromise.md)\<`void`\>

A cancellable promise that resolves when the animation completes or rejects if the callback throws an error.

## Example

```ts
// await animation completion
await animate((progress) => {
  myElement.style.opacity = progress
}, 1000, 'easeInOut')

// looping animation with cancellation
const anim = animate((progress) => {
  myElement.style.opacity = progress
}, 1000, 'easeInOut', true)
// later...
anim.cancel()

// handle errors
try {
  await animate((progress) => {
    if (someCondition) throw new Error('Animation failed')
    myElement.style.opacity = progress
  }, 1000)
} catch (error) {
  console.error('Animation error:', error)
}
```
