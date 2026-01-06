import {
  BlochSphere,
  BlochVector,
  PointsDisplay,
  RegionDisplay,
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

// Create random points
const randomPoints = Array.from({ length: 100 }, () => BlochVector.random())
const randomDisplay = new PointsDisplay(randomPoints)
randomDisplay.color = 0xe1b53e // yellow
randomDisplay.pointSize = 15
sphere.add(randomDisplay)

// Create patterned points (circle on equator)
const patternedPoints: BlochVector[] = []
for (let i = 0; i < 24; i++) {
  const phi = (i / 24) * 2 * Math.PI
  patternedPoints.push(BlochVector.fromAngles(Math.PI / 2, phi))
}
const patternDisplay = new PointsDisplay(patternedPoints)
patternDisplay.color = 0x4ba2e3 // babyBlue
patternDisplay.pointSize = 20
sphere.add(patternDisplay)

// Create a triangular region in the northern hemisphere
const triangleRegion = new RegionDisplay([
  BlochVector.ZERO, // North pole
  BlochVector.fromAngles(Math.PI / 3, 0),
  BlochVector.fromAngles(Math.PI / 3, (2 * Math.PI) / 3),
])
triangleRegion.color = 0x55b785 // green
sphere.add(triangleRegion)

// Create another region (southern hemisphere)
const southRegion = new RegionDisplay([
  BlochVector.ONE, // South pole
  BlochVector.fromAngles((2 * Math.PI) / 3, Math.PI / 4),
  BlochVector.fromAngles((2 * Math.PI) / 3, (3 * Math.PI) / 4),
  BlochVector.fromAngles((2 * Math.PI) / 3, (5 * Math.PI) / 4),
])
southRegion.color = 0xc33175 // magenta
sphere.add(southRegion)
