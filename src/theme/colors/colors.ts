import { colorsType } from "./colors.types"

const colors: colorsType = {
  black: { main: 'rgb(63, 63, 63)' },
  white: { main: 'rgb(255, 255, 255)' },
  default: {
    main: 'rgb(224, 224, 224)',
    light: 'rgb(237, 237, 237)',
    dark: 'rgb(174, 174, 174)'
  },
  primary: {
    main: 'rgba(41, 98, 255, 1)',
    light: 'rgba(41, 98, 255, 0.1)',
    dark: 'rgb(33, 82, 218)'
  },
  secondary: {
    main: 'rgba(69, 90, 100, 1)',
    light: 'rgba(69, 90, 100, 0.1)',
    dark: 'rgba(28, 49, 58, 1)'
  },
  danger: {
    main: 'rgba(211, 47, 47, 1)',
    light: 'rgba(211, 47, 47, 0.1)',
    dark: 'rgba(154, 0, 7, 1)'
  },
}

export default colors
