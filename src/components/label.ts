import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { BaseComponent } from './component'
import { defaultColors } from '../colors'

/**
 * Label component for displaying text in 3D space
 *
 * @example
 * ```typescript
 * const label = new Label('Hello World');
 * label.position.set(0, 1, 0);
 * label.color = 'red';
 * label.fontSize = 2;
 * blochSphere.add(label);
 * ```
 *
 * @extends BaseComponent
 */
export class Label extends BaseComponent {
  private htmlobj: CSS2DObject

  /**
   * Create a new label
   * @param text The text to display
   * @param type The type of label, corresponding to the html class (default: 'label')
   */
  constructor(text: string, type = 'label') {
    super('label')

    const el = document.createElement('label')
    el.className = type
    el.textContent = text
    el.setAttribute('style', `--label-color: ${defaultColors.text.getStyle()}`)
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

  get color(): THREE.Color {
    return this._color
  }

  set color(color: THREE.ColorRepresentation) {
    this._color.set(color)
    this.htmlobj.element.style.setProperty(
      '--label-color',
      `${this._color.getStyle(THREE.LinearSRGBColorSpace)}`
    )
  }

  /**
   * Cleanup tasks
   */
  destroy() {
    this.htmlobj.element.remove()
  }
}
