import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    width: 120px;
    img {
      width: 100%;
    }
  }
  nav {
    width: 200px;
    height: 20px;
    margin: 0 auto;
    margin: 0 30px;
    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      li a {
        color: #363139;
        opacity: 70%;
        font-size: 18px;
        white-space: nowrap;
        img.zoom {
          margin: 0 auto;
          height: 100%;
          margin-bottom: -5px;
        }
        img.arrowDown {
          margin: 0 auto;
          height: 8px;
          margin: 4px 0px 2px 6px;
        }
      }
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <a href='/#'>
          <img src='./img/logo.png' alt='PODO_REVIEW' />
        </a>
      </h1>

      <nav>
        <ul>
          <li>
            <a href='/#'>홈</a>
          </li>

          <li>
            <a href='/#'>
              제품리뷰
              <img className='arrowDown' src='./img/arrow-header.svg' alt='arrow-down' />
            </a>
          </li>

          <li>
            <a href='/#'>
              <img className='zoom' src='./img/zoom.svg' alt='PODO_REVIEW' />
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
export default Header;
