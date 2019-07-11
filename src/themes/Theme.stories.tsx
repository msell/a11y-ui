import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Palette } from "./styleguide/Palette";

storiesOf("Themes", module).add("default", () => <Palette />);
