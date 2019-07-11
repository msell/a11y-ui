import * as React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  border: solid gainsboro 2px;
`;

const Row = styled.div`
  margin: 5px;
`;

export const Palette = withTheme((props: any) => {
  const { palette } = props.theme;

  return (
    <Container>
      {Object.entries(palette).map(([key, value]: any) => (
        <Row key={key}>
          <div>{key}</div>

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              backgroundColor: value,
            }}
          />
        </Row>
      ))}
    </Container>
  );
});
