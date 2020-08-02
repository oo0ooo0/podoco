import React from 'react';
import styled from 'styled-components';
import { Sec3Container } from './components/Containers';

const StyledSection3 = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1024px;
  > div.item {
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-bottom: 2px solid #eef0ef;
    border-right: 2px solid #eef0ef;

    div.imgWrap {
      margin-top: 37px;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 0;
      overflow: hidden;
      padding-bottom: 65%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    div.infoWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.textWrap {
        h3 {
          margin: 40px 0 0 30px;
          display: inline-block;
          font: normal 24px/1 Nanum Gothic;
          color: #878689;
          background: #eef0ef;
          border-radius: 20px;
          text-align: center;
          padding: 5px 10px;
        }
        h4 {
          margin: 20px 0 0 35px;
          height: 66px;
          font: normal 700 28px/1.2 Nanum Gothic;
          font-family: Exo2, Nanum Gothic;
          word-break: keep-all;
          white-space: nowrap;
          br.mobile {
            display: none;
          }
        }
        p {
          margin: 24px 0 40px 35px;
          font: normal 700 20px/1 Exo 2;
          color: #b6b5b8;
        }
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
  @media (min-width: 1024px) {
    > div.item {
      width: 33.33%;
    }
  }
  @media (max-width: 720px) {
    > div.item {
      width: 50%;
    }
    div.infoWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.textWrap {
        h4 {
          max-width: 155px;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          overflow: hidden;
        }
      }
    }
  }
  @media (max-width: 700px) {
    > div.item {
      width: 50%;

      div.imgWrap {
        margin-top: 3vw;
      }
      div.infoWrap {
        div.textWrap {
          h3 {
            margin: 4vw 0 0 3vw;
            display: inline-block;
            font: normal 3vw/1 Nanum Gothic;
            color: #878689;
            background: #eef0ef;
            border-radius: 20px;
            text-align: center;
            padding: 0.5vw 1vw;
          }
          h4 {
            margin: 1.5vw 0 0 3.2vw;
            height: 9vw;
            font: normal 700 3.5vw/1.2 Nanum Gothic;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            overflow: hidden;
          }
          p {
            margin: 0vw 0vw 3vw 3.2vw;
            font-size: 3.2vw;
          }
        }
      }
      .graphWrap {
        margin: 0 3vw;
        .pie-chart2 {
          width: 12vw;
          height: 12vw;
        }
        .pie-chart2 .center {
          width: 10vw;
          height: 10vw;
          top: 1vw;
          left: 1vw;
          span {
            font: italic 700 3vw/1 Nanum Gothic;
          }
        }
      }
    }

    div.readMore {
      height: 9.6vw;
      img {
        margin-top: 0.3vw;
        height: 2vw;
        margin-right: 2vw;
      }
      > span {
        font-size: 4vw;
      }
    }
  }
`;

function Section3() {
  return (
    <Sec3Container>
      <StyledSection3>
        <div className='item'>
          <div className='imgWrap'>
            <img src='./img/sec3-1.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>스마트폰</h3>
              <h4>
                플레오맥스 <br /> PBE-S40
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
            <img src='./img/sec3-2.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>음악감상용</h3>
              <h4>Acer Chrom</h4>
              <p>SONY</p>
            </div>
            <div className='graphWrap'>
              <div className='pie-chart2'>
                <span className='center'>
                  <span>64%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='imgWrap'>
            <img src='./img/sec3-3.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>카메라</h3>
              <h4>
                플레오맥스 <br /> PBE-S40
              </h4>
              <p>SONY</p>
            </div>
            <div className='graphWrap'>
              <div className='pie-chart2'>
                <span className='center'>
                  <span>51%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='imgWrap'>
            <img src='./img/sec3-4.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>오디오</h3>
              <h4>
                WWWWW-
                <br />
                WWWWWW
              </h4>
              <p>SONY</p>
            </div>
            <div className='graphWrap'>
              <div className='pie-chart2'>
                <span className='center'>
                  <span>75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='imgWrap'>
            <img src='./img/sec3-5.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>가전</h3>
              <h4>
                New Roku
                <br /> 3 6.5 Foot
              </h4>
              <p>SONY</p>
            </div>
            <div className='graphWrap'>
              <div className='pie-chart2'>
                <span className='center'>
                  <span>80%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='imgWrap'>
            <img src='./img/sec3-6.png' alt='PODO_REVIEW' />
          </div>
          <div className='infoWrap'>
            <div className='textWrap'>
              <h3>IT/악세서리</h3>
              <h4>
                플레오맥스 <br /> PBE-S40
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
    </Sec3Container>
  );
}
export default Section3;
