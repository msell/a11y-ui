import * as React from "react";
import { Checkbox } from "./Checkbox";
import { storiesOf } from "@storybook/react";
import { useCheckboxGroup, toggleSelected, ICheckbox, ICheckboxGroup } from "./useCheckboxGroup";

const createCheckboxes = (state: ICheckboxGroup, dispatch: any): JSX.Element => (
  <div>
    {state.checkboxes.map((x: ICheckbox) => (
      <Checkbox
        key={x.id}
        checked={x.checked}
        onChange={(): void => dispatch(toggleSelected(x.id))}
        label={x.name}
        style={{ marginBottom: "5px" }}
      />
    ))}
  </div>
);

const MultipleCheckboxes = (): JSX.Element => {
  const [state, dispatch] = useCheckboxGroup({
    checkboxes: [
      {
        id: 1,
        name: "Foo",
        checked: true,
      },
      {
        id: 2,
        name: "Bar",
        checked: false,
      },
      {
        id: 3,
        name: "Baz",
        checked: false,
      },
    ],
  });

  return createCheckboxes(state, dispatch);
};

const WithExclusiveOption = (): JSX.Element => {
  const [state, dispatch] = useCheckboxGroup({
    checkboxes: [
      {
        id: 1,
        name: "Any",
        checked: true,
      },
      {
        id: 2,
        name: "Foo",
        checked: false,
      },
      {
        id: 3,
        name: "Bar",
        checked: false,
      },
      {
        id: 4,
        name: "Baz",
        checked: false,
      },
    ],
    exclusiveId: 1,
  });

  return createCheckboxes(state, dispatch);
};

const Example = () => {
  const [checked, setChecked] = React.useState(true);

  const toggle = () => setChecked(!checked);

  return (
    <>
      <Checkbox label="Do you have children?" checked={checked} onChange={toggle} />
    </>
  );
};
storiesOf("Checkbox", module)
  .add("default", () => <Example />)
  .add("multiple checkboxes", () => <MultipleCheckboxes />)
  .add("multiple checkboxes with exclusive option", () => <WithExclusiveOption />);
