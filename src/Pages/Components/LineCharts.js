import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { API_34 } from "../../config";
import "antd/dist/antd.css";
require("highcharts/modules/export-data")(Highcharts);

export default function LineCharts() {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    return fetch(API_34, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res.dataset));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const options = {
    chart: {
      zoomType: "x",
    },

    title: {
      text: "Line chart",
    },
    // ontouchstart 의 의미?
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? "Click and drag in the plot area to zoom in"
          : "Pinch the chart to zoom in",
    },

    series: [
      {
        name: "EC_slab1",
        data: data.map((item) => item.EC_slab1),
      },
      {
        name: "EC_slab2",
        data: data.map((item) => item.EC_slab2),
      },
      {
        name: "EC_drain_PC",
        data: data.map((item) => item.EC_drain_PC),
      },
      {
        name: "WC_slab1",
        data: data.map((item) => item.WC_slab1),
      },
      {
        name: "WC_slab2",
        data: data.map((item) => item.WC_slab2),
      },
      {
        name: "CO2air",
        data: data.map((item) => item.CO2air),
      },
      {
        name: "HumDef",
        data: data.map((item) => item.HumDef),
      },
      {
        name: "Rhair",
        data: data.map((item) => item.Rhair),
      },
      {
        name: "Tair",
        data: data.map((item) => item.Tair),
      },
      {
        name: "EnScr",
        data: data.map((item) => item.EnScr),
      },
      {
        name: "BlackScr",
        data: data.map((item) => item.BlackScr),
      },
      {
        name: "PipeGrow",
        data: data.map((item) => item.PipeGrow),
      },
      {
        name: "PipeLow",
        data: data.map((item) => item.PipeLow),
      },
      {
        name: "Iglob",
        data: data.map((item) => item.Iglob),
      },
      {
        name: "RadSum",
        data: data.map((item) => item.RadSum),
      },
      {
        name: "Tout",
        data: data.map((item) => item.Tout),
      },
    ],

    xAxis: {
      categories: data.map((item) => item.time),
    },
  };

  const chart = useRef();

  const exportCSV = () => {
    if (chart && chart.current && chart.current.chart) {
      chart.current.chart.downloadCSV();
    }
  };

  return (
    <>
      <Container>
        <TestBtn onClick={exportCSV}>CSV 파일로 다운 받기</TestBtn>
        <HighchartsReact
          ref={chart}
          highcharts={Highcharts}
          constructorType={"chart"}
          options={options}
        />
      </Container>
    </>
  );
}

const Container = styled.div``;

const TestBtn = styled.button``;

// {
//   "time": "2020.5.3 0:05",
//   "EC_slab1": 5.436839,
//   "EC_slab2": 4.924302,
//   "EC_drain_PC": 6.33,
//   "WC_slab1": 67.476,
//   "WC_slab2": 56.932,
//   "CO2air": 563.9999996,
//   "HumDef": 1.600000003,
//   "Rhair": 90.5,
//   "Tair": 19.6,
//   "EnScr": 0,
//   "BlackScr": 95,
//   "PipeGrow": 36.50000001,
//   "PipeLow": 0,
//   "Iglob": 0,
//   "RadSum": 0.000217561,
//   "Tout": 9.80000002
// }
