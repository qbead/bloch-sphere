import {
  BlochSphere,
  BlochVector,
  QubitDisplay,
  OperatorDisplay,
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
// Initial qubit state
const initialState = BlochVector.fromAngles(Math.PI / 4, Math.PI / 6)

// Use a rotation gate for clear visualization
const operator = gates.ry(Math.PI / 3)
const resultState = initialState.applyOperator(operator)

// Display the operator
const operatorDisplay = new OperatorDisplay()
operatorDisplay.set(operator)
sphere.add(operatorDisplay)

// Display the transformation path
const operatorPath = new OperatorPathDisplay()
operatorPath.set(operator, initialState)
operatorPath.color = 0xe1b53e // yellow
sphere.add(operatorPath)

// Display initial state
const initialQubit = new QubitDisplay(initialState)
initialQubit.color = 0x4ba2e3 // babyBlue
sphere.add(initialQubit)

// Display result state
const resultQubit = new QubitDisplay(resultState)
resultQubit.color = 0x55b785 // green
sphere.add(resultQubit)
