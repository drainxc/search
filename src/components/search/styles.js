import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    
    margin-top: 10%;
    & input {
        width: 40%;
        border: #A8A8A8 2px solid;
        padding: 15px;
        font-size: 15px;
        border-radius: 4px;
        margin-right: 10px;
        font-weight: bold;
    }
    & input::placeholder {
        color:  #A8A8A8;
    }
    & button {
        background-color: #0090FF;
        color: white;
        border: none;
        padding: 15px;
        font-size: 15px;
        border-radius: 4px;
        font-weight: bold;
    }
`