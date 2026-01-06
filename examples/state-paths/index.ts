import {
  BlochSphere,
  BlochVector,
  QubitDisplay,
  PathDisplay,
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
// Create a sequence of states forming a circle on the equator
const states: BlochVector[] = []
const steps = 12

for (let i = 0; i <= steps; i++) {
  const theta = (i / steps) * Math.PI // from 0 to π
  const phi = (i / steps) * 2 * Math.PI
  const state = BlochVector.fromAngles(theta, phi)
  states.push(state)
}

// Display the path
const path = new PathDisplay(states)
path.color = 0x4ba2e3 // babyBlue
sphere.add(path)

// Create animated qubit that follows the path
const animatedQubit = new QubitDisplay(states[0])
animatedQubit.color = 0xe1b53e // yellow
sphere.add(animatedQubit)

// Animate through the states
async function animate() {
  animatedQubit.set(states[0])
  for (const state of states.slice(1)) {
    await animatedQubit.set(state, 500)
  }
  // Loop back to start
  setTimeout(animate, 1000)
}

// Start animation after a brief delay
setTimeout(animate, 1000)
