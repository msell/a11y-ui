import * as React from "react";
import { Checkbox } from "./Checkbox";
import { storiesOf } from "@storybook/react";

const Example = () => {
  const [checked, setChecked] = React.useState(true);
  const toggle = () => setChecked(!checked);
  return (
    <>
      <label htmlFor="cool">Are you cool?</label>
      <Checkbox id="cool" checked={checked} onChange={toggle} />
    </>
  );
};
storiesOf("Checkbox", module).add("default", () => <Example />);
