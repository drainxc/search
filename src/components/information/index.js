import React from "react";
import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  padding: 0% 20%;
  & .cover {
    width: 40%;
    margin-top: 5%;
    & img {
      width: 100%;
      height: 400px;
      border: 1px black solid;
    }
  }
  & .information {
    margin: 5% 0% 0% 5%;
    padding: 1%;
    width: 60%;
    & div {
      width: 100%;
      height: 25%;
      font-weight: bold;
      & .detail {
        color: #afafaf;
      }
      & .contents {
        font-size: large;
      }
    }
  }
`;


export default function Information({ book, reset }) {
  return (
    <MainDiv>
      {reset ? (
        <>
          <div className="cover">
            <img src={book.thumbnail} alt="" />
          </div>
          <div className="information">
            <div>
              <div className="detail">제목</div>
              <div className="contents">{book.title}</div>
            </div>
            <div>
              <div className="detail">저자</div>
              <div className="contents">{book.authors}</div>
            </div>
            <div>
              <div className="detail">가격</div>
              <div className="contents">{book.price}원</div>
            </div>
            <div>
              <div className="detail">설명</div>
              <div className="contents">{book.contents}</div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </MainDiv>
  );
}
