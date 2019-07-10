import * as React from "react";

export interface Props {
  text: string;
}

export const Example = (props: any): JSX.Element => {
  const { text } = props;
  return <div style={{ color: "red" }}>Hello {text}</div>;
};
