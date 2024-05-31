import styled from "styled-components";
import { CardProps, ImageProps, RowProps, TextProps } from "./ScreenRoot.props";
import { pixelsToRem } from "../../utils/pixelsToRem/pixelsToRem";
import { colors } from "../../utils/color/color";

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
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width && pixelsToRem(width)};
  height: ${({ height }) => pixelsToRem(height)};
`;

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color && colors[color]};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  opacity: ${({ opacity }) => opacity};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => pixelsToRem(width)};
`;

export const Card = styled.div<CardProps>`
  width: ${({ width }) => pixelsToRem(width) || "100%"};
  height: ${({ height }) => pixelsToRem(height)};
  padding-left: ${({ paddingLeft }) => pixelsToRem(paddingLeft)};
  padding-right: ${({ paddingRight }) => pixelsToRem(paddingRight)};
  padding-top: ${({ paddingTop }) => pixelsToRem(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => pixelsToRem(paddingBottom)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && colors[backgroundColor]};
  border-radius: ${({
    borderTopLeftRadius = 20,
    borderTopRightRadius = 20,
    borderBottomRightRadius = 20,
    borderBottomLeftRadius = 20,
  }) =>
    `${borderTopLeftRadius}px ${borderTopRightRadius}px ${borderBottomRightRadius}px ${borderBottomLeftRadius}px`};
  box-shadow: ${({ noShadow }) =>
    noShadow ? "none" : "0px 4px 8px rgba(50, 50, 50, 0.5)"};
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  border: ${({ border }) => border || "none"};
  border-color: ${({ borderColor }) => borderColor || "transparent"};
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({
    borderTopLeftRadius = 20,
    borderTopRightRadius = 20,
    borderBottomRightRadius = 20,
    borderBottomLeftRadius = 20,
  }) =>
    `${borderTopLeftRadius}px ${borderTopRightRadius}px ${borderBottomRightRadius}px ${borderBottomLeftRadius}px`};
`;


export const Conteiner = styled.div<CardProps>`
  width: ${({ width }) => pixelsToRem(width)};
  height: ${({ height }) => pixelsToRem(height)};
`;
