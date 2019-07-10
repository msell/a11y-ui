import * as React from "react";
import Button from "./Button";
import { text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

storiesOf("Button", module).add("default", () => (
  <Button minimal={boolean("minimal", false)} inverse={boolean("inverse", false)} disabled={boolean("disabled", false)}>
    {text("Text", "Submit")}
  </Button>
));
