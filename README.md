# Projex Web Components

Projex Web Components is a library that uses Lit to create reusable Web Components that can be used in Angular and React applications.

## Installation

To install the library, you can use npm or yarn:

npm install projex-web-components

# or

yarn add projex-web-components

## Usage in Angular

To use the components in an Angular application, follow these steps:

1. Import [`CUSTOM_ELEMENTS_SCHEMA`]() and the browser module in your `app.module.ts`.
2. Import the package `projex-web-components/dist/index.js`.
3. Make sure to add [`CUSTOM_ELEMENTS_SCHEMA`]() in the module schemas.

```typescript

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import 'projex-web-components/dist/index.js';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class AppModule {}
```

## Usage in React

To use the components in a React application, follow these steps:

1. Import the package `projex-web-components/dist/index.js` in your main file (e.g., `index.js` or `App.js`).

```typescript

import React from 'react';
import ReactDOM from 'react-dom';
import 'projex-web-components/dist/index.js';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

2. Use the component in your React application.

```typescript
function App() {
  return (
    <div className="App">
      <my-component></my-component>
    </div>
  );
}
```

export default App;

## Contribution

If you want to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a Pull Request.
