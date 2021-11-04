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
    }
  }
  & .information {
    margin: 4.5% 0% 0% 5%;
    padding: 1%;
    width: 60%;
    & div {
      width: 100%;
      height: 25%;
      & .detail {
        color: #afafaf;
        font-weight: bold;
      }
      & .contents {
        margin-top: 5px;
        font-size: large;
        font-weight: 500;
      }
    }
  }
`;
