[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BlochSphere

# Class: BlochSphere

Defined in: [src/bloch-sphere.ts:54](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L54)

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

Defined in: [src/bloch-sphere.ts:62](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `BlochSphereOptions` |

#### Returns

`BlochSphere`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="camera"></a> `camera` | `OrthographicCamera` | [src/bloch-sphere.ts:59](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L59) |
| <a id="controls"></a> `controls` | `OrbitControls` | [src/bloch-sphere.ts:60](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L60) |
| <a id="cssrenderer"></a> `cssRenderer` | `CSS2DRenderer` | [src/bloch-sphere.ts:56](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L56) |
| <a id="el"></a> `el` | `HTMLElement` | [src/bloch-sphere.ts:57](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L57) |
| <a id="renderer"></a> `renderer` | `WebGLRenderer` | [src/bloch-sphere.ts:55](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L55) |
| <a id="scene"></a> `scene` | [`BlochSphereScene`](BlochSphereScene.md) | [src/bloch-sphere.ts:58](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L58) |

## Accessors

### showGrid

#### Get Signature

> **get** **showGrid**(): `boolean`

Defined in: [src/bloch-sphere.ts:102](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L102)

##### Returns

`boolean`

#### Set Signature

> **set** **showGrid**(`value`): `void`

Defined in: [src/bloch-sphere.ts:106](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L106)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

## Methods

### add()

> **add**(`item`): `void`

Defined in: [src/bloch-sphere.ts:110](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L110)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### attach()

> **attach**(`parent`?): `void`

Defined in: [src/bloch-sphere.ts:139](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L139)

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

Defined in: [src/bloch-sphere.ts:123](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L123)

Removes all objects from the plot

This will not remove the grid or the sphere.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/bloch-sphere.ts:199](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L199)

Performs cleanup and disposes everything contained in the widget

#### Returns

`void`

***

### remove()

> **remove**(`item`): `void`

Defined in: [src/bloch-sphere.ts:114](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L114)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [src/bloch-sphere.ts:168](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L168)

Renders the scene

This is called automatically in the animation loop unless that
loop is stopped.

#### Returns

`void`

***

### resize()

> **resize**(`width`?, `height`?): `void`

Defined in: [src/bloch-sphere.ts:151](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L151)

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

Defined in: [src/bloch-sphere.ts:130](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L130)

Rescales the sphere

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

#### Returns

`void`

***

### setOptions()

> **setOptions**(`options`?): `void`

Defined in: [src/bloch-sphere.ts:72](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `BlochSphereOptions` |

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/bloch-sphere.ts:181](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L181)

Starts the animation loop

Automatically started when the widget is attached to a parent element.

This will call the render method automatically.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/bloch-sphere.ts:192](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/bloch-sphere.ts#L192)

Stops the animation loop

This will stop the render loop

#### Returns

`void`
