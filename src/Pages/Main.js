import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import actions from "../Redux/Main/actions";
import LineCharts from "./Components/LineCharts";
import { API_34 } from "../config";
import "antd/dist/antd.css";

export default function Main() {
  const dispatch = useDispatch();

  const { setData } = actions;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(API_34);
      const resJson = await res.json();
      dispatch(setData(resJson.dataset));
    } catch (e) {
      console.log("Main ERROR:", e);
    }
  };

  return (
    <>
      <Container>
        <LineCharts />
      </Container>
    </>
  );
}

const Container = styled.div``;
