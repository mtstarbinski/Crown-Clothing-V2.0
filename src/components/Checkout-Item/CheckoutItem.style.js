import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 24%;

  @media screen and (max-width: 1700px) {
    width: 23%;
  }

  @media screen and (max-width: 400px) {
    width: 22%;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  padding-left: 2.5%;

  @media screen and (max-width: 1700px) {
    padding-left: 3%;
  }

  @media screen and (max-width: 400px) {
    padding-left: 4%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
  align-self: center;
`;

export const Price = styled(BaseSpan)`
  padding-left: 3%;

  @media screen and (max-width: 1700px) {
    padding-left: 4%;
  }

  @media screen and (max-width: 400px) {
    padding-left: 5%;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 2%;
  cursor: pointer;
`;