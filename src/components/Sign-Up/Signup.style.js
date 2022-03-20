import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 500px) {
    width: 300px;

    button {
      width: 100%;
    }
  }
`;