import React from 'react';
import Directory from '../../components/directory/directory.component';
import styled from "styled-components";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
}

export default HomePage;
