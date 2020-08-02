import React, { Component } from 'react';
import styled from 'styled-components';
import MyModal from './MobileMenu';
import ModalPortal from '../ModalPortal';

const StyledHeaderM = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 3vw 4vw 0 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    display: hidden;
    img {
      cursor: pointer;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
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
          <img src='./img/zoom.svg' alt='PODO_REVIEW' />
        </nav>
      </StyledHeaderM>
    );
  }
}
export default HeaderM;
