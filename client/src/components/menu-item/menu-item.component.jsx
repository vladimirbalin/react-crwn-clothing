import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover{
    cursor: pointer;
  }
`;
const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;    
  background-position: center;  
  background-size: cover;
  ${MenuItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: absolute;
  ${MenuItemContainer}:hover & {background-color: rgba(255, 255, 255, 0.9);}
`;
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const MenuItem = ({ title, imageUrl, size='', linkUrl, history, match }) => {
  const clickHandler = () => history.push(`${match.url}${linkUrl}`);
  return (
    <MenuItemContainer className={size}
        onClick={clickHandler}>
      <BackgroundImage style={{
        backgroundImage: `url(${imageUrl})`
       }}/>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
