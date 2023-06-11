import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'react-jss'
import theme from '../../theme'
import Button from './Button'
import { Component } from '@storybook/blocks'

const meta: Meta<typeof Button> = {
  component: Button as Component,
  title: '@dennis-ui/backbone/Button',
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}
export default meta

type Story = StoryObj<typeof Button>

// variants
export const Contained: Story = args => <Button {...args} />
Contained.args = {
  variant: 'contained',
  children: 'Contained'
}

export const Outlined: Story = args => <Button {...args} />
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined'
}

export const Text: Story = args => <Button {...args} />
Text.args = {
  variant: 'text',
  children: 'Text'
}
// colors
export const Default: Story = args => <Button {...args} />
Default.args = {
  children: 'Default'
}

export const Primary: Story = args => <Button {...args} />
Primary.args = {
  color: 'primary',
  children: 'Primary'
}

export const Secondary: Story = args => <Button {...args} />
Secondary.args = {
  color: 'secondary',
  children: 'Secondary'
}

export const Danger: Story = args => <Button {...args} />
Danger.args = {
  color: 'danger',
  children: 'Danger'
}

// disabled
export const Disabled: Story = args => <Button {...args} />
Disabled.args = {
  disabled: true,
  children: 'Disabled'
}
// no shadow
export const DisabledShadow: Story = args => <Button {...args} />
DisabledShadow.args = {
  disableShadow: true,
  children: 'Disabled Shadow'
}

// sizes
export const Small: Story = args => <Button {...args} />
Small.args = {
  size: 'sm',
  children: 'Small'
}
export const Medium: Story = args => <Button {...args} />
Medium.args = {
  size: 'md',
  children: 'Medium'
}

export const Large: Story = args => <Button {...args} />
Large.args = {
  size: 'lg',
  children: 'Large'
}
