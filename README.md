# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Autocomplete Component

This repository contains a customizable Autocomplete component built with React and TypeScript. It supports features like search highlighting, single and multiple selection, and optional use of portals for rendering the dropdown.

## Features

- **Search Highlighting**: Highlights search terms within the options.
- **Single and Multiple Selection**: Supports both single and multiple selections of options.
- **Portal Support**: Optionally renders the dropdown using a portal to avoid overflow issues.

## Installation

To use the Autocomplete component in your project, you can copy the relevant files and include them in your React project. Ensure you have the required dependencies installed:

```bash
npm install react react-dom react-icons underscore
# or
yarn add react react-dom react-icons underscore
```

## Usage

### Props

- **options**: Array of options to display.
- **usePortal**: Boolean indicating whether to render the dropdown using a portal.
- **getOptionLabel**: Function to get the label of an option.
- **renderOption**: Function to render a custom option component.
- **isMultiple**: Boolean indicating whether multiple selections are allowed. If true, the value prop must be an array
- **value**: The current value of the autocomplete. If isMultiple is true, value should be an array of selected options.
- **onChange**: Function to handle changes to the selected value(s).

```javascript
import React from "react";
import AutoComplete from "./AutoComplete";

const options = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
];

const App = () => {
  const [value, setValue] = React.useState();

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <AutoComplete
        options={options}
        getOptionLabel={(option) => option.label}
        value={value}
        onChange={setValue}
        isMultiple={false}
      />
    </div>
  );
};

export default App;
```
