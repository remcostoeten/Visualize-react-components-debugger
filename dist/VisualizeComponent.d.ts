import { ReactNode } from "react";
type visualizeProps = {
    showAlert?: boolean;
    children?: ReactNode;
    componentName?: string;
    width?: string;
    color?: string;
    border?: 'dashed' | 'solid';
    invert?: boolean;
};
declare const VisualizeComponent: ({ border, showAlert, children, width, color, invert }: visualizeProps) => import("react/jsx-runtime").JSX.Element;
export default VisualizeComponent;
