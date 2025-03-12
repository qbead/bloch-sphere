[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BlochSphere

# Class: BlochSphere

Defined in: [src/bloch-sphere.ts:19](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L19)

## Constructors

### new BlochSphere()

> **new BlochSphere**(`options`?): [`BlochSphere`](BlochSphere.md)

Defined in: [src/bloch-sphere.ts:27](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `BlochSphereOptions` |

#### Returns

[`BlochSphere`](BlochSphere.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="camera"></a> `camera` | `OrthographicCamera` | [src/bloch-sphere.ts:24](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L24) |
| <a id="controls"></a> `controls` | `OrbitControls` | [src/bloch-sphere.ts:25](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L25) |
| <a id="cssrenderer"></a> `cssRenderer` | `CSS2DRenderer` | [src/bloch-sphere.ts:21](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L21) |
| <a id="el"></a> `el` | `HTMLElement` | [src/bloch-sphere.ts:22](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L22) |
| <a id="renderer"></a> `renderer` | `WebGLRenderer` | [src/bloch-sphere.ts:20](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L20) |
| <a id="scene"></a> `scene` | [`BlochSphereScene`](BlochSphereScene.md) | [src/bloch-sphere.ts:23](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L23) |

## Accessors

### showGrid

#### Get Signature

> **get** **showGrid**(): `boolean`

Defined in: [src/bloch-sphere.ts:64](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L64)

##### Returns

`boolean`

#### Set Signature

> **set** **showGrid**(`value`): `void`

Defined in: [src/bloch-sphere.ts:68](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L68)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

## Methods

### add()

> **add**(`item`): `void`

Defined in: [src/bloch-sphere.ts:72](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### attach()

> **attach**(`parent`?): `void`

Defined in: [src/bloch-sphere.ts:88](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L88)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent`? | `HTMLElement` |

#### Returns

`void`

***

### clearPlot()

> **clearPlot**(): `void`

Defined in: [src/bloch-sphere.ts:80](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L80)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/bloch-sphere.ts:130](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L130)

#### Returns

`void`

***

### highlightRegion()

> **highlightRegion**(`points`, `color`): `void`

Defined in: [src/bloch-sphere.ts:95](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L95)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `points` | [`BlochVector`](BlochVector.md)[] | `undefined` |
| `color` | `number` \| `Color` | `0xaadd00` |

#### Returns

`void`

***

### remove()

> **remove**(`item`): `void`

Defined in: [src/bloch-sphere.ts:76](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L76)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Object3D` |

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [src/bloch-sphere.ts:114](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L114)

#### Returns

`void`

***

### resize()

> **resize**(`width`?, `height`?): `void`

Defined in: [src/bloch-sphere.ts:103](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L103)

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

Defined in: [src/bloch-sphere.ts:84](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L84)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

#### Returns

`void`

***

### setOptions()

> **setOptions**(`options`?): `void`

Defined in: [src/bloch-sphere.ts:37](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `BlochSphereOptions` |

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/bloch-sphere.ts:120](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L120)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/bloch-sphere.ts:126](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/bloch-sphere.ts#L126)

#### Returns

`void`
