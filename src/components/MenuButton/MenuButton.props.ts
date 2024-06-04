import { ReactElement } from "react";
import { ColorTypes } from "../../utils/color/color";

export interface MenuButtonProps {
    text: string;
    bodyText?: any;
    color?: string;
    noOpacity?: boolean;
    icon?: ReactElement;
    width?: string | number;
    justifyContent?: 'space-between';
    getText?: (text: string) => void;
}