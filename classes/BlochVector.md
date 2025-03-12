[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BlochVector

# Class: BlochVector

Defined in: [src/math/bloch-vector.ts:6](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L6)

## Constructors

### new BlochVector()

> **new BlochVector**(`vec`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:9](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vec` | \[`number`, `number`, `number`\] |

#### Returns

[`BlochVector`](BlochVector.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="vec-1"></a> `vec` | \[`number`, `number`, `number`\] | [src/math/bloch-vector.ts:7](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L7) |

## Accessors

### amplitude

#### Get Signature

> **get** **amplitude**(): `number`

Defined in: [src/math/bloch-vector.ts:90](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L90)

##### Returns

`number`

***

### phi

#### Get Signature

> **get** **phi**(): `number`

Defined in: [src/math/bloch-vector.ts:86](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L86)

##### Returns

`number`

***

### rho

#### Get Signature

> **get** **rho**(): `Complex`[][]

Defined in: [src/math/bloch-vector.ts:94](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L94)

##### Returns

`Complex`[][]

***

### theta

#### Get Signature

> **get** **theta**(): `number`

Defined in: [src/math/bloch-vector.ts:80](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L80)

##### Returns

`number`

***

### u

#### Get Signature

> **get** **u**(): `number`

Defined in: [src/math/bloch-vector.ts:67](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L67)

##### Returns

`number`

***

### v

#### Get Signature

> **get** **v**(): `number`

Defined in: [src/math/bloch-vector.ts:71](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L71)

##### Returns

`number`

***

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [src/math/bloch-vector.ts:75](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L75)

##### Returns

`number`

***

### I

#### Get Signature

> **get** `static` **I**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:25](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L25)

##### Returns

[`BlochVector`](BlochVector.md)

***

### MINUS

#### Get Signature

> **get** `static` **MINUS**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:22](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L22)

##### Returns

[`BlochVector`](BlochVector.md)

***

### MINUS\_I

#### Get Signature

> **get** `static` **MINUS\_I**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:28](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L28)

##### Returns

[`BlochVector`](BlochVector.md)

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:16](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L16)

##### Returns

[`BlochVector`](BlochVector.md)

***

### PLUS

#### Get Signature

> **get** `static` **PLUS**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:19](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L19)

##### Returns

[`BlochVector`](BlochVector.md)

***

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:13](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L13)

##### Returns

[`BlochVector`](BlochVector.md)

## Methods

### angles()

> **angles**(): `number`[]

Defined in: [src/math/bloch-vector.ts:125](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L125)

#### Returns

`number`[]

***

### applyOperator()

> **applyOperator**(`op`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:117](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L117)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `op` | `Operator` |

#### Returns

[`BlochVector`](BlochVector.md)

***

### clone()

> **clone**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:139](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L139)

#### Returns

[`BlochVector`](BlochVector.md)

***

### densityMatrix()

> **densityMatrix**(): `Complex`[][]

Defined in: [src/math/bloch-vector.ts:98](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L98)

#### Returns

`Complex`[][]

***

### lerpTo()

> **lerpTo**(`other`, `t`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:147](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L147)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`BlochVector`](BlochVector.md) |
| `t` | `number` |

#### Returns

[`BlochVector`](BlochVector.md)

***

### setAngles()

> **setAngles**(`angles`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:129](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L129)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `angles` | \[`number`, `number`\] |

#### Returns

[`BlochVector`](BlochVector.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/math/bloch-vector.ts:143](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L143)

#### Returns

`string`

***

### vector3()

> **vector3**(): `Vector3`

Defined in: [src/math/bloch-vector.ts:121](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L121)

#### Returns

`Vector3`

***

### from()

#### Call Signature

> `static` **from**(`u`, `v`, `w`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:42](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L42)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `u` | `number` |
| `v` | `number` |
| `w` | `number` |

##### Returns

[`BlochVector`](BlochVector.md)

#### Call Signature

> `static` **from**(`v`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:43](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L43)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3` |

##### Returns

[`BlochVector`](BlochVector.md)

#### Call Signature

> `static` **from**(`array`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:44](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L44)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | \[`number`, `number`, `number`\] |

##### Returns

[`BlochVector`](BlochVector.md)

#### Call Signature

> `static` **from**(`q`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:45](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L45)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | [`BlochVector`](BlochVector.md) |

##### Returns

[`BlochVector`](BlochVector.md)

***

### fromAngles()

> `static` **fromAngles**(`theta`, `phi`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:63](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L63)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `theta` | `number` |
| `phi` | `number` |

#### Returns

[`BlochVector`](BlochVector.md)

***

### fromDensityMatrix()

> `static` **fromDensityMatrix**(`rho`): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:110](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L110)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rho` | `Complex`[][] |

#### Returns

[`BlochVector`](BlochVector.md)

***

### random()

> `static` **random**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:32](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L32)

#### Returns

[`BlochVector`](BlochVector.md)

***

### zero()

> `static` **zero**(): [`BlochVector`](BlochVector.md)

Defined in: [src/math/bloch-vector.ts:38](https://github.com/qbead/bloch-sphere/blob/3766f2f3df1d632e3531ec172a87f2dd1e6d0061/src/math/bloch-vector.ts#L38)

#### Returns

[`BlochVector`](BlochVector.md)
