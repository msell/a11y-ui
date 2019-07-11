import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Palette } from "./styleguide/Palette";
import { eggplant, black } from "./";
storiesOf("Themes", module).add("palettes", () => (
  <div
    style={{
      display: "flex",
      marginBottom: "10px",
      justifyContent: "space-around",
    }}
  >
    <Palette theme={eggplant} />
    <Palette theme={black} />
  </div>
));
