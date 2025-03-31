import { BlochVector } from '../math/bloch-vector'
import { BaseComponent } from './component'
import * as THREE from 'three'
import { Label } from './label'
import { AngleUnits, isRadiansUnits } from '../math/units'
import { formatDegrees, formatRadians } from '../format'
import { defaultColors } from '../colors'

const yAxis = new THREE.Vector3(0, 1, 0)

/**
 * Display angle indicators for a Bloch vector
 *
 * @example
 * ```ts
 * const angleIndicators = new AngleIndicators()
 * angleIndicators.update(blochVector)
 * angleIndicators.color = 0xe1b53e
 * blochSphere.add(angleIndicators)
 * ```
 */
export class AngleIndicators extends BaseComponent {
  public units: AngleUnits = 'deg'

  private phiWedge: THREE.Mesh
  private phiLabel: Label
  private thetaLabelContainer: THREE.Object3D
  private thetaWedge: THREE.Mesh
  private thetaLabel: Label
  private phiLabelContainer: THREE.Object3D

  private _phiColor = new THREE.Color(defaultColors.text)
  private _thetaColor = new THREE.Color(defaultColors.text)

  /**
   * Creates a new AngleIndicators component
   *
   * @param scale - The scale of the angle indicators (default is 0.25)
   */
  constructor(scale = 0.25) {
    super('angle-indicators')

    this.phiWedge = new THREE.Mesh(
      new THREE.RingGeometry(0, 1, 16, 1, 0, Math.PI),
      new THREE.MeshBasicMaterial({
        color: this._phiColor,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      })
    )
    // @ts-ignore
    this.phiWedge.material.depthTest = false
    this.phiWedge.renderOrder = 2

    this.phiLabel = new Label('0', 'label angle-label')
    this.phiLabel.position.set(1, 0, 0)
    this.phiLabelContainer = new THREE.Object3D()
    this.phiLabelContainer.add(this.phiLabel)
    this.phiWedge.add(this.phiLabelContainer)

    this.thetaWedge = new THREE.Mesh(
      new THREE.RingGeometry(0, 1, 16, 1, 0, Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: this._thetaColor,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      })
    )
    // @ts-ignore
    this.thetaWedge.material.depthTest = false
    this.thetaWedge.renderOrder = 3
    this.thetaWedge.rotation.set(Math.PI / 2, Math.PI / 2, 0)

    this.thetaLabel = new Label('0', 'label angle-label')
    this.thetaLabel.position.set(0, 1, 0)
    this.thetaLabelContainer = new THREE.Object3D()
    this.thetaLabelContainer.add(this.thetaLabel)
    this.thetaWedge.add(this.thetaLabelContainer)

    this.phiWedge.add(this.thetaWedge)
    this.add(this.phiWedge, this.thetaWedge)
    this.scale.set(scale, scale, scale)
    this.phiColor = this._phiColor
    this.thetaColor = this._thetaColor
    this.labelRadius = 1.1
    this.opacity = 0.2
  }

  /**
   * Update the angle indicators for the given Bloch vector
   */
  update(v: BlochVector) {
    const { phi, theta } = v
    // we need to regenerate the geometry unfortunately
    this.phiWedge.geometry.dispose()
    this.thetaWedge.geometry.dispose()
    this.phiWedge.geometry = new THREE.RingGeometry(0, 1, 16, 1, 0, phi)
    this.thetaWedge.geometry = new THREE.RingGeometry(
      0,
      1,
      16,
      1,
      Math.PI / 2,
      theta
    )
    this.thetaWedge.rotation.set(Math.PI / 2, Math.PI / 2, 0)
    this.thetaWedge.rotateOnAxis(yAxis, Math.PI / 2 + phi)
    this.thetaLabelContainer.rotation.set(0, 0, Math.min(theta, 0.5))
    this.phiLabelContainer.rotation.set(0, 0, phi / 2)
    if (isRadiansUnits(this.units)) {
      this.phiLabel.text = formatRadians(phi)
      this.thetaLabel.text = formatRadians(theta)
    } else {
      this.phiLabel.text = formatDegrees(phi)
      this.thetaLabel.text = formatDegrees(theta)
    }
  }

  get opacity() {
    // @ts-ignore
    return this.phiWedge.material.opacity
  }

  set opacity(opacity: number) {
    // @ts-ignore
    this.phiWedge.material.opacity = opacity
    // @ts-ignore
    this.thetaWedge.material.opacity = opacity
  }

  /**
   * The distance of the labels from the center of the sphere
   */
  get labelRadius() {
    return this.phiLabel.position.length()
  }

  set labelRadius(radius: number) {
    this.phiLabel.position.set(radius, 0, 0)
    this.thetaLabel.position.set(0, radius, 0)
  }

  set color(color: THREE.ColorRepresentation) {
    // set both
    this.phiColor = color
    this.thetaColor = color
  }

  get phiColor() {
    return this._phiColor
  }

  set phiColor(color: THREE.ColorRepresentation) {
    this._phiColor.set(color)
    // @ts-ignore
    this.phiWedge.material.color = this._phiColor
    this.phiLabel.color = this._phiColor
  }

  get thetaColor() {
    return this._thetaColor
  }

  set thetaColor(color: THREE.ColorRepresentation) {
    this._thetaColor.set(color)
    // @ts-ignore
    this.thetaWedge.material.color = this._thetaColor
    this.thetaLabel.color = this._thetaColor
  }
}
