import React, { Component } from 'react';
import styled from 'styled-components';
import MyModal from './MobileMenu';
import Search from './Search';
import ModalPortal from '../ModalPortal';

const StyledHeaderM = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 28px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    display: hidden;
    img {
      cursor: pointer;
      width: 100%;
    }
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30px;
    img {
      cursor: pointer;
      height: 7vw;
    }
  }
  @media (min-width: 721px) {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 4vw 3vw 0 4vw;

    h1 {
      display: hidden;
    }
    nav {
      margin: 3vw 4vw 0 4vw;
      img {
        height: 8vw;
      }
    }
  }
`;

class HeaderM extends Component {
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
      <StyledHeaderM>
        <h1 style={{ display: 'none' }}>
          <img src='./img/logo.png' alt='PODO_REVIEW' />
        </h1>

        <nav>
          <button onClick={this.handleOpenModal}>
            <img src='./img/menu.svg' alt='PODO_REVIEW' />
          </button>
          {this.state.modal && (
            <ModalPortal>
              <MyModal onClose={this.handleCloseModal} />
            </ModalPortal>
          )}
          <Search />
        </nav>
      </StyledHeaderM>
    );
  }
}
export default HeaderM;
