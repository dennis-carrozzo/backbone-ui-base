import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import * as ___ from '@testing-library/jest-dom'
import { ThemeProvider } from 'react-jss'
import theme from '../theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options }) as RenderResult

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
