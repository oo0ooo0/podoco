import React, { Component } from 'react';
import SearchModal from './SearchModal';
import ModalPortal from '../ModalPortal';
import styled from 'styled-components';

const StyleSearch = styled.header`
  button {
    /* background: #000;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
`;

class Search extends Component {
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
      <StyleSearch>
        <button onClick={this.handleOpenModal}>
          <img src='./img/zoom.svg' alt='PODO_REVIEW' />
        </button>
        {this.state.modal && (
          <ModalPortal>
            <SearchModal onClose={this.handleCloseModal} />
          </ModalPortal>
        )}
      </StyleSearch>
    );
  }
}
export default Search;