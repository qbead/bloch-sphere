[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / Complex

# Class: Complex

Defined in: [src/math/complex.ts:9](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L9)

A class representing a complex number.

## Constructors

### Constructor

> **new Complex**(`real`, `imag`): `Complex`

Defined in: [src/math/complex.ts:25](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L25)

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
| <a id="imag"></a> `imag` | `number` | [src/math/complex.ts:11](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L11) |
| <a id="real"></a> `real` | `number` | [src/math/complex.ts:10](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L10) |

## Accessors

### magnitude

#### Get Signature

> **get** **magnitude**(): `number`

Defined in: [src/math/complex.ts:85](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L85)

##### Returns

`number`

***

### phase

#### Get Signature

> **get** **phase**(): `number`

Defined in: [src/math/complex.ts:89](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L89)

##### Returns

`number`

***

### I

#### Get Signature

> **get** `static` **I**(): `Complex`

Defined in: [src/math/complex.ts:21](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L21)

##### Returns

`Complex`

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): `Complex`

Defined in: [src/math/complex.ts:17](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L17)

##### Returns

`Complex`

***

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): `Complex`

Defined in: [src/math/complex.ts:13](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L13)

##### Returns

`Complex`

## Methods

### conjugate()

> **conjugate**(): `Complex`

Defined in: [src/math/complex.ts:93](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L93)

#### Returns

`Complex`

***

### dividedBy()

> **dividedBy**(`other`): `Complex`

Defined in: [src/math/complex.ts:76](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L76)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### minus()

> **minus**(`other`): `Complex`

Defined in: [src/math/complex.ts:63](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L63)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### plus()

> **plus**(`other`): `Complex`

Defined in: [src/math/complex.ts:58](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### times()

> **times**(`other`): `Complex`

Defined in: [src/math/complex.ts:68](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L68)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

#### Returns

`Complex`

***

### toString()

> **toString**(): `string`

Defined in: [src/math/complex.ts:97](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L97)

#### Returns

`string`

***

### from()

#### Call Signature

> `static` **from**(`value`): `Complex`

Defined in: [src/math/complex.ts:30](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L30)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`IntoComplex`](../type-aliases/IntoComplex.md) |

##### Returns

`Complex`

#### Call Signature

> `static` **from**(`real`, `imag`?): `Complex`

Defined in: [src/math/complex.ts:31](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L31)

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

Defined in: [src/math/complex.ts:51](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L51)

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

Defined in: [src/math/complex.ts:42](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L42)

#### Returns

`Complex`

***

### unitRandom()

> `static` **unitRandom**(): `Complex`

Defined in: [src/math/complex.ts:46](https://github.com/qbead/bloch-sphere/blob/7e0f69cf2dad7ff45291f70228526b02e73614bb/src/math/complex.ts#L46)

#### Returns

`Complex`
