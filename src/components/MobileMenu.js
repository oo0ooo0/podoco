import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  .MyModal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: 1rem;
      width: 100%;
      height: 100vh;
      .titleWrap {
        position: relative;
        border-bottom: 2px solid #e9e8e9;
        padding-bottom: 3.6vw;
        margin-bottom: 3vw;
        button {
          position: absolute;
          top: 0px;
          left: 0;
          height: 3.6vw;
          z-index: 1;
          img {
            margin: 0 0 -2px 3.8vw;
            height: 100%;
            font-size: 2.5vw;
            height: 3.6vw;
            /* border: 1px solid red; */
          }
        }
        h2 {
          text-align: center;
          font-size: 3.5vw;
        }
      }
      ul {
        li {
          height: 4vw;
          position: relative;
          margin-top: 7.4vw;
          a {
            h3 {
              text-align: center;
              font: normal 600 4.2vw/1 Nanum Gothic;
              color: #363139;
            }
            h3:hover {
              color: #8207c1;
            }
            img {
              position: absolute;
              bottom: 0;
              left: 3.7vw;
              height: 5vw;
            }
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .MyModal {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.95);
        padding: 1rem;
        width: 100%;
        height: 100vh;
        .titleWrap {
          position: relative;
          border-bottom: 2px solid #e9e8e9;
          padding-bottom: 3.6vw;
          margin-bottom: 3vw;
          button {
            position: absolute;
            top: 0px;
            left: 0;
            height: 7.2vw;
            z-index: 1;
            img {
              margin: 0 0 -2px 3.8vw;
              height: 100%;
              font-size: 2.5vw;
              height: 7.2vw;
              /* border: 1px solid red; */
            }
          }
          h2 {
            text-align: center;
            font-size: 7vw;
          }
        }
        ul {
          li {
            height: 7vw;
            position: relative;
            margin-top: 7.4vw;
            a {
              h3 {
                text-align: center;
                font: normal 600 7vw/1 Nanum Gothic;
                color: #363139;
              }
              img {
                left: 3.7vw;
                height: 7vw;
              }
            }
          }
        }
      }
    }
  }
`;
const MyModal = ({ onClose }) => {
  return (
    <StyledModal>
      <div className='MyModal'>
        <div className='content'>
          <div className='titleWrap'>
            <button onClick={onClose}>
              <img src='./img/X@1.25x.svg' alt='PODO_REVIEW' />
            </button>
            <h2>HOME</h2>
          </div>
          <ul>
            <li>
              <a href='/#'>
                <h3>홈</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_1.svg' alt='PODO_REVIEW' />
                <h3>스마트폰</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_2.svg' alt='PODO_REVIEW' />
                <h3>태블릿/노트북</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_3.svg' alt='PODO_REVIEW' />
                <h3>카메라</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_4.svg' alt='PODO_REVIEW' />
                <h3>오디오</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_5.svg' alt='PODO_REVIEW' />
                <h3>가전</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/modal_6.svg' alt='PODO_REVIEW' />
                <h3>IT액세서리</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledModal>
  );
};

export default MyModal;
