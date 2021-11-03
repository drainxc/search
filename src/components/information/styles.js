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
      object-fit: cover;
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
