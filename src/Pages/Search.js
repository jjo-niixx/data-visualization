import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

export default function Search() {
  const { data } = useSelector(({ MainReducer: { data } }) => ({ data }));

  const [input, setInput] = useState("");

  const { Search } = Input;

  const onSearch = () => {
    if (!data) return;
    //인풋 state와 키 값이 일치하는 filter처리해서 내가 원하는 데이터 그래프만 보이게 할 예정
  };

  return (
    <>
      <Container>
        <Search
          placeholder="데이터를 검색해주세요"
          allowClear
          onSearch={onSearch}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "250px", margin: "0 10px" }}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 30px;
`;
