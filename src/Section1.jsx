import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderM from './HeaderM';
import { Sec1Container } from './components/Containers';

// const Logo = require('../public/img/logo.png');
// const HeaderImg2 = require('../public/img/logo-img.png');
// const HeaderImg3 = require('../public/img/menu.png');
// const HeaderImg4 = require('../public/img/zoom.png');

const StyledSection1 = styled.section`
  width: 720px;
  margin: 0 auto;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
  }
  h2 {
    margin-top: 73px;
  }
  p {
    margin: 35px 0 78px 0;
    font: normal regular 26px/1 Nanum Gothic;
    color: #363139;
    opacity: 70%;
  }
`;

function Section1() {
  return (
    <Sec1Container>
      <HeaderM />
      <StyledSection1>
        <img src='./img/logo-v.png' alt='PODO_REVIEW' />
        <h2>빅데이터 기반 리뷰 전문 미디어</h2>

        <p>
          포도리뷰에서는 현재 <em>293</em>개의 제품에 대한 <br />
          <em>384,719,481</em>개의 의견이 분석되고 있습니다{' '}
        </p>
      </StyledSection1>
    </Sec1Container>
  );
}
export default Section1;
