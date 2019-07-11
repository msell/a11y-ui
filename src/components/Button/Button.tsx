import * as React from "react";
import { Button as Base } from "reakit/Button";
import styled from "@emotion/styled";
import { lighten, darken } from "polished";
import { ITheme } from "../../index";
import { withTheme } from "emotion-theming";

export interface IButtonProps {
  theme: ITheme;
  inverse?: boolean;
  minimal?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = withTheme((props: IButtonProps & typeof Base) => {
  const { button } = props.theme.components;
  const { colors } = button;

  let color = props.inverse ? colors.backgroundColor : colors.fontColor;
  let backgroundColor = props.inverse ? colors.fontColor : colors.backgroundColor;
  if (props.minimal) {
    backgroundColor = "rgba(0, 0, 0, 0)";
    color = props.inverse ? colors.fontColor : colors.backgroundColor;
  }

  const disabledStyle = props.disabled
    ? {
        cursor: "not-allowed",
        opacity: 0.3,
      }
    : {};

  const StyledButton = styled(Base)`
    color: ${color};
    background-color: ${backgroundColor};
    font-size: ${button.fontSize}px;
    cursor: pointer;
    border-radius: 1000px;
    margin: 3px;
    white-space: nowrap;

    transition: background 0.25s ease-out, color 0.25s ease-out;
    &:hover {
      background: ${lighten(0.1, backgroundColor)};
    }
    &:active {
      background: ${darken(0.1, backgroundColor)};
    }
    font-weight: ${button.fontSize || undefined};
    border-style: ${props.minimal ? "none" : undefined};
    ${disabledStyle};
    min-width: 200px;
  `;
  // TODO: make min-width dynamic based on button size
  // TODO: font-family
  return <StyledButton {...props}>{props.children}</StyledButton>;
});
