import React, { useState } from "react";
import * as S from "./styles";
import { bookSearch } from "../../lib/api";
import Information from "../information";

export default function Search() {
  const [book, setBook] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  async function bookSearchHttpHandler() {
    const params = {
      query: text,
      sort: "accuracy",
      page: 1,
      size: 1,
    };
    const { data } = await bookSearch(params);
    setBook(data.documents[0]);
    console.log(book);
  }

  return (
    <>
      <S.MainDiv>
        <input
          type="search"
          placeholder="책 제목을 입력하세요."
          name="query"
          onChange={onTextChange}
          value={text}
        />
        <button onClick={bookSearchHttpHandler}>검색</button>
      </S.MainDiv>
      <Information book={book} />
    </>
  );
}
