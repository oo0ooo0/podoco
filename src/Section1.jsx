import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Logo = require('../public/img/logo.png');
// const HeaderImg2 = require('../public/img/logo-img.png');
// const HeaderImg3 = require('../public/img/menu.png');
// const HeaderImg4 = require('../public/img/zoom.png');

const StyledSection1 = styled.section`
  margin: 0 auto;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  h1 {
    width: 200px;
    background: rgba(0, 0, 0, 0.1);
    img {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  nav {
    ul {
      display: flex;
      li {
        font: normal 400 18px/1 'Nanum Gothic';

        margin: 0 20px;
        background: rgba(0, 0, 0, 0.1);
        vertical-align: middle;

        img {
          margin: 0 auto;
          width: 50%;
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

function Section1() {
  return (
    <StyledSection1>
      <img src='./img/logo-v.png' alt='PODO_REVIEW' />
      <h2>
        빅데이터 기반 리뷰 전문 미디어 
      </h2>

      <p>
      포도리뷰에서는 현재 <em>293</em>개의 제품에 대한 <br/>
      <em>384,719,481</em>개의 의견이 분석되고 있습니다      </p>

    </StyledSection1>
  );
}
export default Section1;
