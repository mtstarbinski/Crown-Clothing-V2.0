import styled from "styled-components";
import { InvertedButton } from "../Button/Button.style.js";

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${(props) => props.productImage});
`;

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const ProductButton = styled(InvertedButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  &:hover {
    ${ProductButton} {
      opacity: 0.85;
      display: flex;
    }

    ${Image} {
      opacity: 0.8;
    }
  }
`;
