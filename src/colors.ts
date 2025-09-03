// default colors
import { Color } from 'three'
export const dark = new Color(0x110000)
export const darkBlue = new Color(0x272c42)
export const lightBlue = new Color(0x4e46dd)
export const greyBlue = new Color(0x4c5a8b)
export const babyBlue = new Color(0x4ba2e3)
export const green = new Color(0x55b785)
export const lightGreen = new Color(0x94ca42)
export const magenta = new Color(0xc33175)
export const yellow = new Color(0xe1b53e)
export const beige = new Color(0xdcdee8)
export const red = new Color(0xf03e2d)

export const defaultColors = {
  text: beige,
  background: darkBlue,
  blochSphereSkin: greyBlue,
  grid: darkBlue,
  axisXPlus: red,
  axisXMinus: babyBlue,
  axisYPlus: lightGreen,
  axisYMinus: magenta,
  axisZPlus: lightBlue,
  axisZMinus: yellow,

  operator: yellow,
  operatorPath: beige,

  path: beige,
  region: green,
}
