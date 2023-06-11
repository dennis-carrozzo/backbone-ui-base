# Backbone UI base

This is a collection of reusable React components built with TypeScript. It provides a set of UI components that can be easily integrated into your React applications.

It was built with the intent to solve a challenge from devchallenges.io frontend developer path.

<div align="center" style='margin-block:70px'>
  <h3>
    <a href="https://backbone-ui-base.vercel.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/dennis-carrozzo/backbone-ui-base">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
      Challenge
    </a>
  </h3>
</div>

## Installation

You can install the library using npm or yarn:

```bash
npm install @backbone-ui/base
```

or

```bash
yarn add @backbone-ui/base
```

## Usage

To use the components from this library, import them into your React application and use them as follows:

```jsx
import React from 'react'
import { Button } from '@backbone-ui/base'

function App() {
  return (
    <div>
      <Button variant='outlined' onClick={() => console.log('Button clicked!')}>
        Click me
      </Button>
    </div>
  )
}

export default App
```

## Available Components

### Button

A simple button component.

Props:

- `variant`: contained,outlined and text
- `color`: default, primary,secondary and danger
- `size`: small, medium and large
- `disableShadow`: disable box-shadow.
- `StartIcon`: Icon to prepend to button text.
- `EndIcon`: Icon to append to button text.

```jsx
import { Button } from '@backbone-ui/base'

;<Button onClick={() => console.log('Button clicked!')}>Click me</Button>
```

## Contributing

Contributions are welcome! If you would like to contribute to this library, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes.
4. Write tests to cover your changes.
5. Run the tests to make sure everything is passing.
6. Commit your changes and push them to your fork.
7. Submit a pull request describing your changes.

Please ensure that your code follows the existing coding style and conventions. Also, make sure to update the documentation and add tests for any new components or features.

## License

This library is released under the [MIT License](LICENSE).
