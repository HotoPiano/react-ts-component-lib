# react-ts-component-lib

## import usage (WIP, actual components are not fully styled yet)

Extremely easy to use component library, see [storybook](https://react-ts-component-lib.now.sh/)

### `yarn add react-ts-component-lib`

<br/>

Components are functional so that autocomplete for all props are available even if typescript is not used.

Example:

```
import { Button } from "react-ts-component-lib

<Button variant="primary">My primary button</Button>
```

<br/>

## Developer usage

Easy setup for a complete component library across react/ts projects. For now just a really easy to use template, components can be styled with less.

### `yarn start-storybook`

Runs the storybook locally, updates on save (webpack).

### `yarn build-storybook`

Generates "storybook-static" folder, prepared to publish as storybook page.

### `yarn build`

Distributes to "lib" folder (rollup), prepared to publish as your own package.
