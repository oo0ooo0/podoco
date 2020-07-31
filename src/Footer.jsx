import React from 'react';
import styled from 'styled-components';
import { FooterContainer } from './components/Containers';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.iconWrap {
    margin-top: 85px;
    img {
      margin-right: 40px;
    }
    img:last-child {
      margin-right: 0px;
    }
  }
  div.infoWrap {
    margin-top: 48px;
    display: flex;

    > * {
      margin-right: 18px;
      font: normal 400 25px/1 Nanum Gothic;
      color: #807d82;
    }
    > *:last-child {
      margin-right: 0px;
    }
    > div {
      color: #ccd2cf;
    }
  }
  p {
    margin: 37px 0 48px 0;
    text-align: center;
    font: normal 700 20px/1 Exo 2;
    color: #ccd2cf;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        <div className='iconWrap'>
          <img src='./img/footer-icon-1.png' alt='facebook' />
          <img src='./img/footer-icon-2.png' alt='instagram' />
          <img src='./img/footer-icon-3.png' alt='naver-blog' />
        </div>
        <div className='infoWrap'>
          <a>서비스약관</a> <div>|</div> <a>개인정보취급방침</a>
        </div>
        <p>© PODOREVIEW.COM</p>
      </StyledFooter>
    </FooterContainer>
  );
}
export default Footer;
