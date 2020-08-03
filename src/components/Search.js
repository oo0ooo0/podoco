import React, { Component } from 'react';
import SearchModal from './SearchModal';
import ModalPortal from '../ModalPortal';
import styled from 'styled-components';

const StyleSearch = styled.div``;

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
          <img src='./img/zoom.svg' alt='Search' />
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
