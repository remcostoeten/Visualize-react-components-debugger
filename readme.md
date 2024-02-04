# VisualizeComponent

`VisualizeComponent` is a React component that helps visualize the mounting of a component in development mode. It can be used to wrap any component and will show an alert toast when the component is mounted. This can be useful for debugging and understanding the lifecycle of your components.

## Props

- `showAlert` (optional): A boolean that determines whether to show the alert toast when the component is mounted. Default is `false`.
- `children` (optional): The child components to be rendered within this component.
- `componentName` (optional): The name of the component. This is not used in the current version of the component.
- `width` (optional): The width of the outline that visualizes the component. Default is `'10px'`.
- `color` (optional): The color of the outline that visualizes the component. Default is `'red'`.
- `border` (optional): The style of the border that visualizes the component. Can be either `'dashed'` or `'solid'`. Default is `'dashed'`.
- `invert` (optional): A boolean that determines the color scheme of the toast alert. If `true`, the toast alert will have a light theme. If `false`, it will have a dark theme. Default is `false`.

## Usage

```jsx
import VisualizeComponent from './VisualizeComponent';

function MyComponent() {
  return (
    <VisualizeComponent showAlert>
      <div>My Component</div>
    </VisualizeComponent>
  );
}```

or
```jsx
function OtherComp() {
    return (
        <VisualizeComponent border='dashed' color='yellow' width='1px' invert>
            <h2>v hard to debug</h2>
        </VisualizeComponent>
    );
}
```