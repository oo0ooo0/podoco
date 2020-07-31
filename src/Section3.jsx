import React from 'react';
import styled from 'styled-components';

const StyledSection3 = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  margin: 0 auto;
  margin-top: 18px;
  background: #fff;
  /* > div.item {
    margin-left: -2px;
  } */
  > div.item {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #eef0ef;
    border-right: 2px solid #eef0ef;

    div.imgWrap {
      display: flex;
      justify-content: center;
      img {
        margin-top: 37px;
        width: 287px;
      }
    }
    .infoWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .textWrap {
        h3 {
          margin: 40px 0 0 30px;
          font: normal 24px/1 Nanum Gothic;
          color: #878689;
          background: #eef0ef;
          border-radius: 20px;
          text-align: center;
          padding: 5px 0;
        }
        h4 {
          margin: 20px 0 0 35px;
          font: normal 700 24px/1 Nanum Gothic;
        }
        p {
          margin: 24px 0 40px 35px;
          font: normal 700 20px/1 Exo 2;
          color: #b6b5b8;
        }
      }
    }
    .graphWrap {
      padding-right: 20px;
      .pie-chart2 {
        display: inline-block;
        position: relative;
        width: 85px;
        height: 85px;
        background: conic-gradient(#00b953 75% 0%, #dde2df 0% 75%);
        border-radius: 50%;
      }
      .pie-chart2 .center {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        background: #fff;
        border-radius: 50%;
        top: 5px;
        left: 5px;
        span {
          font: italic 700 22px/1 Nanum Gothic;
          color: #00b953;
        }
      }
    }
  }
  div.readMore {
    cursor: pointer;
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-top: 3px;
      height: 13px;
      margin-right: 20px;
    }
    span {
      white-space: nowrap;
      font: normal regular 20px/1 Nanum Gothic;
      color: #68656b;
    }
  }
`;

function Section3() {
  return (
    <StyledSection3>
      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='imgWrap'>
          <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
        </div>
        <div className='infoWrap'>
          <div className='textWrap'>
            <h3>스마트폰</h3>
            <h4>
              플레오맥스
              <br />
              PBE-S40
            </h4>
            <p>SONY</p>
          </div>
          <div className='graphWrap'>
            <div className='pie-chart2'>
              <span className='center'>
                <span>58%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='readMore'>
        <img src='./img/arrow-down.svg' alt='arrow-down' />
        <span>READ MORE</span>
      </div>
    </StyledSection3>
  );
}
export default Section3;
