import * as THREE from 'three'
import { BaseComponent } from './component'

// They all have the same geometry, so we can reuse it.
// create the needed vertices
const vertices = []
const radius = 1
const angle = Math.PI / 2
const segments = 32
for (let i = 0; i <= segments; i++) {
  const x = radius * Math.cos((i * angle) / segments)
  const y = radius * Math.sin((i * angle) / segments)
  vertices.push(x, y, 0)
}
// include the lines that connect the vertices
vertices.push(0, 0, 0)
vertices.push(radius, 0, 0)

const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
// no dispose though
geometry.dispose = () => {}

/**
 * Creates a wedge, that is the outline of
 * a quarter of a circle.
 */
export class Wedge extends BaseComponent {
  constructor() {
    super('wedge')

    const material = new THREE.LineBasicMaterial({})
    material.depthFunc = THREE.AlwaysDepth

    const line = new THREE.Line(geometry, material)
    line.rotation.set(Math.PI / 2, 0, 0)
    this.add(line)
  }
}
