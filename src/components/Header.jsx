import React, { Component } from 'react';
import styled from 'styled-components';
import ListModal from './ListModal';
import Search from './Search';

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    width: 120px;
    img {
      width: 100%;
    }
  }
  nav {
    width: 320px;
    height: 20px;
    margin: 0 auto;
    margin: 0 30px;
    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      li {
        position: relative;
        /* 위치 */
        a,
        button {
          color: #363139;
          opacity: 70%;
          font-size: 18px;
          white-space: nowrap;
        }
        button {
          margin-top: 6.6px;
        }

        /* 제품리뷰 화살표 */
        img.arrowDown {
          margin: 0 auto;
          height: 8px;
          margin: 4px 0px 2px 10px;
        }

        /* zoom */
        div {
          width: 100%;
          button {
            img {
              height: 100%;
              width: 20px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    modal: false,
  };
  handleOpenModal = () => {
    this.setState({
      modal: true,
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
  };
  render() {
    return (
      <StyledHeader>
        <h1>
          <a href='/#'>
            <img src='./img/logo.png' alt='PODO_REVIEW' />
          </a>
        </h1>

        <nav>
          <ul>
            <li>
              <a href='/#'>홈</a>
            </li>

            <li>
              <button onClick={this.handleOpenModal}>
                제품리뷰
                <img className='arrowDown' src='./img/arrow-header.svg' alt='arrow-down' />
              </button>
              {this.state.modal && <ListModal onClose={this.handleCloseModal} />}
            </li>
            <li>
              <a href='/#'>서비스 이용약관</a>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </nav>
      </StyledHeader>
    );
  }
}
export default Header;
