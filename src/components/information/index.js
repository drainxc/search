import React from "react";
import * as S from "./styles";

export default function Information({ book, reset }) {
  return (
    <S.MainDiv>
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
              <div className="contents">{book.authors[0]}</div>
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
    </S.MainDiv>
  );
}
