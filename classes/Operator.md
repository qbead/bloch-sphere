[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / Operator

# Class: Operator

Defined in: [src/math/operator.ts:12](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L12)

Quantum operators are 2x2 matrices of complex numbers

```
[ a  b ]
[ c  d ]
```

## Constructors

### Constructor

> **new Operator**(`elements`): `Operator`

Defined in: [src/math/operator.ts:22](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `elements` | [`Complex`](Complex.md)[][] |

#### Returns

`Operator`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="elements"></a> `elements` | [`Complex`](Complex.md)[][] | [src/math/operator.ts:13](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L13) |

## Accessors

### a

#### Get Signature

> **get** **a**(): [`Complex`](Complex.md)

Defined in: [src/math/operator.ts:29](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L29)

The first row, first column element of the operator

##### Returns

[`Complex`](Complex.md)

***

### b

#### Get Signature

> **get** **b**(): [`Complex`](Complex.md)

Defined in: [src/math/operator.ts:36](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L36)

The first row, second column element of the operator

##### Returns

[`Complex`](Complex.md)

***

### c

#### Get Signature

> **get** **c**(): [`Complex`](Complex.md)

Defined in: [src/math/operator.ts:43](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L43)

The second row, first column element of the operator

##### Returns

[`Complex`](Complex.md)

***

### d

#### Get Signature

> **get** **d**(): [`Complex`](Complex.md)

Defined in: [src/math/operator.ts:50](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L50)

The second row, second column element of the operator

##### Returns

[`Complex`](Complex.md)

## Methods

### applyTo()

> **applyTo**(`rho`): [`Complex`](Complex.md)[][]

Defined in: [src/math/operator.ts:100](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L100)

Apply this operator to a density matrix

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rho` | [`Complex`](Complex.md)[][] |

#### Returns

[`Complex`](Complex.md)[][]

***

### clone()

> **clone**(): `Operator`

Defined in: [src/math/operator.ts:59](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L59)

#### Returns

`Operator`

***

### conjugateTranspose()

> **conjugateTranspose**(): `Operator`

Defined in: [src/math/operator.ts:90](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L90)

Get the conjugate transpose of the operator as a new operator

#### Returns

`Operator`

***

### copy()

> **copy**(`other`): `Operator`

Defined in: [src/math/operator.ts:54](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L54)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Operator` |

#### Returns

`Operator`

***

### determinant()

> **determinant**(): [`Complex`](Complex.md)

Defined in: [src/math/operator.ts:122](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L122)

Get the determinant of the operator

#### Returns

[`Complex`](Complex.md)

***

### plus()

> **plus**(`other`): `Operator`

Defined in: [src/math/operator.ts:108](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L108)

Add another operator to this operator

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Operator` |

#### Returns

`Operator`

***

### quaternion()

> **quaternion**(): `Quaternion`

Defined in: [src/math/operator.ts:129](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L129)

Get this operator as a THREE.Quaternion

#### Returns

`Quaternion`

***

### scale()

> **scale**(`scalar`): `Operator`

Defined in: [src/math/operator.ts:68](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L68)

Multiply the operator by a scalar

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scalar` | `number` |

#### Returns

`Operator`

***

### times()

> **times**(`other`): `Operator`

Defined in: [src/math/operator.ts:76](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L76)

Multiply the operator by another operator

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Operator` |

#### Returns

`Operator`

***

### identity()

> `static` **identity**(): `Operator`

Defined in: [src/math/operator.ts:15](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/operator.ts#L15)

#### Returns

`Operator`
