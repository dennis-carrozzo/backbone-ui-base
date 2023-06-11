type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type CSSColor = RGB | RGBA | HEX

interface color {
  main: CSSColor
  light?: CSSColor
  dark?: CSSColor
}

export interface colorsType {
  black: color
  white: color
  default: color
  primary: color
  secondary: color
  danger: color
}
