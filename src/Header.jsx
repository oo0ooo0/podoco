import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Logo = require('../public/img/logo.png');
// const HeaderImg2 = require('../public/img/logo-img.png');
// const HeaderImg3 = require('../public/img/menu.png');
// const HeaderImg4 = require('../public/img/zoom.png');

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    width: 200px;
    img {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  nav {
    ul {
      display: flex;
      li {
        /* font: normal 400 18px/1 'Nanum Gothic'; */
        /* margin: 0 20px; */
        height: 30px;
        width: 50px;
        padding: 0;
        background: rgba(0, 0, 0, 0.1);
        img {
          margin: 0 auto;
          width: 100%;
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <img src='./img/logo.png' alt='PODO_REVIEW' />
      </h1>

      <nav>
        <ul>
          <li>홈</li>
          <li>제품리뷰</li>
          <li>서비스 이용약관</li>
          <li>
            <img src='./img/zoom.svg' alt='PODO_REVIEW' />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
export default Header;
