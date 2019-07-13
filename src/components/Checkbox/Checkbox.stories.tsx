import * as React from "react";
import { Checkbox } from "./Checkbox";
import { storiesOf } from "@storybook/react";
import { v4 } from "uuid";
const Example = () => {
  const [checked, setChecked] = React.useState(true);
  const [id] = React.useState(v4());
  const toggle = () => setChecked(!checked);

  return (
    <>
      <Checkbox id={id} label="Do you have any pets?" checked={checked} onChange={toggle} />
    </>
  );
};
storiesOf("Checkbox", module).add("default", () => <Example />);
