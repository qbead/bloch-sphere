import { Qubit } from '../qubit'
import { BaseComponent } from './component'
import * as THREE from 'three'
import { Label } from './label'
import { AngleUnits, isRadiansUnits } from '../math'

const yAxis = new THREE.Vector3(0, 1, 0)

export class AngleIndicators extends BaseComponent {
  public units: AngleUnits = 'deg'

  private phiWedge: THREE.Mesh
  private phiLabel: Label
  private thetaLabelContainer: THREE.Object3D
  private thetaWedge: THREE.Mesh
  private thetaLabel: Label
  private phiLabelContainer: THREE.Object3D

  private _phiColor = new THREE.Color(0xffffff)
  private _thetaColor = new THREE.Color(0xffffff)

  constructor(scale = 0.25) {
    super('angle-indicators')

    this.phiWedge = new THREE.Mesh(
      new THREE.RingGeometry(0, 1, 16, 1, 0, Math.PI),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
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
    this.phiLabelContainer.add(this.phiLabel.object)
    this.phiWedge.add(this.phiLabelContainer)

    this.thetaWedge = new THREE.Mesh(
      new THREE.RingGeometry(0, 1, 16, 1, 0, Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
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
    this.thetaLabelContainer.add(this.thetaLabel.object)
    this.thetaWedge.add(this.thetaLabelContainer)

    this.phiWedge.add(this.thetaWedge)
    this.object.add(this.phiWedge, this.thetaWedge)
    this.scale = scale
    this.phiColor = this._phiColor
    this.thetaColor = this._thetaColor
    this.labelRadius = 1.1
  }

  update(qubit: Qubit) {
    const { phi, theta } = qubit
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
      this.phiLabel.text = `${phi.toFixed(2)} rad`
      this.thetaLabel.text = `${theta.toFixed(2)} rad`
    } else {
      this.phiLabel.text = `${(phi * (180 / Math.PI)).toFixed(2)}°`
      this.thetaLabel.text = `${(theta * (180 / Math.PI)).toFixed(2)}°`
    }
  }

  get labelRadius() {
    return this.phiLabel.position.length()
  }

  set labelRadius(radius: number) {
    this.phiLabel.position.set(radius, 0, 0)
    this.thetaLabel.position.set(0, radius, 0)
  }

  set color(color: number | THREE.Color) {
    // do nothing
  }

  get phiColor() {
    return this._phiColor
  }

  set phiColor(color: number | THREE.Color) {
    this._phiColor.set(color)
    // @ts-ignore
    this.phiWedge.material.color = this._phiColor
    this.phiLabel.color = this._phiColor
  }

  get thetaColor() {
    return this._thetaColor
  }

  set thetaColor(color: number | THREE.Color) {
    this._thetaColor.set(color)
    // @ts-ignore
    this.thetaWedge.material.color = this._thetaColor
    this.thetaLabel.color = this._thetaColor
  }
}
