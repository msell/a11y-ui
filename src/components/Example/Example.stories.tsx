import * as React from "react";
import { Example } from "./Example";

import { storiesOf } from "@storybook/react";
storiesOf("Example", module).add("default", () => <Example text="hello">Custom</Example>);
