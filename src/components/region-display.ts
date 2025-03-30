import * as THREE from 'three'
import { BaseComponent } from './component'
import { SphericalPolygonMaterial } from '../materials/spherical-polygon'
import { BlochVector } from '../math/bloch-vector'

export class RegionDisplay extends BaseComponent {
  private sphere: THREE.Mesh
  constructor(region?: BlochVector[]) {
    super('region-display')

    const material = new SphericalPolygonMaterial()
    material.highlightColor = 0xddaa00
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.985, 64, 64),
      material
    )
    this.add(this.sphere)

    if (region) {
      this.setRegion(region)
    }
  }

  get highlightColor() {
    const material = this.sphere.material as SphericalPolygonMaterial
    return material.highlightColor
  }

  set highlightColor(color: THREE.ColorRepresentation) {
    const material = this.sphere.material as SphericalPolygonMaterial
    material.highlightColor = color
  }

  setRegion(points: BlochVector[]) {
    const material = this.sphere.material as SphericalPolygonMaterial
    material.setRegion(points)
  }
}
