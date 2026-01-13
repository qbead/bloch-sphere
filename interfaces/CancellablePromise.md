[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / CancellablePromise

# Interface: CancellablePromise\<T\>

Defined in: [src/animation.ts:8](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/animation.ts#L8)

## Extends

- `Promise`\<`T`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="tostringtag"></a> `[toStringTag]` | `readonly` | `string` | `Promise.[toStringTag]` | node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176 |

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/animation.ts:9](https://github.com/qbead/bloch-sphere/blob/41247d60e67bd802cc21854379a06362e5d0957c/src/animation.ts#L9)

#### Returns

`void`

***

### catch()

> **catch**\<`TResult`\>(`onrejected`?): `Promise`\<`T` \| `TResult`\>

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1557

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResult` | `never` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onrejected`? | `null` \| (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

***

### finally()

> **finally**(`onfinally`?): `Promise`\<`T`\>

Defined in: node\_modules/typescript/lib/lib.es2018.promise.d.ts:29

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onfinally`? | `null` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1550

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onfulfilled`? | `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected`? | `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`
