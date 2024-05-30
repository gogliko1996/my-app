import type { ReactElement } from "react"
import type { ColorTypes } from "../../constant/color/color"
import { CSSProperties } from "styled-components";

export interface ButtonProps {
    variant?: 'text' | 'contained' | 'outlined';
    children?: ReactElement;
    backgroundColor?: ColorTypes;
    color?: ColorTypes;
    width?: number | string;
    height?: number | string;
    borderColor?: ColorTypes;
    style?: CSSProperties
}