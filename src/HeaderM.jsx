import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Logo = require('../public/img/logo.png');
// const HeaderImg2 = require('../public/img/logo-img.png');
// const HeaderImg3 = require('../public/img/menu.png');
// const HeaderImg4 = require('../public/img/zoom.png');

const StyledHeaderM = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    display: hidden;
    img {
      cursor: pointer;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30px;
    img {
      cursor: pointer;
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    padding: 3vw 3vw 0 3vw;
    h1 {
      display: hidden;
    }
    nav {
      height: 8vw;
    }
  }
`;

function HeaderM() {
  return (
    <StyledHeaderM>
      <h1 style={{ display: 'none' }}>
        <img src='./img/logo.png' alt='PODO_REVIEW' />
      </h1>

      <nav>
        <img src='./img/menu.svg' alt='PODO_REVIEW' />
        <img src='./img/zoom.svg' alt='PODO_REVIEW' />
      </nav>
    </StyledHeaderM>
  );
}
export default HeaderM;
