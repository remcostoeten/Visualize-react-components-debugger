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
export declare const VisualizeComponent: ({ border, showAlert, children, width, color, invert }: visualizeProps) => any;
export default VisualizeComponent;
