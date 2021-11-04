import styled from "styled-components";

const NotFoundWrapper = styled.div`
  padding: 0 20%;

  > p {
    margin-top: 200px;
    font-size: 60px;
    font-weight: 800;
    text-align: center;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <p>404 NOTFOUND! :(</p>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;
