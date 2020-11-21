import React, { useEffect, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { Button } from "antd";
import styled from "styled-components";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

export default function LineCharts() {
  const { data } = useSelector(({ MainReducer: { data } }) => ({ data }));

  useEffect(() => {
    console.log("select", data);
  }, [data]);

  const options = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: "Line chart",
      align: "left",
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? "Click and drag in the plot area to zoom in"
          : "Pinch the chart to zoom in",
      align: "left",
    },
    xAxis: {
      categories: data.map((item) => item.time),
    },
    tooltip: {
      shared: true,
    },
    exporting: {
      filename: "chart",
    },
    //series 배열의 코드를 효율적으로 만들 수 있는 방법을 연구해 velog에 업로드하겠습니다.
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
        <HighchartsReact
          ref={chart}
          highcharts={Highcharts}
          constructorType={"chart"}
          options={options}
        />
        <Btn type="primary" onClick={exportCSV}>
          바로 CSV 파일로 다운 받기
        </Btn>
      </Container>
    </>
  );
}

const Container = styled.div``;

const Btn = styled(Button)`
  margin: 30px;
  position: absolute;
  right: 0;
`;
