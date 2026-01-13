# Qbead Bloch Sphere

A 3D Bloch sphere visualization library built with Three.js.

[![npm version](https://img.shields.io/npm/v/@qbead/bloch-sphere)](https://www.npmjs.com/package/@qbead/bloch-sphere)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://bloch-sphere.qbead.org/)
[![API Docs](https://img.shields.io/badge/docs-api-blue)](https://qbead.gitbook.io/bloch-sphere)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Features

- **Interactivity**: Ability to rotate the sphere with mouse/touch.
- **Quantum State Operations**: Quantum gates (Pauli, Hadamard, rotation gates)
- **Math Library**: Complex number and operator algebra
- **Type-Safe**: Written in TypeScript with full type definitions
- **Flexible Components**: Modular display components (arrows, paths, regions, labels, points)
- **Animation Support**: Smooth interpolation between quantum states

## Demo

**Live Demo**: [bloch-sphere.qbead.org](https://bloch-sphere.qbead.org/)

## Installation

```sh
bun install @qbead/bloch-sphere three
```

The library requires Three.js as a peer dependency.

## Quick Start

### Basic Visualization

```typescript
import { BlochSphere, BlochVector, QubitDisplay } from '@qbead/bloch-sphere'

// Initialize the Bloch sphere
const sphere = new BlochSphere({
  fontSize: 1.25,
  showGrid: true,
})

// Attach to the DOM
sphere.attach(document.body)

// Create and display a quantum state (|+⟩ state)
const qubit = new QubitDisplay(BlochVector.PLUS)
sphere.add(qubit)
```

### Applying Quantum Gates

```typescript
import { BlochVector, gates } from '@qbead/bloch-sphere'

// Start with |0⟩ state
const state = BlochVector.ZERO

// Apply Hadamard gate to create superposition
const hadamardGate = gates.hadamard()
const superposition = state.applyOperator(hadamardGate)

// Apply Pauli-X gate (bit flip)
const xGate = gates.x()
const flipped = superposition.applyOperator(xGate)
```

### Working with Complex Numbers

```typescript
import { Complex } from '@qbead/bloch-sphere'

// Create complex numbers
const a = new Complex(3, 4) // 3 + 4i
const b = Complex.fromPolar(1, Math.PI / 4) // e^(iπ/4)

// Complex arithmetic
const sum = a.plus(b)
const product = a.times(b)
const magnitude = a.magnitude // |a| = 5
const phase = a.phase // arg(a)
```

### Creating Custom Operators

```typescript
import { Operator, Complex } from '@qbead/bloch-sphere'

// Create a custom 2x2 operator matrix
const customOperator = new Operator([
  [new Complex(1, 0), new Complex(0, -1)],
  [new Complex(0, 1), new Complex(1, 0)],
])

// Verify unitarity
const identity = customOperator
  .conjugateTranspose()
  .times(customOperator)

// Apply to quantum state
const newState = state.applyOperator(customOperator)
```

### Rotation Gates

```typescript
import { gates, BlochVector } from '@qbead/bloch-sphere'

// Rotate around X-axis by π/4
const rxGate = gates.rx(Math.PI / 4)

// Rotate around Y-axis by π/2
const ryGate = gates.ry(Math.PI / 2)

// Rotate around Z-axis (phase rotation)
const rzGate = gates.rz(Math.PI / 3)

// Apply rotation
const rotated = BlochVector.ZERO.applyOperator(rxGate)
```

### Visualizing Quantum State Paths

```typescript
import { BlochSphere, BlochVector, PathDisplay, gates } from '@qbead/bloch-sphere'

const sphere = new BlochSphere()
sphere.attach(document.body)

// Create a sequence of states
const states = [
  BlochVector.ZERO,
  BlochVector.ZERO.applyOperator(gates.hadamard()),
  BlochVector.ZERO.applyOperator(gates.hadamard()).applyOperator(gates.z()),
]

// Display as a path
const path = new PathDisplay(states)
path.color = 0x00ff00
sphere.add(path)
```

## API Documentation

For complete API documentation, visit: [qbead.gitbook.io/bloch-sphere](https://qbead.gitbook.io/bloch-sphere)

## Quick Overview of Core Exports

See [qbead.gitbook.io/bloch-sphere](https://qbead.gitbook.io/bloch-sphere) for complete reference.

### Components
- `BlochSphere` - Main 3D visualization container
- `QubitDisplay` - Display individual qubit states
- `PathDisplay` - Show paths between quantum states
- `OperatorDisplay` - Visualize operator transformations

### Math
- `BlochVector` - Quantum state representation on Bloch sphere
- `Complex` - Complex number arithmetic
- `Operator` - 2x2 matrix operators for quantum gates
- `gates` - Standard quantum gates (X, Y, Z, H, rotation gates)

### Predefined States
- `BlochVector.ZERO` - |0⟩ state
- `BlochVector.ONE` - |1⟩ state
- `BlochVector.PLUS` - |+⟩ state (superposition)
- `BlochVector.MINUS` - |−⟩ state
- `BlochVector.I` - |i⟩ state
- `BlochVector.MINUS_I` - |−i⟩ state


## Development

```sh
# Install dependencies
bun install

# Run tests
bun test

# Run tests with coverage
bun test:coverage

# Build the library
bun run build

# Type checking
bun run typecheck
```

## Test Coverage

Run `bun test:coverage` to see detailed coverage reports.

## Browser Support

The library works in all modern browsers that support WebGL (required for Three.js).

## License

MIT © [Jasper Palfree](https://github.com/wellcaffeinated)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests on [GitHub](https://github.com/qbead/bloch-sphere).

## Acknowledgments

Work commisioned by the [Qbead team](https://www.qbead.org)!
