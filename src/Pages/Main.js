import React from "react";
import styled from "styled-components";
import LineCharts from "./Components/LineCharts";
import "antd/dist/antd.css";

export default function Main() {
  return (
    <>
      <Container>
        <LineCharts />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 20px;
`;
