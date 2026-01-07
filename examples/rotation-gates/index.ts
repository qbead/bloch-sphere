import { OperatorDisplay } from '@qbead/bloch-sphere'
import {
  BlochSphere,
  BlochVector,
  QubitDisplay,
  OperatorPathDisplay,
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
const initialState = BlochVector.ZERO

// Create two rotation operators and combine them
const rxGate = gates.rx(Math.PI / 3) // Rotate π/3 around X-axis
const ryGate = gates.ry(Math.PI / 4) // Rotate π/4 around Y-axis


// Display initial state
const initialQubit = new QubitDisplay(initialState)
initialQubit.color = 0xdcdee8 // beige
sphere.add(initialQubit)

// Show the intermediate state after first rotation
const stateAfterRX = initialState.applyOperator(rxGate)

// Display intermediate state after RX
const intermediateQubit = new QubitDisplay(stateAfterRX)
intermediateQubit.color = 0xf03e2d // red (X-axis color)
sphere.add(intermediateQubit)

// Combine the rotations: apply RX first, then RY
const combinedGate = ryGate.times(rxGate)

const combinedGateDisplay = new OperatorDisplay(combinedGate)
sphere.add(combinedGateDisplay)

// Show the final state after both rotations
const finalState = initialState.applyOperator(combinedGate)

// Display final state after combined rotation
const finalQubit = new QubitDisplay(finalState)
finalQubit.color = 0x4ba2e3 // babyBlue
sphere.add(finalQubit)

// Show the path for the first rotation (RX)
const pathRX = new OperatorPathDisplay()
pathRX.set(rxGate, initialState)
pathRX.color = 0xf03e2d // red
sphere.add(pathRX)

// Show the path for the second rotation (RY) starting from intermediate state
const pathRY = new OperatorPathDisplay()
pathRY.set(ryGate, stateAfterRX)
pathRY.color = 0x94ca42 // lightGreen
sphere.add(pathRY)
