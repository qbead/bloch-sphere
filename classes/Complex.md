[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / Complex

# Class: Complex

Defined in: [src/math/complex.ts:9](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L9)

A class representing a complex number.

## Constructors

### Constructor

> **new Complex**(`real`, `imag`): `Complex`

Defined in: [src/math/complex.ts:25](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L25)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `real` | `number` | `undefined` |
| `imag` | `number` | `0` |

#### Returns

`Complex`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="imag"></a> `imag` | `number` | [src/math/complex.ts:11](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L11) |
| <a id="real"></a> `real` | `number` | [src/math/complex.ts:10](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L10) |

## Accessors

### magnitude

#### Get Signature

> **get** **magnitude**(): `number`

Defined in: [src/math/complex.ts:95](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L95)

##### Returns

`number`

***

### phase

#### Get Signature

> **get** **phase**(): `number`

Defined in: [src/math/complex.ts:99](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L99)

##### Returns

`number`

***

### I

#### Get Signature

> **get** `static` **I**(): `Complex`

Defined in: [src/math/complex.ts:21](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L21)

##### Returns

`Complex`

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): `Complex`

Defined in: [src/math/complex.ts:17](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L17)

##### Returns

`Complex`

***

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): `Complex`

Defined in: [src/math/complex.ts:13](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L13)

##### Returns

`Complex`

## Methods

### clone()

> **clone**(): `Complex`

Defined in: [src/math/complex.ts:64](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L64)

#### Returns

`Complex`

***

### conjugate()

> **conjugate**(): `Complex`

Defined in: [src/math/complex.ts:103](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L103)

#### Returns

`Complex`

***

### copy()

> **copy**(`other`): `Complex`

Defined in: [src/math/complex.ts:58](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Complex` |

#### Returns

`Complex`

***

### dividedBy()

> **dividedBy**(`other`): `Complex`

Defined in: [src/math/complex.ts:86](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L86)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### minus()

> **minus**(`other`): `Complex`

Defined in: [src/math/complex.ts:73](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L73)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### plus()

> **plus**(`other`): `Complex`

Defined in: [src/math/complex.ts:68](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L68)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### pow()

> **pow**(`exponent`): `Complex`

Defined in: [src/math/complex.ts:112](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L112)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `exponent` | `number` |

#### Returns

`Complex`

***

### reciprocal()

> **reciprocal**(): `Complex`

Defined in: [src/math/complex.ts:107](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L107)

#### Returns

`Complex`

***

### sqrt()

> **sqrt**(): `Complex`

Defined in: [src/math/complex.ts:118](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L118)

#### Returns

`Complex`

***

### times()

> **times**(`other`): `Complex`

Defined in: [src/math/complex.ts:78](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L78)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### toString()

> **toString**(): `string`

Defined in: [src/math/complex.ts:122](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L122)

#### Returns

`string`

***

### from()

#### Call Signature

> `static` **from**(`value`): `Complex`

Defined in: [src/math/complex.ts:30](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L30)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

##### Returns

`Complex`

#### Call Signature

> `static` **from**(`real`, `imag`?): `Complex`

Defined in: [src/math/complex.ts:31](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L31)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `real` | `number` |
| `imag`? | `number` |

##### Returns

`Complex`

***

### fromPolar()

> `static` **fromPolar**(`magnitude`, `phase`): `Complex`

Defined in: [src/math/complex.ts:51](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L51)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `magnitude` | `number` |
| `phase` | `number` |

#### Returns

`Complex`

***

### random()

> `static` **random**(): `Complex`

Defined in: [src/math/complex.ts:42](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L42)

#### Returns

`Complex`

***

### unitRandom()

> `static` **unitRandom**(): `Complex`

Defined in: [src/math/complex.ts:46](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/complex.ts#L46)

#### Returns

`Complex`
