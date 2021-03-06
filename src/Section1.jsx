import React from 'react';
import styled from 'styled-components';
import HeaderM from './components//HeaderM';
import Header from './components/Header';
import { Sec1Container } from './components/Containers';

const StyledSection1 = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 50px;
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

  @media (max-width: 700px) {
    margin-top: 10vw;
    img {
    }
    h2 {
      margin-top: 10vw;
      font-size: 6vw;
    }
    p {
      margin: 4vw 0 10vw 0;
      font-size: 4.55vw;
    }
  }
`;

function Section1() {
  return (
    <Sec1Container>
      <HeaderM />
      <Header />
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
