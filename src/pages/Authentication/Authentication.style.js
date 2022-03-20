import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    margin: 30px auto;
    row-gap: 40px;

    @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    width: unset;
    justify-content: center;
  }
`;