import { ReactElement } from 'react'
import { themeType } from '../../theme/theme.types'

type variantType = 'contained' | 'outlined' | 'text'
type sizeType = 'sm' | 'md' | 'lg'
type colorType = 'default' | 'primary' | 'secondary' | 'danger'

export interface buttonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: variantType
  size?: sizeType
  color?: colorType
  disableShadow?: boolean
  disabled?: boolean
  StartIcon?: ReactElement
  EndIcon?: ReactElement
  theme?: themeType
}
