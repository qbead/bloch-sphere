import * as THREE from 'three'
import { BaseComponent } from './component'
import { SphericalPolygonMaterial } from '../materials/spherical-polygon'
import { BlochVector } from '../math/bloch-vector'
import { defaultColors } from '../colors'

/**
 * A display for a region on the Bloch sphere
 *
 * This component shows a spherical polygon on the Bloch sphere.
 *
 * @example
 * ```ts
 * const region = new RegionDisplay([
 *   BlochVector.fromAngles(0, 0),
 *   BlochVector.fromAngles(1, 0.1),
 *   BlochVector.fromAngles(1, 1),
 * ])
 * region.color = 0xe1b53e
 * blochSphere.add(region)
 * ```
 */
export class RegionDisplay extends BaseComponent {
  private sphere: THREE.Mesh
  constructor(region?: BlochVector[]) {
    super('region-display')

    const material = new SphericalPolygonMaterial()
    material.highlightColor = defaultColors.region
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.985, 64, 64),
      material
    )
    this.add(this.sphere)

    if (region) {
      this.setRegion(region)
    }
  }

  get color() {
    const material = this.sphere.material as SphericalPolygonMaterial
    return material.highlightColor
  }

  set color(color: THREE.ColorRepresentation) {
    const material = this.sphere.material as SphericalPolygonMaterial
    material.highlightColor = color
  }

  /**
   * Set the region of the display
   *
   * @param points - The bloch vectors that define the region.
   */
  setRegion(points: BlochVector[]) {
    const material = this.sphere.material as SphericalPolygonMaterial
    material.setRegion(points)
  }
}
