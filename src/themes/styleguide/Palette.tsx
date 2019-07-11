import * as React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const Row = styled.div`
  margin: 5px;
  text-align: center;
`;

export const Palette = withTheme((props: any) => {
  const { palette } = props.theme;

  return (
    <Container>
      {Object.entries(palette).map(([key, value]: any) => (
        <Row key={key}>
          {key}

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              marginTop: "3px",
              backgroundColor: value,
            }}
          />
        </Row>
      ))}
    </Container>
  );
});
