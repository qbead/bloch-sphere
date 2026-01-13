[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / shortestModDist

# Function: shortestModDist()

> **shortestModDist**(`a0`, `a1`, `modulo`): `number`

Defined in: [src/math/geometry.ts:106](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/math/geometry.ts#L106)

Computes the shortest distance between two angles, considering wrap-around

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a0` | `number` | The first angle |
| `a1` | `number` | The second angle |
| `modulo` | `number` | The modulo value (e.g., 2π for radians) |

## Returns

`number`

The shortest distance from a0 to a1
