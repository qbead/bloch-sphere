import * as THREE from 'three'
import { BaseComponent } from './component'
import { BlochVector } from '../math/bloch-vector'

/**
 * A display for points on the Bloch sphere
 *
 * @example
 * ```ts
 * // generate 100 randomly
 * const points = new PointsDisplay(
 *   Array.from({ length: 100 }, () => BlochVector.random())
 * )
 * points.color = 0xe1b53e
 * points.pointSize = 10
 * blochSphere.add(points)
 * ```
 */
export class PointsDisplay extends BaseComponent {
  private pointMaterial: THREE.ShaderMaterial

  constructor(points?: BlochVector[]) {
    super('points-display')

    // Custom shader for circular points
    this.pointMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        uniform float pointSize;
        varying vec2 vUv;
        varying float distanceToCamera;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          distanceToCamera = -mvPosition.z;
          gl_PointSize = pointSize;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
      fragmentShader: `
        uniform vec3 color;
        varying float distanceToCamera;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5); // Center
          if (length(coord) > 0.5) discard; // Make it circular
          gl_FragColor = vec4(color, 1.0);
        }
    `,
      uniforms: {
        color: { value: new THREE.Color(1, 1, 1) },
        pointSize: { value: 20 },
      },
    })
    if (points) {
      this.set(points)
    }
  }

  /**
   * Set the size of the points
   */
  get pointSize() {
    return this.pointMaterial.uniforms.pointSize.value
  }

  set pointSize(size: number) {
    this.pointMaterial.uniforms.pointSize.value = size
  }

  /**
   * Set the color of the points
   */
  set color(color: THREE.ColorRepresentation) {
    const colorValue = new THREE.Color(color)
    this.pointMaterial.uniforms.color.value = colorValue.convertLinearToSRGB()
  }

  /**
   * Set the points to display
   */
  set(points: BlochVector[]) {
    this.clear()

    const positions = new Float32Array(points.length * 3)
    for (const [i, point] of points.entries()) {
      const pos = point
      positions[i * 3] = pos.x
      positions[i * 3 + 1] = pos.y
      positions[i * 3 + 2] = pos.z
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    // geometry.scale(1.01, 1.01, 1.01)

    // Create points object
    const pointsMesh = new THREE.Points(geometry, this.pointMaterial)
    this.add(pointsMesh)
  }
}
