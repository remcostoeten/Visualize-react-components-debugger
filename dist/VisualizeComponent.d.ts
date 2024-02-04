import { ReactNode } from "react";
type visualizeProps = {
    showAlert?: boolean;
    children?: ReactNode;
    componentName?: string;
    width?: string;
    color?: string;
    borders?: 'dashed' | 'solid';
    invert?: boolean;
};
export declare const VisualizeComponent: ({ borders, showAlert, children, width, color, invert }: visualizeProps) => any;
export default VisualizeComponent;
