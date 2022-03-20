import React from "react";
import { DirectoryCardContainer, BackgroundImage, Content, Title, Subtitle } from "./DirectoryCard.style";
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size }) => {
  const navigate = useNavigate();

  return (
    <DirectoryCardContainer size={size} onClick={() => navigate(linkUrl)}>
      <BackgroundImage directoryImage={imageUrl}/>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </DirectoryCardContainer>
  );
};

export default MenuItem;
