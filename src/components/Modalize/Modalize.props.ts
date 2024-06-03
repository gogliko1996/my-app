import { CSSProperties, ReactElement } from "react";


export interface ModalizeProps {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactElement;
    style?: CSSProperties;
    
}