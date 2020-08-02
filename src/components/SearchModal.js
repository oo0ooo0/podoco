import React from 'react';
import styled from 'styled-components';
import Input from './Input';

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
      max-width: 720px;

      padding-left: 37px;
      position: absolute;
      top: 0;
      right: 0;
      background: #fff;
      width: 100%;
      height: auto;

      div.searchWrap {
        position: relative;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 4.5vw;
        div.imgWrap {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          right: 0;
          height: 110px;
          width: 110px;
          background: #8207c1;

          img {
            height: 50px;
            cursor: pointer;
          }
        }
      }
      div.textWrap {
        margin-top: 13px;
        p {
          margin-bottom: 56px;
          font: normal 600 35px/1 Nanum Gothic;
          color: #363139;
        }
      }
    }
  }
  @media (max-width: 720px) {
    .MyModal {
      .content {
        div.searchWrap {
          margin-bottom: 4.5vw;
          div.imgWrap {
            height: 15vw;
            width: 15vw;

            img {
              height: 7vw;
              cursor: pointer;
            }
          }
        }
        div.textWrap {
          margin-top: 3vw;
          p {
            margin-bottom: 7.2vw;
            font-size: 5vw;
          }
        }
      }
    }
  }
`;
const SearchModal = ({ onClose }) => {
  return (
    <StyledModal>
      <div className='MyModal'>
        <div className='content'>
          <div className='searchWrap'>
            <Input />
            <div className='imgWrap' onClick={onClose}>
              <img src='./img/zoom-w.svg' alt='search' />
            </div>
          </div>
          <div className='textWrap'>
            <p>젠하이저 XB345</p>
            <p>AB 젠하이저 RED</p>
            <p>젠하이저 XB345</p>
            <p>AB 젠하이저 RED</p>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default SearchModal;
