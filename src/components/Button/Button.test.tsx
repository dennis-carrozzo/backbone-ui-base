import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'
import Button from './Button'

test('render text in button correctly', async () => {
  await render(<Button>text</Button>)
  const buttonText = screen.getByText(/text/i)
  expect(buttonText).toBeInTheDocument()
})

// test('it renders StartIcon', () => {
//   render(<Button StartIcon={LocalGroceryStoreIcon}>text</Button>)
//   // expect(buttonText).toBeInTheDocument()
// })

// test('it renders EndIcon', () => {
//   render(<Button EndIcon={LocalGroceryStoreIcon}>text</Button>)
//   // expect(buttonText).toBeInTheDocument()
// })

// test('it renders correct variant style', () => {
//   render(<Button variant='contained'>text</Button>)
//   // expect(buttonText).toBeInTheDocument()
// })

// test('it renders correct color style', () => {
//   render(<Button color='primary'>text</Button>)
//   // expect(buttonText).toBeInTheDocument()
// })

// test('it disable box-shadow', () => {
//   render(<Button disableShadow>text</Button>)
//   // expect(buttonText).toBeInTheDocument()
// })
