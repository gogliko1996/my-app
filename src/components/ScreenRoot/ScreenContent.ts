import styled from "styled-components";
import { CardProps, RowProps, TextProps } from "./ScreenRoot.props";
import { pixelsToRem } from "../../utils/pixelsToRem/pixelsToRem";
import { colors } from "../../constant/color/color";

export const ScreenContent = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width && pixelsToRem(width)};
  height: ${({ height }) => pixelsToRem(height)};
`;

export const Text = styled.p<TextProps>`
  color: ${({ color }) => (color ? colors[color] : color)};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  opacity: ${({ opacity }) => opacity};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => pixelsToRem(width) };
`;

export const Card = styled.div<CardProps>`
  width: ${({ width }) => pixelsToRem(width) || '100%'};
  height: ${({ height }) => pixelsToRem(height)};
  padding-left: ${({ paddingLeft }) => pixelsToRem(paddingLeft)};
  padding-right: ${({ paddingRight }) => pixelsToRem(paddingRight)};
  padding-top: ${({ paddingTop }) => pixelsToRem(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => pixelsToRem(paddingBottom)};
  background-color: ${({ backgroundColor }) => backgroundColor ? colors[backgroundColor] : backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : '20px'};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(50, 50, 50, 0.5);
`;
export const Conteiner = styled.div<CardProps>`
  width: ${({ width }) => pixelsToRem(width)};
  height: ${({ height }) => pixelsToRem(height)};
`;
