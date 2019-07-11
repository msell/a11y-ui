import { configure } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { eggplant, black } from "@Themes/index";
import { withThemesProvider } from "storybook-addon-emotion-theme";

addDecorator(withThemesProvider([eggplant, black]))
addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);