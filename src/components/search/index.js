import React from "react";
import * as S from "./styles"

export default function Search() {
  return (
    <S.MainDiv>
      <input placeholder="책 제목을 입력하세요."/>
      <button>검색</button>
    </S.MainDiv>
  );
}
