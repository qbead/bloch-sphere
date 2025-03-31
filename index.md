**@qbead/bloch-sphere**

***

# @qbead/bloch-sphere

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [gates](@qbead/namespaces/gates/index.md) | A set of utilities for standard quantum gates (operators) |

## Classes

| Class | Description |
| ------ | ------ |
| [AngleIndicators](classes/AngleIndicators.md) | Display angle indicators for a Bloch vector |
| [BaseComponent](classes/BaseComponent.md) | Abstract base class for all components |
| [BlochSphere](classes/BlochSphere.md) | A Bloch Sphere Widget |
| [BlochSphereScene](classes/BlochSphereScene.md) | A scene for the Bloch sphere which extends the THREE.Scene class |
| [BlochVector](classes/BlochVector.md) | A class representing a Bloch vector |
| [Complex](classes/Complex.md) | A class representing a complex number. |
| [Label](classes/Label.md) | Label component for displaying text in 3D space |
| [Operator](classes/Operator.md) | Quantum operators are 2x2 matrices of complex numbers |
| [OperatorDisplay](classes/OperatorDisplay.md) | A display for a quantum operator |
| [OperatorPathDisplay](classes/OperatorPathDisplay.md) | A display for the path a qbit takes when it is rotated by an operator |
| [PathDisplay](classes/PathDisplay.md) | A display for a path on the Bloch sphere |
| [PointsDisplay](classes/PointsDisplay.md) | A display for points on the Bloch sphere |
| [QubitArrow](classes/QubitArrow.md) | A display for just a qubit arrow |
| [QubitDisplay](classes/QubitDisplay.md) | A display for a qubit state on the Bloch sphere |
| [QubitProjWedge](classes/QubitProjWedge.md) | A wedge which is a quarter of a circle |
| [RegionDisplay](classes/RegionDisplay.md) | A display for a region on the Bloch sphere |
| [Wedge](classes/Wedge.md) | Creates a three.js wedge, that is the outline of a quarter of a circle. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AnimationCallback](type-aliases/AnimationCallback.md) | - |
| [ArcProperties](type-aliases/ArcProperties.md) | Properties of a arc on a sphere |
| [CancelAnimation](type-aliases/CancelAnimation.md) | - |
| [IntoComplex](type-aliases/IntoComplex.md) | A type that can be converted to a Complex number. |

## Functions

| Function | Description |
| ------ | ------ |
| [animate](functions/animate.md) | Animation helper function |
| [formatDegrees](functions/formatDegrees.md) | Format an angle given in radians as a string in degrees with a given precision. |
| [formatRadians](functions/formatRadians.md) | Format an angle given in radians as a string in radians with a given precision. |
| [formatVector](functions/formatVector.md) | Format a vector as a string with a given precision. |
| [getArcBetween](functions/getArcBetween.md) | Gets the properties of an great arc between two vectors |
| [getRotationArc](functions/getRotationArc.md) | Gets properties of an arc starting from v and rotating about n by angle |
| [lerp](functions/lerp.md) | Standard linear interpolation function |
