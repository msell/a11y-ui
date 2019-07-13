import * as React from "react";
import { Checkbox as Base, CheckboxHTMLProps, useCheckboxState } from "reakit/Checkbox";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import { ITheme } from "../../index";
import { withTheme } from "emotion-theming";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/with-the-api/other/tree-shaking
// using deep import here because tree shaking does not seem to be working
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
library.add(faCheck);

export interface ICheckboxProps {
  theme: ITheme;
  checked: boolean;
  label?: string;
}

const Icon = ({ theme, ...props }: any): JSX.Element => (
  <FontAwesomeIcon icon="check" color={props.color || theme.palette.textSecondary} />
);

export const Checkbox = withTheme((props: CheckboxHTMLProps & ICheckboxProps) => {
  const checkbox = useCheckboxState({ state: props.checked });
  const StyledBox = styled.div`
    display: flex;
    width: 1rem;
    height: 1rem;
    border: 3px solid ${props.theme.palette.ctaPrimary};
    background: ${checkbox.state === true ? props.theme.palette.ctaPrimary : undefined};
    border-radius: 5px;
    padding: 10px;
    transition: all 150ms;
    justify-content: center;
    align-items: center;
  `;
  const Container = styled.div`
    display: flex;
  `;

  const Label = styled.label`
    font-size: 24px;
    align-self: center;
    margin-left: 6px;
  `;
  return (
    <Container>
      <Base {...checkbox} {...props} as={StyledBox}>
        {checkbox.state && <Icon theme={props.theme} />}
      </Base>
      {props.label && (
        <Label onClick={() => checkbox.setState(!checkbox.state)} htmlFor={props.id}>
          {props.label}
        </Label>
      )}
    </Container>
  );
});
