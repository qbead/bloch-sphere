import { BlochSphere, BlochVector, QubitDisplay } from '@qbead/bloch-sphere'

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
// Create and display a quantum state (|+⟩ state)
const qubit = new QubitDisplay(BlochVector.PLUS)
sphere.add(qubit)
