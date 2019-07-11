import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Palette } from "./styleguide/Palette";

storiesOf("Themes", module).add("palettes", () => (
  <div
    style={{
      display: "flex",
      marginBottom: "10px",
      justifyContent: "space-around",
    }}
  >
    <Palette />
  </div>
));
