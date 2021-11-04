import styled from "styled-components";

export const MainDiv = styled.div`
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