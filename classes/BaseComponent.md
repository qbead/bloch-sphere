[**@qbead/bloch-sphere**](../index.md)

***

[@qbead/bloch-sphere](../index.md) / BaseComponent

# Class: BaseComponent

Defined in: [src/components/component.ts:6](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/components/component.ts#L6)

Abstract base class for all components

## Extends

- `Object3D`

## Extended by

- [`QubitDisplay`](QubitDisplay.md)
- [`PathDisplay`](PathDisplay.md)
- [`RegionDisplay`](RegionDisplay.md)
- [`PointsDisplay`](PointsDisplay.md)
- [`OperatorDisplay`](OperatorDisplay.md)
- [`OperatorPathDisplay`](OperatorPathDisplay.md)
- [`QubitArrow`](QubitArrow.md)
- [`AngleIndicators`](AngleIndicators.md)
- [`Label`](Label.md)
- [`Wedge`](Wedge.md)

## Constructors

### Constructor

> **new BaseComponent**(`name`?): `BaseComponent`

Defined in: [src/components/component.ts:9](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/components/component.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name`? | `string` |

#### Returns

`BaseComponent`

#### Overrides

`THREE.Object3D.constructor`

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="_color"></a> `_color` | `protected` | `Color` | `undefined` | - | - | [src/components/component.ts:7](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/components/component.ts#L7) |
| <a id="animations"></a> `animations` | `public` | `AnimationClip`[] | `[]` | Array with object's animation clips. | `THREE.Object3D.animations` | node\_modules/@types/three/src/core/Object3D.d.ts:266 |
| <a id="castshadow"></a> `castShadow` | `public` | `boolean` | `false` | Whether the object gets rendered into shadow map. | `THREE.Object3D.castShadow` | node\_modules/@types/three/src/core/Object3D.d.ts:238 |
| <a id="children"></a> `children` | `public` | `Object3D`\<`Object3DEventMap`\>[] | `[]` | Array with object's children. **See** THREE.Object3DGroup \| Group for info on manually grouping objects. | `THREE.Object3D.children` | node\_modules/@types/three/src/core/Object3D.d.ts:145 |
| <a id="count"></a> `count?` | `public` | `number` | `undefined` | - | `THREE.Object3D.count` | node\_modules/@types/three/src/renderers/common/Backend.d.ts:7 |
| <a id="customdepthmaterial"></a> `customDepthMaterial?` | `public` | `Material` | `undefined` | Custom depth material to be used when rendering to the depth map. **Remarks** Can only be used in context of meshes. When shadow-casting with a THREE.DirectionalLight \| DirectionalLight or THREE.SpotLight \| SpotLight, if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows. | `THREE.Object3D.customDepthMaterial` | node\_modules/@types/three/src/core/Object3D.d.ts:282 |
| <a id="customdistancematerial"></a> `customDistanceMaterial?` | `public` | `Material` | `undefined` | Same as [customDepthMaterial](QubitDisplay.md#customdepthmaterial), but used with THREE.Object3DPointLight \| PointLight. | `THREE.Object3D.customDistanceMaterial` | node\_modules/@types/three/src/core/Object3D.d.ts:288 |
| <a id="frustumculled"></a> `frustumCulled` | `public` | `boolean` | `true` | When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object. If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera. | `THREE.Object3D.frustumCulled` | node\_modules/@types/three/src/core/Object3D.d.ts:251 |
| <a id="id"></a> `id` | `readonly` | `number` | `undefined` | Unique number for this Object3D instance. **Remarks** Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object. Expects a `Integer` | `THREE.Object3D.id` | node\_modules/@types/three/src/core/Object3D.d.ts:109 |
| <a id="isobject3d"></a> `isObject3D` | `readonly` | `true` | `true` | Flag to check if a given object is of type Object3D. **Remarks** This is a _constant_ value | `THREE.Object3D.isObject3D` | node\_modules/@types/three/src/core/Object3D.d.ts:102 |
| <a id="layers"></a> `layers` | `public` | `Layers` | `new THREE.Layers()` | The layer membership of the object. **Remarks** The object is only visible if it has at least one layer in common with the THREE.Object3DCamera \| Camera in use. This property can also be used to filter out unwanted objects in ray-intersection tests when using THREE.Raycaster \| Raycaster. | `THREE.Object3D.layers` | node\_modules/@types/three/src/core/Object3D.d.ts:226 |
| <a id="matrix"></a> `matrix` | `public` | `Matrix4` | `new THREE.Matrix4()` | The local transform matrix. | `THREE.Object3D.matrix` | node\_modules/@types/three/src/core/Object3D.d.ts:191 |
| <a id="matrixautoupdate"></a> `matrixAutoUpdate` | `public` | `boolean` | DEFAULT_MATRIX_AUTO_UPDATE - that is `(true)`. | When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property. | `THREE.Object3D.matrixAutoUpdate` | node\_modules/@types/three/src/core/Object3D.d.ts:205 |
| <a id="matrixworld"></a> `matrixWorld` | `public` | `Matrix4` | `new THREE.Matrix4()` | The global transform of the object. **Remarks** If the Object3D has no parent, then it's identical to the local transform THREE.Object3D.matrix \| .matrix. | `THREE.Object3D.matrixWorld` | node\_modules/@types/three/src/core/Object3D.d.ts:198 |
| <a id="matrixworldautoupdate"></a> `matrixWorldAutoUpdate` | `public` | `boolean` | DEFAULT_MATRIX_WORLD_AUTO_UPDATE - that is `(true)`. | If set, then the renderer checks every frame if the object and its children need matrix updates. When it isn't, then you have to maintain all matrices in the object and its children yourself. | `THREE.Object3D.matrixWorldAutoUpdate` | node\_modules/@types/three/src/core/Object3D.d.ts:212 |
| <a id="matrixworldneedsupdate"></a> `matrixWorldNeedsUpdate` | `public` | `boolean` | `false` | When this is set, it calculates the matrixWorld in that frame and resets this property to false. | `THREE.Object3D.matrixWorldNeedsUpdate` | node\_modules/@types/three/src/core/Object3D.d.ts:218 |
| <a id="modelviewmatrix"></a> `modelViewMatrix` | `readonly` | `Matrix4` | `new THREE.Matrix4()` | - | `THREE.Object3D.modelViewMatrix` | node\_modules/@types/three/src/core/Object3D.d.ts:180 |
| <a id="name"></a> `name` | `public` | `string` | `""` | Optional name of the object **Remarks** _(doesn't need to be unique)_. | `THREE.Object3D.name` | node\_modules/@types/three/src/core/Object3D.d.ts:122 |
| <a id="normalmatrix"></a> `normalMatrix` | `readonly` | `Matrix3` | `new THREE.Matrix3()` | - | `THREE.Object3D.normalMatrix` | node\_modules/@types/three/src/core/Object3D.d.ts:185 |
| <a id="occlusiontest"></a> `occlusionTest?` | `public` | `boolean` | `undefined` | - | `THREE.Object3D.occlusionTest` | node\_modules/@types/three/src/renderers/common/Backend.d.ts:9 |
| <a id="parent"></a> `parent` | `public` | `null` \| `Object3D`\<`Object3DEventMap`\> | `null` | Object's parent in the [scene graph](https://en.wikipedia.org/wiki/Scene_graph). **Remarks** An object can have at most one parent. | `THREE.Object3D.parent` | node\_modules/@types/three/src/core/Object3D.d.ts:137 |
| <a id="position"></a> `position` | `readonly` | `Vector3` | `new THREE.Vector3()` - that is `(0, 0, 0)`. | Object's local position. | `THREE.Object3D.position` | node\_modules/@types/three/src/core/Object3D.d.ts:157 |
| <a id="quaternion"></a> `quaternion` | `readonly` | `Quaternion` | `new THREE.Quaternion()` - that is `(0, 0, 0, 1)`. | Object's local rotation as a THREE.Quaternion \| Quaternion. | `THREE.Object3D.quaternion` | node\_modules/@types/three/src/core/Object3D.d.ts:169 |
| <a id="receiveshadow"></a> `receiveShadow` | `public` | `boolean` | `false` | Whether the material receives shadows. | `THREE.Object3D.receiveShadow` | node\_modules/@types/three/src/core/Object3D.d.ts:244 |
| <a id="renderorder"></a> `renderOrder` | `public` | `number` | `0` | This value allows the default rendering order of [scene graph](https://en.wikipedia.org/wiki/Scene_graph) objects to be overridden although opaque and transparent objects remain sorted independently. **Remarks** When this property is set for an instance of Group \| Group, all descendants objects will be sorted and rendered together. Sorting is from lowest to highest renderOrder. | `THREE.Object3D.renderOrder` | node\_modules/@types/three/src/core/Object3D.d.ts:260 |
| <a id="rotation"></a> `rotation` | `readonly` | `Euler` | `new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`. | Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians. | `THREE.Object3D.rotation` | node\_modules/@types/three/src/core/Object3D.d.ts:163 |
| <a id="scale"></a> `scale` | `readonly` | `Vector3` | `new THREE.Vector3( 1, 1, 1 )` | The object's local scale. | `THREE.Object3D.scale` | node\_modules/@types/three/src/core/Object3D.d.ts:175 |
| <a id="static"></a> `static?` | `public` | `boolean` | `undefined` | - | `THREE.Object3D.static` | node\_modules/@types/three/src/renderers/common/Backend.d.ts:11 |
| <a id="type"></a> `type` | `readonly` | `string` | `Object3D` | A Read-only _string_ to check `this` object type. **Remarks** This can be used to find a specific type of Object3D in a scene. Sub-classes will update this value. | `THREE.Object3D.type` | node\_modules/@types/three/src/core/Object3D.d.ts:130 |
| <a id="up"></a> `up` | `public` | `Vector3` | Object3D.DEFAULT_UP - that is `(0, 1, 0)`. | This is used by the [lookAt](#lookat) method, for example, to determine the orientation of the result. | `THREE.Object3D.up` | node\_modules/@types/three/src/core/Object3D.d.ts:151 |
| <a id="userdata"></a> `userData` | `public` | `Record`\<`string`, `any`\> | `undefined` | An object that can be used to store custom data about the Object3D. **Remarks** It should not hold references to _functions_ as these **will not** be cloned. **Default** `{}` | `THREE.Object3D.userData` | node\_modules/@types/three/src/core/Object3D.d.ts:273 |
| <a id="uuid"></a> `uuid` | `public` | `string` | `undefined` | [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance. **Remarks** This gets automatically assigned and shouldn't be edited. | `THREE.Object3D.uuid` | node\_modules/@types/three/src/core/Object3D.d.ts:115 |
| <a id="visible"></a> `visible` | `public` | `boolean` | `true` | Object gets rendered if `true`. | `THREE.Object3D.visible` | node\_modules/@types/three/src/core/Object3D.d.ts:232 |
| <a id="default_matrix_auto_update"></a> `DEFAULT_MATRIX_AUTO_UPDATE` | `static` | `boolean` | `true` | The default setting for [matrixAutoUpdate](QubitDisplay.md#matrixautoupdate) for newly created Object3Ds. | `THREE.Object3D.DEFAULT_MATRIX_AUTO_UPDATE` | node\_modules/@types/three/src/core/Object3D.d.ts:373 |
| <a id="default_matrix_world_auto_update"></a> `DEFAULT_MATRIX_WORLD_AUTO_UPDATE` | `static` | `boolean` | `true` | The default setting for [matrixWorldAutoUpdate](QubitDisplay.md#matrixworldautoupdate) for newly created Object3Ds. | `THREE.Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE` | node\_modules/@types/three/src/core/Object3D.d.ts:379 |
| <a id="default_up"></a> `DEFAULT_UP` | `static` | `Vector3` | `new THREE.Vector3( 0, 1, 0)` | The default [up](QubitDisplay.md#up) direction for objects, also used as the default position for THREE.DirectionalLight \| DirectionalLight, THREE.HemisphereLight \| HemisphereLight and THREE.Spotlight \| Spotlight (which creates lights shining from the top down). | `THREE.Object3D.DEFAULT_UP` | node\_modules/@types/three/src/core/Object3D.d.ts:367 |

## Accessors

### color

#### Get Signature

> **get** **color**(): `ColorRepresentation`

Defined in: [src/components/component.ts:21](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/components/component.ts#L21)

Get color of the component

##### Returns

`ColorRepresentation`

#### Set Signature

> **set** **color**(`color`): `void`

Defined in: [src/components/component.ts:28](https://github.com/qbead/bloch-sphere/blob/9ff2dae0481f00679728b83f1e83d06a69a548d1/src/components/component.ts#L28)

Set color of the component

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `ColorRepresentation` |

##### Returns

`void`

## Methods

### add()

> **add**(...`object`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:515

Adds another Object3D as child of this Object3D.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`object` | `Object3D`\<`Object3DEventMap`\>[] |  |

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be added
Any current parent on an [object](QubitDisplay.md#add-1) passed in here will be removed, since an Object3D can have at most one parent.

#### See

 - [attach](#attach)
 - THREE.Group \| Group for info on manually grouping objects.

#### Inherited from

`THREE.Object3D.add`

***

### addEventListener()

> **addEventListener**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

Adds a listener to an event type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `Object3DEventMap` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of event to listen to. |
| `listener` | `EventListener`\<`Object3DEventMap`\[`T`\], `T`, `BaseComponent`\> | The function that gets called when the event is fired. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.addEventListener`

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:385

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `matrix` | `Matrix4` |  |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.applyMatrix4`

***

### applyQuaternion()

> **applyQuaternion**(`quaternion`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:391

Applies the rotation represented by the quaternion to the object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `quaternion` | `Quaternion` |  |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.applyQuaternion`

***

### attach()

> **attach**(`object`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:541

Adds a Object3D as a child of this, while maintaining the object's world transform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `Object3D` |  |

#### Returns

`this`

#### Remarks

Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### See

[add](#add)

#### Inherited from

`THREE.Object3D.attach`

***

### clear()

> **clear**(): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:533

Removes all child objects.

#### Returns

`this`

#### Inherited from

`THREE.Object3D.clear`

***

### clone()

> **clone**(`recursive`?): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:664

Returns a clone of `this` object and optionally all descendants.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recursive`? | `boolean` | If true, descendants of the object are also cloned. Default `true` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.clone`

***

### copy()

> **copy**(`object`, `recursive`?): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:673

Copies the given object into this object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `Object3D` |  |
| `recursive`? | `boolean` | If set to `true`, descendants of the object are copied next to the existing ones. If set to `false`, descendants are left unchanged. Default is `true`. |

#### Returns

`this`

#### Remarks

Event listeners and user-defined callbacks (.onAfterRender and .onBeforeRender) are not copied.

#### Inherited from

`THREE.Object3D.copy`

***

### dispatchEvent()

> **dispatchEvent**\<`T`\>(`event`): `void`

Defined in: node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

Fire an event type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `Object3DEventMap` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `BaseEvent`\<`T`\> & `Object3DEventMap`\[`T`\] | The event that gets fired. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.dispatchEvent`

***

### getObjectById()

> **getObjectById**(`id`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:549

Searches through an object and its children, starting with the object itself, and returns the first with a matching id.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Unique number of the object instance. Expects a `Integer` |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.

#### See

[id](QubitDisplay.md#getobjectbyid-1)

#### Inherited from

`THREE.Object3D.getObjectById`

***

### getObjectByName()

> **getObjectByName**(`name`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:557

Searches through an object and its children, starting with the object itself, and returns the first with a matching name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | String to match to the children's Object3D.name property. |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that for most objects the name is an empty string by default
You will have to set it manually to make use of this method.

#### Inherited from

`THREE.Object3D.getObjectByName`

***

### getObjectByProperty()

> **getObjectByProperty**(`name`, `value`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:566

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | the property name to search for. |
| `value` | `any` | value of the given property. |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Inherited from

`THREE.Object3D.getObjectByProperty`

***

### getObjectsByProperty()

> **getObjectsByProperty**(`name`, `value`, `optionalTarget`?): `Object3D`\<`Object3DEventMap`\>[]

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:576

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The property name to search for. |
| `value` | `any` | Value of the given property. |
| `optionalTarget`? | `Object3D`\<`Object3DEventMap`\>[] | target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;). |

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

#### Inherited from

`THREE.Object3D.getObjectsByProperty`

***

### getWorldDirection()

> **getWorldDirection**(`target`): `Vector3`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:600

Returns a vector representing the direction of object's positive z-axis in world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

#### Inherited from

`THREE.Object3D.getWorldDirection`

***

### getWorldPosition()

> **getWorldPosition**(`target`): `Vector3`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:582

Returns a vector representing the position of the object in world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

#### Inherited from

`THREE.Object3D.getWorldPosition`

***

### getWorldQuaternion()

> **getWorldQuaternion**(`target`): `Quaternion`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:588

Returns a quaternion representing the rotation of the object in world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `Quaternion` | The result will be copied into this Quaternion. |

#### Returns

`Quaternion`

#### Inherited from

`THREE.Object3D.getWorldQuaternion`

***

### getWorldScale()

> **getWorldScale**(`target`): `Vector3`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:594

Returns a vector of the scaling factors applied to the object for each axis in world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

#### Inherited from

`THREE.Object3D.getWorldScale`

***

### hasEventListener()

> **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Defined in: node\_modules/@types/three/src/core/EventDispatcher.d.ts:62

Checks if listener is added to an event type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `Object3DEventMap` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of event to listen to. |
| `listener` | `EventListener`\<`Object3DEventMap`\[`T`\], `T`, `BaseComponent`\> | The function that gets called when the event is fired. |

#### Returns

`boolean`

#### Inherited from

`THREE.Object3D.hasEventListener`

***

### localToWorld()

> **localToWorld**(`vector`): `Vector3`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:484

Converts the vector from this object's local space to world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vector` | `Vector3` | A vector representing a position in this object's local space. |

#### Returns

`Vector3`

#### Inherited from

`THREE.Object3D.localToWorld`

***

### lookAt()

#### Call Signature

> **lookAt**(`vector`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:497

Rotates the object to face a point in world space.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vector` | `Vector3` | A vector representing a position in world space to look at. |

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

`THREE.Object3D.lookAt`

#### Call Signature

> **lookAt**(`x`, `y`, `z`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:505

Rotates the object to face a point in world space.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | Expects a `Float` |
| `y` | `number` | Expects a `Float` |
| `z` | `number` | Expects a `Float` |

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

`THREE.Object3D.lookAt`

***

### onAfterRender()

> **onAfterRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:353

An optional callback that is executed immediately after a 3D object is rendered.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `geometry` | `BufferGeometry` |
| `material` | `Material` |
| `group` | `Group` |

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`THREE.Object3D.onAfterRender`

***

### onAfterShadow()

> **onAfterShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:318

An optional callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `shadowCamera` | `Camera` |
| `geometry` | `BufferGeometry` |
| `depthMaterial` | `Material` |
| `group` | `Group` |

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`THREE.Object3D.onAfterShadow`

***

### onBeforeRender()

> **onBeforeRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:336

An optional callback that is executed immediately before a 3D object is rendered.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `geometry` | `BufferGeometry` |
| `material` | `Material` |
| `group` | `Group` |

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`THREE.Object3D.onBeforeRender`

***

### onBeforeShadow()

> **onBeforeShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:299

An optional callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `shadowCamera` | `Camera` |
| `geometry` | `BufferGeometry` |
| `depthMaterial` | `Material` |
| `group` | `Group` |

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

`THREE.Object3D.onBeforeShadow`

***

### raycast()

> **raycast**(`raycaster`, `intersects`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:610

Abstract (empty) method to get intersections between a casted ray and this object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `raycaster` | `Raycaster` |  |
| `intersects` | `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>[] |  |

#### Returns

`void`

#### Remarks

Subclasses such as THREE.Mesh \| Mesh, THREE.Line \| Line, and THREE.Points \| Points implement this method in order to use raycasting.

#### See

THREE.Raycaster \| Raycaster

#### Default Value

`() => {}`

#### Inherited from

`THREE.Object3D.raycast`

***

### remove()

> **remove**(...`object`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:523

Removes a Object3D as child of this Object3D.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`object` | `Object3D`\<`Object3DEventMap`\>[] |  |

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be removed.

#### See

THREE.Group \| Group for info on manually grouping objects.

#### Inherited from

`THREE.Object3D.remove`

***

### removeEventListener()

> **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

Removes a listener from an event type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `Object3DEventMap` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the listener that gets removed. |
| `listener` | `EventListener`\<`Object3DEventMap`\[`T`\], `T`, `BaseComponent`\> | The listener function that gets removed. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.removeEventListener`

***

### removeFromParent()

> **removeFromParent**(): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:528

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

`THREE.Object3D.removeFromParent`

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:425

Rotate an object along an axis in object space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | The angle in radians. Expects a `Float` |

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

`THREE.Object3D.rotateOnAxis`

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:434

Rotate an object along an axis in world space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `axis` | `Vector3` | A normalized vector in world space. |
| `angle` | `number` | The angle in radians. Expects a `Float` |

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized
Method Assumes no rotated parent.

#### Inherited from

`THREE.Object3D.rotateOnWorldAxis`

***

### rotateX()

> **rotateX**(`angle`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:440

Rotates the object around _x_ axis in local space.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.rotateX`

***

### rotateY()

> **rotateY**(`angle`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:446

Rotates the object around _y_ axis in local space.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.rotateY`

***

### rotateZ()

> **rotateZ**(`angle`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:452

Rotates the object around _z_ axis in local space.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.rotateZ`

***

### setRotationFromAxisAngle()

> **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:398

Calls THREE.Quaternion.setFromAxisAngle \| setFromAxisAngle([axis](QubitDisplay.md#setrotationfromaxisangle-1), [angle](QubitDisplay.md#setrotationfromaxisangle-1)) on the [.quaternion](QubitDisplay.md#quaternion).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | Angle in radians. Expects a `Float` |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.setRotationFromAxisAngle`

***

### setRotationFromEuler()

> **setRotationFromEuler**(`euler`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:404

Calls THREE.Quaternion.setFromEuler \| setFromEuler([euler](QubitDisplay.md#setrotationfromeuler-1)) on the [.quaternion](QubitDisplay.md#quaternion).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `euler` | `Euler` | Euler angle specifying rotation amount. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.setRotationFromEuler`

***

### setRotationFromMatrix()

> **setRotationFromMatrix**(`m`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:411

Calls THREE.Quaternion.setFromRotationMatrix \| setFromRotationMatrix([m](QubitDisplay.md#setrotationfrommatrix-1)) on the [.quaternion](QubitDisplay.md#quaternion).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `Matrix4` | Rotate the quaternion by the rotation component of the matrix. |

#### Returns

`void`

#### Remarks

Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).

#### Inherited from

`THREE.Object3D.setRotationFromMatrix`

***

### setRotationFromQuaternion()

> **setRotationFromQuaternion**(`q`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:417

Copy the given THREE.Quaternion \| Quaternion into [.quaternion](QubitDisplay.md#quaternion).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `q` | `Quaternion` | Normalized Quaternion. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.setRotationFromQuaternion`

***

### toJSON()

> **toJSON**(`meta`?): `Object3DJSON`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:658

Convert the object to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `meta`? | `JSONMeta` | Object containing metadata such as materials, textures or images for the object. |

#### Returns

`Object3DJSON`

#### Inherited from

`THREE.Object3D.toJSON`

***

### translateOnAxis()

> **translateOnAxis**(`axis`, `distance`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:460

Translate an object by distance along an axis in object space

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `distance` | `number` | The distance to translate. Expects a `Float` |

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

`THREE.Object3D.translateOnAxis`

***

### translateX()

> **translateX**(`distance`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:466

Translates object along x axis in object space by [distance](QubitDisplay.md#translatex-1) units.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.translateX`

***

### translateY()

> **translateY**(`distance`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:472

Translates object along _y_ axis in object space by [distance](QubitDisplay.md#translatey-1) units.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.translateY`

***

### translateZ()

> **translateZ**(`distance`): `this`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:478

Translates object along _z_ axis in object space by [distance](QubitDisplay.md#translatez-1) units.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

`THREE.Object3D.translateZ`

***

### traverse()

> **traverse**(`callback`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:617

Executes the callback on this object and all descendants.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`object`) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`THREE.Object3D.traverse`

***

### traverseAncestors()

> **traverseAncestors**(`callback`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:632

Executes the callback on all ancestors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`object`) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`THREE.Object3D.traverseAncestors`

***

### traverseVisible()

> **traverseVisible**(`callback`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:625

Like traverse, but the callback will only be executed for visible objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`object`) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

#### Remarks

Descendants of invisible objects are not traversed.
Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

`THREE.Object3D.traverseVisible`

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:637

Updates local transform.

#### Returns

`void`

#### Inherited from

`THREE.Object3D.updateMatrix`

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:645

Updates the global transform of the object.
And will update the object descendants if [.matrixWorldNeedsUpdate](QubitDisplay.md#matrixworldneedsupdate) is set to true or if the [force](QubitDisplay.md#updatematrixworld-1) parameter is set to `true`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `force`? | `boolean` | A boolean that can be used to bypass [.matrixWorldAutoUpdate](QubitDisplay.md#matrixworldautoupdate), to recalculate the world matrix of the object and descendants on the current frame. Useful if you cannot wait for the renderer to update it on the next frame, assuming [.matrixWorldAutoUpdate](QubitDisplay.md#matrixworldautoupdate) set to `true`. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.updateMatrixWorld`

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`, `updateChildren`): `void`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:652

Updates the global transform of the object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `updateParents` | `boolean` | Recursively updates global transform of ancestors. |
| `updateChildren` | `boolean` | Recursively updates global transform of descendants. |

#### Returns

`void`

#### Inherited from

`THREE.Object3D.updateWorldMatrix`

***

### worldToLocal()

> **worldToLocal**(`vector`): `Vector3`

Defined in: node\_modules/@types/three/src/core/Object3D.d.ts:490

Converts the vector from world space to this object's local space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vector` | `Vector3` | A vector representing a position in world space. |

#### Returns

`Vector3`

#### Inherited from

`THREE.Object3D.worldToLocal`
