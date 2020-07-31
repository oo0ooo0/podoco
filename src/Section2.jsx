import React from 'react';
import styled from 'styled-components';

const StyledSection2 = styled.section`
  width: 720px;
  margin: 0 auto;
  padding: 75px 0 0 3.5vw;
  /* background: rgba(0, 0, 0, 0.1); */
  div {
    text-align: center;
    h2 {
      margin: 0 auto;
      display: inline-block;
      padding-bottom: 20px;
      border-bottom: 5px solid black;
      color: #8804cb;
    }
  }
  img {
    margin: 0 auto;
    padding-top: 54px;
    width: 60vw;
    max-width: 600px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .textWrap {
      text-align: left;
      h3 {
        padding-top: 15px;
        font: 400 2.5vw/1 AppleGothic;
        color: #8804cb;
      }
      h4 {
        padding-top: 35px;
        font: 800 3vw/1.2 Nanum Gothic;
      }
      p {
        margin-top: 13px;
        font: 600 2.4vw/1.2 Nanum Gothic;
        color: #9c9a9e;
      }
    }
    .graphWrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85px;
      height: 85px;
      border: 8px solid #00b953;
      border-radius: 100%;
      background: rgba(0, 0, 0, 0.1);
      span {
        font: italic 400 24px/1 Exo2;
      }
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function Section2() {
  return (
    <StyledSection2>
      <div>
        <h2>Best Product</h2>
      </div>
      <FlexBox>
        <img src='./img/best-product.png' alt='PODO_REVIEW' />
        <div className='wrap'>
          <div className='textWrap'>
            <h3>이어폰 </h3>
            <h4>
              쿠거 COUGAR 200K Rainbow <br />
              USB Red color
            </h4>
            <p>쿠거</p>
          </div>
          <div className='graphWrap'>
            <span>75%</span>
          </div>
        </div>
      </FlexBox>
    </StyledSection2>
  );
}
export default Section2;
