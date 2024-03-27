import { ReactNode } from "react";
type visualizeProps = {
    showAlert?: boolean;
    children?: ReactNode;
    componentName?: string;
    width?: string;
    color?: string;
    border?: 'dashed' | 'solid';
    invert?: boolean;
    validPorts?: string[];
};
declare const VisualizeComponent: ({ border, showAlert, children, width, color, invert, validPorts }: visualizeProps) => import("react/jsx-runtime").JSX.Element;
export default VisualizeComponent;
