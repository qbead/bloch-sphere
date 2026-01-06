import {
  BlochSphere,
  BlochVector,
  QubitDisplay,
  PathDisplay,
  gates,
} from '@qbead/bloch-sphere'

// ========================================
// Setup
// ========================================
const sphere = new BlochSphere({
  fontSize: 1.25,
  showGrid: true,
})
sphere.attach(document.body)

// Handle window resize
window.addEventListener('resize', () => sphere.resize(), { passive: true })

// ========================================
// Visualization
// ========================================
// Create a sequence of states through different gates
const state0 = BlochVector.ZERO // |0⟩ state
const state1 = state0.applyOperator(gates.hadamard()) // After H gate: |+⟩
const stateY = state1.applyOperator(gates.y()) // After Y gate

// Display all states with different colors
const qubit0 = new QubitDisplay(state0)
qubit0.color = 0xf03e2d // red
sphere.add(qubit0)

const qubitH = new QubitDisplay(state1)
qubitH.color = 0x4ba2e3 // babyBlue
sphere.add(qubitH)

const qubitY = new QubitDisplay(stateY)
qubitY.color = 0xc33175 // magenta
sphere.add(qubitY)

// Show the transformation path
const path = new PathDisplay([state0, state1, stateY])
path.color = 0xdcdee8 // beige
sphere.add(path)
