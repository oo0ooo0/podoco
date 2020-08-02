import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  .Modal {
    position: relative;
    left: 0;
    top: 0px;
    height: 100%;
    width: 100%;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 5px;
      left: -10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
      padding: 0.8vw;
      width: auto;
      height: auto;

      button {
        position: absolute;
        top: -5px;
        right: 8px;
        height: 3.6vw;
        z-index: 1;
        img {
          height: 100%;
          width: 10px;
        }
      }

      ul {
        margin-top: 15px;
        display: flex;
        flex-direction: column;

        li {
          height: auto;
          position: relative;
          color: #363139;
          white-space: nowrap;
          text-align: center;

          a {
            text-align: center;
            font: normal 600 15px/25px Nanum Gothic;
            color: #363139;
          }
          a:hover {
            color: #8207c1;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
  }
`;
const ListModal = ({ onClose }) => {
  return (
    <StyledModal>
      <div className='Modal'>
        <div className='content'>
          <button onClick={onClose}>
            <img src='./img/X@1.25x.svg' alt='PODO_REVIEW' />
          </button>
          <ul>
            <li>
              <a href='/#'>스마트폰</a>
            </li>

            <li>
              <a href='/#'>태블릿/노트북</a>
            </li>

            <li>
              <a href='/#'>카메라</a>
            </li>

            <li>
              <a href='/#'>오디오</a>
            </li>

            <li>
              <a href='/#'>가전</a>
            </li>

            <li>
              <a href='/#'>IT액세서리</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledModal>
  );
};

export default ListModal;
