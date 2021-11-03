import React from "react";
import * as S from "./styles";
import image from "../../asset/image.png";

export default function Information() {
  return (
    <S.MainDiv>
      <div className="cover">
        <img src={image} alt="" />
      </div>
      <div className="information">
        <div>
          <div className="detail">제목</div>
          <div className="contents">아무것도 없는 책</div>
        </div>
        <div>
          <div className="detail">저자</div>
          <div className="contents">김팔복</div>
        </div>
        <div>
          <div className="detail">가격</div>
          <div className="contents">12000원</div>
        </div>
        <div>
          <div className="detail">설명</div>
          <div className="contents">ㅐㅓ댜운파ㅓㅜ대ㅑㅍㅇ랴ㅐㅓsakfjalksdjfaklsdjfklajsdklfjaklsdfjkasdjflkasdjflㅁㄴ론어ㅏ로ㅜㅏㅓㄴ오럼농럼노아ㅓㄹ몬아ㅓ로마ㅓㄴ올마ㅣㅘㅓㅁㄴ오리ㅏkadsjflkjsadlkfjaslkdfjlㅡㅐ쟏릉니ㅏㅡㅑㅐㄷㄹ</div>
        </div>
      </div>
    </S.MainDiv>
  );
}
