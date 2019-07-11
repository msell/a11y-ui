import * as React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border: solid gainsboro 2px;
  margin: 5px;
`;

const Row = styled.div`
  margin: 5px;
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
  background-color: #808080;
  color: #fff;
`;
export const Palette = withTheme((props: any) => {
  const { palette } = props.theme;

  return (
    <Container>
      <Header>
        <h1>{props.theme.name}</h1>
      </Header>
      {Object.entries(palette).map(([key, value]: any) => (
        <Row key={key}>
          <div style={{ textAlign: "center" }}>{key}</div>

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              marginTop: "3px",
              backgroundColor: value,
              border: "1px solid gainsboro",
            }}
          />
        </Row>
      ))}
    </Container>
  );
});
