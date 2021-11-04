import React, { useState } from "react";
import { bookSearch } from "../../lib/api";
import Information from "../information";
import NotFoundPage from "../NotFoundPage";
import styled from "styled-components";
const MainDiv = styled.div`
  padding: 0% 20%;
  margin-top: 7%;
  & input {
    width: 80%;
    border: #c4c4c4 2px solid;
    padding: 15px;
    font-size: 15px;
    border-radius: 4px;
    margin-right: 10px;
    font-weight: bold;
  }
  & input::placeholder {
    color: #afafaf;
  }
  & button {
    cursor: pointer;
    background-color: #0090ff;
    color: white;
    border: none;
    padding: 15px;
    font-size: 15px;
    border-radius: 4px;
    font-weight: bold;
  }
`;

export default function Search() {
  const [book, setBook] = useState([]);
  const [text, setText] = useState("");
  const [reset, setReset] = useState(false);

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
    setReset(true);
  }

  return (
    <>
      <MainDiv>
        <input
          type="search"
          placeholder="책 제목을 입력하세요."
          name="query"
          onChange={onTextChange}
          value={text}
        />
        <button onClick={bookSearchHttpHandler}>검색</button>
      </MainDiv>
      {book?<Information book={book} reset={reset} />:<NotFoundPage/>}
    </>
  );
}
