[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BlochVector

# Class: BlochVector

Defined in: [src/math/bloch-vector.ts:25](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L25)

A class representing a Bloch vector

Angle `theta` is the angle between the Bloch vector and the z-axis
Angle `phi` is the "timezone" angle, the angle from the x-axis in the xy-plane

This class extends the Vector3 class from three.js and provides additional
functionality.

## Example

```ts
const blochVector = BlochVector.from(1, 0, 0)
const blochVector2 = BlochVector.from([0, 1, 0])
const blochVector3 = BlochVector.fromAngles(0.5 * Math.PI, 1.5 * Math.PI)
const blochVector4 = BlochVector.MINUS_I
const blochVector5 = BlochVector.random()
```

## Extends

- `Vector3`

## Constructors

### Constructor

> **new BlochVector**(`x`?, `y`?, `z`?): `BlochVector`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x`? | `number` |
| `y`? | `number` |
| `z`? | `number` |

#### Returns

`BlochVector`

#### Inherited from

`Vector3.constructor`

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="isvector3"></a> `isVector3` | `readonly` | `true` | - | `Vector3.isVector3` | node\_modules/@types/three/src/math/Vector3.d.ts:48 |
| <a id="x"></a> `x` | `public` | `number` | **Default** `0` | `Vector3.x` | node\_modules/@types/three/src/math/Vector3.d.ts:37 |
| <a id="y"></a> `y` | `public` | `number` | **Default** `0` | `Vector3.y` | node\_modules/@types/three/src/math/Vector3.d.ts:42 |
| <a id="z"></a> `z` | `public` | `number` | **Default** `0` | `Vector3.z` | node\_modules/@types/three/src/math/Vector3.d.ts:47 |

## Accessors

### amplitude

#### Get Signature

> **get** **amplitude**(): `number`

Defined in: [src/math/bloch-vector.ts:128](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L128)

The amplitude of the Bloch vector

##### Returns

`number`

***

### phi

#### Get Signature

> **get** **phi**(): `number`

Defined in: [src/math/bloch-vector.ts:123](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L123)

The azimuthal xy-plane angle. The angle between the projection of the BlochVector on the xy-plane
and the x-axis

##### Returns

`number`

***

### rho

#### Get Signature

> **get** **rho**(): [`Complex`](Complex.md)[][]

Defined in: [src/math/bloch-vector.ts:133](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L133)

The density matrix representation of the Bloch vector

##### Returns

[`Complex`](Complex.md)[][]

***

### theta

#### Get Signature

> **get** **theta**(): `number`

Defined in: [src/math/bloch-vector.ts:117](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L117)

The polar angle. The angle between the BlochVector and the z-axis

##### Returns

`number`

***

### I

#### Get Signature

> **get** `static` **I**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:54](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L54)

A bloch vector representing the imaginary state (|i>) or (|0> + i|1>)/sqrt(2)

##### Returns

`BlochVector`

***

### MINUS

#### Get Signature

> **get** `static` **MINUS**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:48](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L48)

A bloch vector representing the minus state (|->) or (|0> - |1>)/sqrt(2)

##### Returns

`BlochVector`

***

### MINUS\_I

#### Get Signature

> **get** `static` **MINUS\_I**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:60](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L60)

A bloch vector representing the minus imaginary state (|-i>) or (|0> - i|1>)/sqrt(2)

##### Returns

`BlochVector`

***

### ONE

#### Get Signature

> **get** `static` **ONE**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:35](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L35)

A bloch vector representing the one state

##### Returns

`BlochVector`

***

### PLUS

#### Get Signature

> **get** `static` **PLUS**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:42](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L42)

A bloch vector representing the plus state (|+>) or (|0> + |1>)/sqrt(2)

##### Returns

`BlochVector`

***

### ZERO

#### Get Signature

> **get** `static` **ZERO**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:29](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L29)

A bloch vector representing the zero state

##### Returns

`BlochVector`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`number`\>

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:300

Iterating through a Vector3 instance will yield its components (x, y, z) in the corresponding order.

#### Returns

`Iterator`\<`number`\>

#### Inherited from

`Vector3.[iterator]`

***

### add()

> **add**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:92

Adds v to this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.add`

***

### addScalar()

> **addScalar**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:94

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.addScalar`

***

### addScaledVector()

> **addScaledVector**(`v`, `s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:101

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3` |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.addScaledVector`

***

### addVectors()

> **addVectors**(`a`, `b`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:99

Sets this vector to a + b.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |
| `b` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.addVectors`

***

### angles()

> **angles**(): \[`number`, `number`\]

Defined in: [src/math/bloch-vector.ts:175](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L175)

Get both angles of the Bloch vector as an array `[theta, phi]`

#### Returns

\[`number`, `number`\]

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:220

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3` |

#### Returns

`number`

#### Inherited from

`Vector3.angleTo`

***

### applyAxisAngle()

> **applyAxisAngle**(`axis`, `angle`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:126

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `axis` | `Vector3` |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.applyAxisAngle`

***

### applyEuler()

> **applyEuler**(`euler`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `euler` | `Euler` |

#### Returns

`this`

#### Inherited from

`Vector3.applyEuler`

***

### applyMatrix3()

> **applyMatrix3**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:128

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix3` |

#### Returns

`this`

#### Inherited from

`Vector3.applyMatrix3`

***

### applyMatrix4()

> **applyMatrix4**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix4` |

#### Returns

`this`

#### Inherited from

`Vector3.applyMatrix4`

***

### applyNormalMatrix()

> **applyNormalMatrix**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix3` |

#### Returns

`this`

#### Inherited from

`Vector3.applyNormalMatrix`

***

### applyOperator()

> **applyOperator**(`op`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:168](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L168)

Apply an operator to the Bloch vector returning a new Bloch vector

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `op` | [`Operator`](Operator.md) | The operator to apply |

#### Returns

`BlochVector`

The new Bloch vector

***

### applyQuaternion()

> **applyQuaternion**(`q`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | `QuaternionLike` |

#### Returns

`this`

#### Inherited from

`Vector3.applyQuaternion`

***

### ceil()

> **ceil**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:162

#### Returns

`this`

#### Inherited from

`Vector3.ceil`

***

### clamp()

> **clamp**(`min`, `max`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:154

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `Vector3Like` |
| `max` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.clamp`

***

### clampLength()

> **clampLength**(`min`, `max`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:158

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.clampLength`

***

### clampScalar()

> **clampScalar**(`min`, `max`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:156

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.clampScalar`

***

### clone()

> **clone**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:82

Clones this vector.

#### Returns

`this`

#### Inherited from

`Vector3.clone`

***

### copy()

> **copy**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:87

Copies value of v to this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.copy`

***

### cross()

> **cross**(`a`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:211

Sets this vector to cross product of itself and v.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.cross`

***

### crossVectors()

> **crossVectors**(`a`, `b`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:216

Sets this vector to cross product of a and b.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |
| `b` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.crossVectors`

***

### densityMatrix()

> **densityMatrix**(): [`Complex`](Complex.md)[][]

Defined in: [src/math/bloch-vector.ts:138](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L138)

The density matrix representation of the Bloch vector

#### Returns

[`Complex`](Complex.md)[][]

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:225

Computes distance of this vector to v.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`number`

#### Inherited from

`Vector3.distanceTo`

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:230

Computes squared distance of this vector to v.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`number`

#### Inherited from

`Vector3.distanceToSquared`

***

### divide()

> **divide**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:142

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.divide`

***

### divideScalar()

> **divideScalar**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:148

Divides this vector by scalar s.
Set vector to ( 0, 0, 0 ) if s == 0.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.divideScalar`

***

### dot()

> **dot**(`v`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:176

Computes dot product of this vector and v.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`number`

#### Inherited from

`Vector3.dot`

***

### equals()

> **equals**(`v`): `boolean`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:262

Checks for strict equality of this vector and v.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`boolean`

#### Inherited from

`Vector3.equals`

***

### floor()

> **floor**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:160

#### Returns

`this`

#### Inherited from

`Vector3.floor`

***

### fromArray()

> **fromArray**(`array`, `offset`?): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:269

Sets this vector's x, y and z value from the provided array or array-like.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | `number`[] \| `ArrayLike`\<`number`\> | the source array or array-like. |
| `offset`? | `number` | (optional) offset into the array. Default is 0. |

#### Returns

`this`

#### Inherited from

`Vector3.fromArray`

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:288

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | `BufferAttribute` \| `InterleavedBufferAttribute` |
| `index` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.fromBufferAttribute`

***

### getComponent()

> **getComponent**(`index`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`number`

#### Inherited from

`Vector3.getComponent`

***

### length()

> **length**(): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:186

Computes length of this vector.

#### Returns

`number`

#### Inherited from

`Vector3.length`

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:181

Computes squared length of this vector.

#### Returns

`number`

#### Inherited from

`Vector3.lengthSq`

***

### lerp()

> **lerp**(`v`, `alpha`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:204

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |
| `alpha` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.lerp`

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:206

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v1` | `Vector3Like` |
| `v2` | `Vector3Like` |
| `alpha` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.lerpVectors`

***

### manhattanDistanceTo()

> **manhattanDistanceTo**(`v`): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:237

Computes the Manhattan length (distance) from this vector to the given vector v

see [Taxicab Geometry](http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia:)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`number`

#### Inherited from

`Vector3.manhattanDistanceTo`

***

### manhattanLength()

> **manhattanLength**(): `number`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:193

Computes the Manhattan length of this vector.

see [Taxicab Geometry](http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia:)

#### Returns

`number`

#### Inherited from

`Vector3.manhattanLength`

***

### max()

> **max**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:152

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.max`

***

### min()

> **min**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:150

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.min`

***

### multiply()

> **multiply**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:115

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.multiply`

***

### multiplyScalar()

> **multiplyScalar**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:120

Multiplies this vector by scalar s.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.multiplyScalar`

***

### multiplyVectors()

> **multiplyVectors**(`a`, `b`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |
| `b` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.multiplyVectors`

***

### negate()

> **negate**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:171

Inverts this vector.

#### Returns

`this`

#### Inherited from

`Vector3.negate`

***

### normalize()

> **normalize**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:198

Normalizes this vector.

#### Returns

`this`

#### Inherited from

`Vector3.normalize`

***

### project()

> **project**(`camera`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `camera` | `Camera` |

#### Returns

`this`

#### Inherited from

`Vector3.project`

***

### projectOnPlane()

> **projectOnPlane**(`planeNormal`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:218

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `planeNormal` | `Vector3` |

#### Returns

`this`

#### Inherited from

`Vector3.projectOnPlane`

***

### projectOnVector()

> **projectOnVector**(`v`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:217

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vector3` |

#### Returns

`this`

#### Inherited from

`Vector3.projectOnVector`

***

### random()

> **random**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:293

Sets this vector's x, y and z from Math.random

#### Returns

`this`

#### Inherited from

`Vector3.random`

***

### randomDirection()

> **randomDirection**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:295

#### Returns

`this`

#### Inherited from

`Vector3.randomDirection`

***

### reflect()

> **reflect**(`vector`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:219

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vector` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.reflect`

***

### round()

> **round**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:164

#### Returns

`this`

#### Inherited from

`Vector3.round`

***

### roundToZero()

> **roundToZero**(): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:166

#### Returns

`this`

#### Inherited from

`Vector3.roundToZero`

***

### set()

> **set**(`x`, `y`, `z`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:53

Sets value of this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.set`

***

### setAngles()

> **setAngles**(`angles`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:184](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L184)

Set the Bloch vector from angles `[theta, phi]` (polar, azimuthal)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `angles` | \[`number`, `number`\] | The angles to set the Bloch vector to |

#### Returns

`BlochVector`

***

### setComponent()

> **setComponent**(`index`, `value`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setComponent`

***

### setFromColor()

> **setFromColor**(`color`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:257

Sets this vector's [x](#x), [y](#y) and [z](#z) components from the r, g, and b components of the specified
Color \| color.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `RGB` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromColor`

***

### setFromCylindrical()

> **setFromCylindrical**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:241

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `Cylindrical` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromCylindrical`

***

### setFromCylindricalCoords()

> **setFromCylindricalCoords**(`radius`, `theta`, `y`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:242

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `radius` | `number` |
| `theta` | `number` |
| `y` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromCylindricalCoords`

***

### setFromEuler()

> **setFromEuler**(`e`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:251

Sets this vector's [x](#x), [y](#y) and [z](#z) components from the x, y, and z components of the specified Euler Euler Angle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Euler` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromEuler`

***

### setFromMatrix3Column()

> **setFromMatrix3Column**(`matrix`, `index`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:246

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | `Matrix3` |
| `index` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromMatrix3Column`

***

### setFromMatrixColumn()

> **setFromMatrixColumn**(`matrix`, `index`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:245

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | `Matrix4` |
| `index` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromMatrixColumn`

***

### setFromMatrixPosition()

> **setFromMatrixPosition**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:243

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix4` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromMatrixPosition`

***

### setFromMatrixScale()

> **setFromMatrixScale**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:244

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix4` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromMatrixScale`

***

### setFromSpherical()

> **setFromSpherical**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:239

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `Spherical` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromSpherical`

***

### setFromSphericalCoords()

> **setFromSphericalCoords**(`r`, `phi`, `theta`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:240

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `phi` | `number` |
| `theta` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setFromSphericalCoords`

***

### setLength()

> **setLength**(`l`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:203

Normalizes this vector and multiplies it by l.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `l` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setLength`

***

### setScalar()

> **setScalar**(`scalar`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:58

Sets all values of this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scalar` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setScalar`

***

### setX()

> **setX**(`x`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:63

Sets x value of this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setX`

***

### setY()

> **setY**(`y`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:68

Sets y value of this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setY`

***

### setZ()

> **setZ**(`z`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:73

Sets z value of this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.setZ`

***

### slerpTo()

> **slerpTo**(`other`, `t`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:205](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L205)

Spherical linear interpolation of this Bloch vector to another Bloch vector

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `other` | `BlochVector` | The other Bloch vector to interpolate to |
| `t` | `number` | The interpolation factor (0 <= t <= 1) |

#### Returns

`BlochVector`

The interpolated Bloch vector

***

### sub()

> **sub**(`a`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:106

Subtracts v from this vector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.sub`

***

### subScalar()

> **subScalar**(`s`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:108

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

`Vector3.subScalar`

***

### subVectors()

> **subVectors**(`a`, `b`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:113

Sets this vector to a - b.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Vector3Like` |
| `b` | `Vector3Like` |

#### Returns

`this`

#### Inherited from

`Vector3.subVectors`

***

### toArray()

#### Call Signature

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:277

Returns an array [x, y, z], or copies x, y and z into the provided array.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array`? | `number`[] | (optional) array to store the vector to. If this is not provided, a new array will be created. |
| `offset`? | `number` | (optional) optional offset into the array. |

##### Returns

`number`[]

The created or provided array.

##### Inherited from

`Vector3.toArray`

#### Call Signature

> **toArray**(`array`?, `offset`?): `Vector3Tuple`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:278

Returns an array [x, y, z], or copies x, y and z into the provided array.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array`? | `Vector3Tuple` | (optional) array to store the vector to. If this is not provided, a new array will be created. |
| `offset`? | `0` | (optional) optional offset into the array. |

##### Returns

`Vector3Tuple`

The created or provided array.

##### Inherited from

`Vector3.toArray`

#### Call Signature

> **toArray**(`array`, `offset`?): `ArrayLike`\<`number`\>

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:286

Copies x, y and z into the provided array-like.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | `ArrayLike`\<`number`\> | array-like to store the vector to. |
| `offset`? | `number` | (optional) optional offset into the array-like. |

##### Returns

`ArrayLike`\<`number`\>

The provided array-like.

##### Inherited from

`Vector3.toArray`

***

### toString()

> **toString**(): `string`

Defined in: [src/math/bloch-vector.ts:194](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L194)

Returns a string representation of an object.

#### Returns

`string`

***

### transformDirection()

> **transformDirection**(`m`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:140

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | `Matrix4` |

#### Returns

`this`

#### Inherited from

`Vector3.transformDirection`

***

### unproject()

> **unproject**(`camera`): `this`

Defined in: node\_modules/@types/three/src/math/Vector3.d.ts:138

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `camera` | `Camera` |

#### Returns

`this`

#### Inherited from

`Vector3.unproject`

***

### from()

#### Call Signature

> `static` **from**(`x`, `y`, `z`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:88](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L88)

Utility function to create a bloch vector in many ways

- `BlochVector.from(x, y, z)` creates a Bloch vector from x, y, z coordinates
- `BlochVector.from([x, y, z])` creates a Bloch vector from an array of coordinates
- `BlochVector.from(new Vector3(x, y, z))` creates a Bloch vector from a three.js Vector3
- `BlochVector.from(new BlochVector(x, y, z))` creates a Bloch vector from another Bloch vector

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

##### Returns

`BlochVector`

#### Call Signature

> `static` **from**(`y`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:89](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L89)

Utility function to create a bloch vector in many ways

- `BlochVector.from(x, y, z)` creates a Bloch vector from x, y, z coordinates
- `BlochVector.from([x, y, z])` creates a Bloch vector from an array of coordinates
- `BlochVector.from(new Vector3(x, y, z))` creates a Bloch vector from a three.js Vector3
- `BlochVector.from(new BlochVector(x, y, z))` creates a Bloch vector from another Bloch vector

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `Vector3` |

##### Returns

`BlochVector`

#### Call Signature

> `static` **from**(`array`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:90](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L90)

Utility function to create a bloch vector in many ways

- `BlochVector.from(x, y, z)` creates a Bloch vector from x, y, z coordinates
- `BlochVector.from([x, y, z])` creates a Bloch vector from an array of coordinates
- `BlochVector.from(new Vector3(x, y, z))` creates a Bloch vector from a three.js Vector3
- `BlochVector.from(new BlochVector(x, y, z))` creates a Bloch vector from another Bloch vector

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | \[`number`, `number`, `number`\] |

##### Returns

`BlochVector`

#### Call Signature

> `static` **from**(`q`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:91](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L91)

Utility function to create a bloch vector in many ways

- `BlochVector.from(x, y, z)` creates a Bloch vector from x, y, z coordinates
- `BlochVector.from([x, y, z])` creates a Bloch vector from an array of coordinates
- `BlochVector.from(new Vector3(x, y, z))` creates a Bloch vector from a three.js Vector3
- `BlochVector.from(new BlochVector(x, y, z))` creates a Bloch vector from another Bloch vector

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | `BlochVector` |

##### Returns

`BlochVector`

***

### fromAngles()

> `static` **fromAngles**(`theta`, `phi`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:112](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L112)

Create a Bloch vector from angles (theta, phi)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `theta` | `number` |
| `phi` | `number` |

#### Returns

`BlochVector`

***

### fromDensityMatrix()

> `static` **fromDensityMatrix**(`rho`): `BlochVector`

Defined in: [src/math/bloch-vector.ts:155](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L155)

Create a Bloch vector from a density matrix

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rho` | [`Complex`](Complex.md)[][] | The density matrix to create the Bloch vector from |

#### Returns

`BlochVector`

***

### random()

> `static` **random**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:67](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L67)

Generate a random Bloch vector with magnitude 1

#### Returns

`BlochVector`

***

### zero()

> `static` **zero**(): `BlochVector`

Defined in: [src/math/bloch-vector.ts:76](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/bloch-vector.ts#L76)

Create a zero state Bloch vector

#### Returns

`BlochVector`
