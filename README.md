# VisualizeComponent

`VisualizeComponent` is a React component that helps visualize the mounting of a component in development mode. It can be used to wrap any component and will show an alert toast when the component is mounted. This can be useful for debugging and understanding the lifecycle of your components.

## Props

- `showAlert` (optional): A boolean that determines whether to show the alert toast when the component is mounted. Default is `false`.
- `children` (optional): The child components to be rendered within this component.
- `width` (optional): The width of the outline that visualizes the component. Default is `'10px'`.
- `color` (optional): The color of the outline that visualizes the component. Default is `'red'`.
- `border` (optional): The style of the border that visualizes the component. Can be either `'dashed'` or `'solid'`. Default is `'dashed'`.
- `invert` (optional): A boolean that determines the color scheme of the toast alert. If `true`, the toast alert will have a light theme. If `false`, it will have a dark theme. Default is `false`.
- `validPorts` (optional): An array of strings representing the ports that are considered as development ports. If the application is running on one of these ports, it is considered to be in development mode. Default is `['3000', '3001', '9001', '9000', '8000', '8888']` _POC_.

## Usage

Pick your poison

### `npm install @remcostoeten/visualize-component-debugger`

### `pnpm install @remcostoeten/visualize-component-debugger`

### `yarn add @remcostoeten/visualize-component-debugger`

### `bun install @remcostoeten/visualize-component-debugger`

```jsx
import VisualizeComponent from "./VisualizeComponent";

function MyComponent() {
  return (
    <VisualizeComponent showAlert>
      <div>My Component</div>
    </VisualizeComponent>
  );
}

// or

function OtherComp() {
  return (
    <VisualizeComponent border="dashed" color="yellow" width="1px" invert>
      <h2>v hard to debug</h2>
    </VisualizeComponent>
  );
}
```

> :warning: **Experimental**: This component is currently in an experimental stage. While it's functional and can be used, please be aware that it might contain bugs and the API might change in future versions.
> ![image](https://github.com/remcostoeten/Visualize-react-components-debugger/assets/57683378/9d95462a-0200-4c41-ba52-8054f413a817)
