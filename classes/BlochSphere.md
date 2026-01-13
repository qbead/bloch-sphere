[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BlochSphere

# Class: BlochSphere

Defined in: [src/bloch-sphere.ts:87](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L87)

A Bloch Sphere Widget

This class is a wrapper around the THREE.js WebGLRenderer and CSS2DRenderer
to create a Bloch sphere visualization.

It provides methods to add and remove objects from the scene.

It must be attached to a parent element in the DOM to be visible. It will
automatically resize to fit the parent element.

To resize on window resize, you can call the `resize` method in the
window resize event listener.

## Example

```ts
import { BlochSphere } from 'bloch-sphere'

const blochSphere = new BlochSphere({
 fontSize: 1.25,
})

blochSphere.attach(document.body)
window.addEventListener(
 'resize',
 () => {
  blochSphere.resize()
 },
 { passive: true }
)

// create a qubit display
const qubit = new QubitDisplay(BlochVector.fromAngles(1, 0))
// add the qubit to the Bloch sphere
blochSphere.add(qubit)
```

## Constructors

### Constructor

> **new BlochSphere**(`options`?): `BlochSphere`

Defined in: [src/bloch-sphere.ts:97](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L97)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`BlochSphereOptions`](../type-aliases/BlochSphereOptions.md) |

#### Returns

`BlochSphere`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="camera"></a> `camera` | `OrthographicCamera` | [src/bloch-sphere.ts:92](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L92) |
| <a id="controls"></a> `controls` | `OrbitControls` | [src/bloch-sphere.ts:93](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L93) |
| <a id="cssrenderer"></a> `cssRenderer` | `CSS2DRenderer` | [src/bloch-sphere.ts:89](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L89) |
| <a id="el"></a> `el` | `HTMLElement` | [src/bloch-sphere.ts:90](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L90) |
| <a id="renderer"></a> `renderer` | `WebGLRenderer` | [src/bloch-sphere.ts:88](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L88) |
| <a id="scene"></a> `scene` | [`BlochSphereScene`](BlochSphereScene.md) | [src/bloch-sphere.ts:91](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L91) |

## Accessors

### showGrid

#### Get Signature

> **get** **showGrid**(): `boolean`

Defined in: [src/bloch-sphere.ts:165](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L165)

##### Returns

`boolean`

#### Set Signature

> **set** **showGrid**(`value`): `void`

Defined in: [src/bloch-sphere.ts:169](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L169)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

## Methods

### add()

> **add**(`item`): `void`

Defined in: [src/bloch-sphere.ts:173](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L173)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### attach()

> **attach**(`parent`?): `void`

Defined in: [src/bloch-sphere.ts:202](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L202)

Attaches the widget to a parent element

Must be called to make the widget visible.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent`? | `HTMLElement` |

#### Returns

`void`

***

### clearPlot()

> **clearPlot**(): `void`

Defined in: [src/bloch-sphere.ts:186](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L186)

Removes all objects from the plot

This will not remove the grid or the sphere.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/bloch-sphere.ts:467](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L467)

Performs cleanup and disposes everything contained in the widget

#### Returns

`void`

***

### getCameraAngles()

> **getCameraAngles**(): \[`number`, `number`\]

Defined in: [src/bloch-sphere.ts:345](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L345)

Get current camera angles as [theta, phi]

#### Returns

\[`number`, `number`\]

***

### getCameraBlochVector()

> **getCameraBlochVector**(): [`BlochVector`](BlochVector.md)

Defined in: [src/bloch-sphere.ts:353](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L353)

Get the Bloch vector pointing from origin to camera

#### Returns

[`BlochVector`](BlochVector.md)

***

### getCameraZoom()

> **getCameraZoom**(): `number`

Defined in: [src/bloch-sphere.ts:338](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L338)

Get current camera zoom level

#### Returns

`number`

***

### interactivity()

> **interactivity**(`options`?): `InteractivityOptions`

Defined in: [src/bloch-sphere.ts:429](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L429)

Control user interactivity with the camera

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `boolean` \| `InteractivityOptions` | Interactivity options or boolean to enable/disable all interactions |

#### Returns

`InteractivityOptions`

Current interactivity state if no arguments provided

***

### remove()

> **remove**(`item`): `void`

Defined in: [src/bloch-sphere.ts:177](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L177)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [src/bloch-sphere.ts:231](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L231)

Renders the scene

This is called automatically in the animation loop unless that
loop is stopped.

#### Returns

`void`

***

### resize()

> **resize**(`width`?, `height`?): `void`

Defined in: [src/bloch-sphere.ts:214](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L214)

Resizes the widget to fit the parent element

Optionally, you can specify the width and height to resize to.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `width`? | `number` |
| `height`? | `number` |

#### Returns

`void`

***

### scale()

> **scale**(`size`): `void`

Defined in: [src/bloch-sphere.ts:193](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L193)

Rescales the sphere

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

#### Returns

`void`

***

### setCameraAngles()

> **setCameraAngles**(`theta`, `phi`, `duration`?, `easing`?): `void` \| `Promise`\<`void`\>

Defined in: [src/bloch-sphere.ts:391](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L391)

Set camera position using spherical coordinates

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `theta` | `number` |
| `phi` | `number` |
| `duration`? | `number` |
| `easing`? | `string` |

#### Returns

`void` \| `Promise`\<`void`\>

***

### setCameraState()

> **setCameraState**(`cameraState`, `duration`?, `easing`?): `void` \| `Promise`\<`void`\>

Defined in: [src/bloch-sphere.ts:363](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L363)

Set camera state (unified method)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cameraState` | `CameraState` |
| `duration`? | `number` |
| `easing`? | `string` |

#### Returns

`void` \| `Promise`\<`void`\>

***

### setCameraToBlochVector()

> **setCameraToBlochVector**(`blochVector`, `duration`?, `easing`?): `void` \| `Promise`\<`void`\>

Defined in: [src/bloch-sphere.ts:374](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L374)

Position camera such that the given Bloch vector points directly at camera

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blochVector` | [`BlochVector`](BlochVector.md) |
| `duration`? | `number` |
| `easing`? | `string` |

#### Returns

`void` \| `Promise`\<`void`\>

***

### setCameraZoom()

> **setCameraZoom**(`zoomLevel`, `duration`?, `easing`?): `void` \| `Promise`\<`void`\>

Defined in: [src/bloch-sphere.ts:409](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L409)

Set camera zoom level

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `zoomLevel` | `number` |
| `duration`? | `number` |
| `easing`? | `string` |

#### Returns

`void` \| `Promise`\<`void`\>

***

### setOptions()

> **setOptions**(`options`?): `void`

Defined in: [src/bloch-sphere.ts:113](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L113)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`BlochSphereOptions`](../type-aliases/BlochSphereOptions.md) |

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/bloch-sphere.ts:244](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L244)

Starts the animation loop

Automatically started when the widget is attached to a parent element.

This will call the render method automatically.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/bloch-sphere.ts:255](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/bloch-sphere.ts#L255)

Stops the animation loop

This will stop the render loop

#### Returns

`void`
