import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { BaseComponent } from './component'

export class Label extends BaseComponent {
  private htmlobj: CSS2DObject
  constructor(text: string, type = 'label') {
    super('label')

    const el = document.createElement('label')
    el.className = type
    el.textContent = text
    el.setAttribute('style', '--label-color: #ffffff')
    this.htmlobj = new CSS2DObject(el)
    this.htmlobj.position.set(0, 0, 0)
    this.htmlobj.userData.component = this
    this.add(this.htmlobj)
  }

  get text() {
    return this.htmlobj.element.textContent || ''
  }

  set text(text: string) {
    this.htmlobj.element.textContent = text
    if (!text) {
      this.visible = false
    }
  }

  get fontSize() {
    return parseInt(this.htmlobj.element.style.fontSize || '18')
  }

  set fontSize(size: number) {
    this.htmlobj.element.style.fontSize = `${size}em`
  }

  get color() {
    return this._color
  }

  set color(color: THREE.ColorRepresentation) {
    this._color.set(color)
    this.htmlobj.element.style.setProperty(
      '--label-color',
      `${this._color.getStyle(THREE.LinearSRGBColorSpace)}`
    )
  }

  destroy() {
    this.htmlobj.element.remove()
  }
}
