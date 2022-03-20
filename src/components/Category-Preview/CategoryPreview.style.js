import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    align-self: center;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;
