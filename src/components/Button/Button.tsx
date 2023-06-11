import React from 'react'
import { buttonProps } from './Button.types'
import useStylesFromThemeFunction from './Button.styles'

export default function Button ({
  variant,
  size,
  color,
  disableShadow,
  StartIcon,
  EndIcon,
  children,
  ...props
}: buttonProps): React.ReactElement<buttonProps> {
  const classes = useStylesFromThemeFunction(props)
  const variantClassName =
    variant === 'contained'
      ? classes.buttonContained
      : variant === 'outlined'
      ? classes.buttonOutlined
      : classes.buttonText
  const sizeClassName =
    size === 'sm'
      ? classes.buttonSm
      : size === 'md'
      ? classes.buttonMd
      : classes.buttonLg
  const colorClassName =
    color === 'default'
      ? classes.buttonDefault
      : color === 'primary'
      ? classes.buttonPrimary
      : color === 'secondary'
      ? classes.buttonSecondary
      : classes.buttonDanger
  const shadowClassName = disableShadow ? classes.buttonNoShadow : ''
  const composedClassName = `${classes.buttonBase} ${variantClassName} ${sizeClassName} ${colorClassName} ${shadowClassName}`
  return (
    <button className={composedClassName} {...props}>
      {StartIcon || null}
      <span>{children}</span>
      {EndIcon || null}
    </button>
  )
}

Button.defaultProps = {
  variant: 'contained',
  size: 'md',
  color: 'default'
}
