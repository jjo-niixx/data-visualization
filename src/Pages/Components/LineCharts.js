import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { API_34 } from "../../config";
import "antd/dist/antd.css";

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
    title: {
      text: "Line chart",
    },
    series: [
      {
        name: "EC_slab",
        data: data.map((item) => (item.EC_slab1 + item.EC_slab2) / 2),
      },
      {
        name: "WC_slab",
        data: data.map((item) => (item.WC_slab1 + item.WC_slab2) / 2),
      },
      {
        name: "CO2air",
        data: data.map((item) => item.CO2air),
      },
    ],
    xAxis: {
      categories: data.map((item) => item.time),
    },
  };

  return (
    <>
      <Container>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Container>
    </>
  );
}

const Container = styled.div``;

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
