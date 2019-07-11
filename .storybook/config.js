import React from "react";
import { configure } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { eggplant, black } from "@Themes/index";
import { Global } from "@emotion/core";
import { StoryWrapper } from "./components/StoryWrapper";
const GlobalStyle = () => <Global styles={{
  body: {
    fontFamily: "system-ui",
    boxSizing: "border-box",
    fontWeight: 400
  }
}} />

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);

const withThemes = (cb) => (
  <React.Fragment>
  <StoryWrapper theme={eggplant}>
    {cb()}
    </StoryWrapper>

  <StoryWrapper theme={black}>
    {cb()}
    </StoryWrapper>
  </React.Fragment>
);

addDecorator(withThemes);
addDecorator(withGlobal);
configure(loadStories, module);