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
      background: rgba(255, 255, 255, 0.9);
      padding: 1rem;
      width: 80%;
      height: 90vh;
      .titleWrap {
        position: relative;
        border-bottom: 1px solid lightGray;
        padding-bottom: 3.6vw;
        margin-bottom: 3vw;
        button {
          position: absolute;
          top: 0px;
          left: 0;
          height: 3.6vw;
          z-index: 1;
          img {
            height: 100%;
            font-size: 2.5vw;
            line-hight: 3.6vw;
          }
        }
        h2 {
          text-align: center;
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
              font-size: 4vw;
            }
            img {
              position: absolute;
              bottom: 0;
              height: 4vw;
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
              <img src='./img/menu.svg' alt='PODO_REVIEW' />
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
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
                <h3>스마트폰</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
                <h3>태블릿/노트북</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
                <h3>카메라</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
                <h3>오디오</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
                <h3>가전</h3>
              </a>
            </li>

            <li>
              <a href='/#'>
                <img src='./img/menu.svg' alt='PODO_REVIEW' />
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
