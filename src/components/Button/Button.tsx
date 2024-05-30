import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Button.props";
import { colors } from "../../constant/color/color";

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, children, backgroundColor, color, width, height,borderColor, style } = props;
  
  return (
    <MuiButton
      variant={variant ? variant : undefined}
      style={{
        backgroundColor: backgroundColor ? colors[backgroundColor] : undefined,
        color: color ? colors[color] : undefined,
        borderRadius: 12,
        width: width ? width : 144,
        height: height? height : 48,
        borderColor: borderColor ? colors[borderColor] : undefined,
        ...style
      }}
    >
      {children}
    </MuiButton>
  );
};
