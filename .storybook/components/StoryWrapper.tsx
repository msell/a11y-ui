import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
    border: solid 1px goldenrod;
    padding: 15px;
    margin: 15px;
`
export const StoryWrapper = (props: any) => (
    <StyledWrapper>
        <ThemeProvider theme={props.theme}>
        <div>{props.theme.name} Theme</div>
        <div>{props.children}</div>
        </ThemeProvider>
    </StyledWrapper>
);