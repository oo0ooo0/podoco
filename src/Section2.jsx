import React from 'react';
import styled from 'styled-components';
import { Sec2Container } from './components/Containers';

const StyledSection2 = styled.section`
  width: 100%;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  :after {
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    bottom: 1px;
    z-index: -1;
    transform: scale(0.98);
    box-shadow: 0px 0px 5px 2px #aaa;
  }
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
    /* border: 1px solid red; */
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .textWrap {
      text-align: left;
      h3 {
        padding-top: 15px;
        font: 800 36px/1 AppleGothic;
        color: #8207c1;
      }
      h4 {
        padding-top: 35px;
        font: 800 27px/1.2 Nanum Gothic;
      }
      p {
        margin: 13px 0 38px 0;
        font: 600 24px/1.2 Nanum Gothic;
        color: #9c9a9e;
      }
    }
    .graphWrap {
      margin: 0 27px;
      .pie-chart2 {
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        background: conic-gradient(#00b953 75% 0%, #dde2df 0% 75%);
        border-radius: 50%;
      }
      .pie-chart2 .center {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background: #fff;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        span {
          font: italic 700 22px/1 Nanum Gothic;
          color: #00b953;
        }
      }
    }
  }

  @media (min-width: 720px) {
    div {
      text-align: center;
      h2 {
      }
    }
    img {
      padding-top: 54px;
      width: 30vw;
      max-width: 300px;
      /* border: 1px solid red; */
    }
    .wrap {
      margin: 0 auto;
      width: 60%;
      .textWrap {
        h3 {
          padding-top: 15px;
          font: 800 30px/1 AppleGothic;
          color: #8207c1;
        }
        h4 {
          padding-top: 25px;
          font: 800 20px/1.2 Nanum Gothic;
        }
        p {
          margin-top: 13px;
          font: 600 20px/1.2 Nanum Gothic;
          color: #9c9a9e;
        }
      }
      .graphWrap {
        margin: 0 27px;
        .pie-chart2 {
          display: inline-block;
          position: relative;
          width: 100px;
          height: 100px;
          background: conic-gradient(#00b953 75% 0%, #dde2df 0% 75%);
          border-radius: 50%;
        }
        .pie-chart2 .center {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 50%;
          top: 10px;
          left: 10px;
          span {
            font: italic 700 22px/1 Nanum Gothic;
            color: #00b953;
          }
        }
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
    <Sec2Container>
      <StyledSection2>
        <div>
          <h2>BEST PRODUCT</h2>
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
              <div className='pie-chart2'>
                <span className='center'>
                  <span>75%</span>
                </span>
              </div>
            </div>
          </div>
        </FlexBox>
        <div id='box' className='box-shadow'></div>
      </StyledSection2>
    </Sec2Container>
  );
}
export default Section2;
