import { ReactNode } from "react";
/**
 * Props for the visualize component.
 */
type visualizeProps = {
    showAlert?: boolean;
    children?: ReactNode;
    componentName?: string;
    width?: string;
    color?: string;
    border?: 'dashed' | 'solid';
    invert?: boolean;
    validPorts?: number[];
};
export declare const VisualizeComponent: ({ border, showAlert, children, width, color, invert, validPorts }: visualizeProps) => any;
export default VisualizeComponent;
