import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
    padding: 15px;
    margin: 15px;
`

const Name = styled.span`
    background: goldenrod;
    transform: skew(-4deg);
    color: #222;
    font-weight: 500;
    border-radius: 20px 20px 0 0;
    padding: 15px;
    font-size: 1.5rem;
    display: inline-block;
`

const Break = styled.hr`
    border-top: 2px dashed goldenrod;
    margin-top: 0;
    position: relative;
    left: -1px;
`
export const StoryWrapper = (props: any) => (
    <StyledWrapper>
        <ThemeProvider theme={props.theme}>
        <Name>{props.theme.name} Theme</Name>
        <Break />
        <div>{props.children}</div>
        </ThemeProvider>
    </StyledWrapper>
);