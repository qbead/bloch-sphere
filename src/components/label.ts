import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { BaseComponent } from './component'

export class Label extends BaseComponent {
  object: CSS2DObject
  constructor(text: string, type = 'label') {
    super('label')

    const el = document.createElement('label')
    el.className = type
    el.textContent = text
    el.setAttribute('style', '--label-color: #ffffff')
    this.object = new CSS2DObject(el)
    this.object.position.set(0, 0, 0)
    this.object.userData.component = this
  }

  get position() {
    return this.object.position
  }

  get text() {
    return this.object.element.textContent || ''
  }

  set text(text: string) {
    this.object.element.textContent = text
  }

  get color() {
    return this._color
  }

  set color(color: number | THREE.Color) {
    this._color.set(color)
    this.object.element.style.setProperty(
      '--label-color',
      `${this._color.getStyle(THREE.LinearSRGBColorSpace)}`
    )
  }
}
