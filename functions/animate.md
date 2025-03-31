[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / animate

# Function: animate()

> **animate**(`callback`, `duration`, `easing`, `loop`): [`CancelAnimation`](../type-aliases/CancelAnimation.md)

Defined in: [src/animation.ts:29](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/animation.ts#L29)

Animation helper function

This helper will set up an animation loop and call the callback function
with the progress of the animation.

A cancel function is returned that can be called to stop the animation.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback` | [`AnimationCallback`](../type-aliases/AnimationCallback.md) | `undefined` | The function to call with the progress of the animation. |
| `duration` | `number` | `1000` | The duration of the animation in milliseconds (default is 1000). |
| `easing` | `string` | `'linear'` | The easing function to use (default is 'linear'). |
| `loop` | `boolean` | `false` | Whether to loop the animation (default is false). |

## Returns

[`CancelAnimation`](../type-aliases/CancelAnimation.md)

A function that can be called to cancel the animation.

## Example

```ts
// looping animation that fades in and out
const cancel = animate((progress) => {
  myElement.style.opacity = progress
}, 1000, 'easeInOut', true)
```
