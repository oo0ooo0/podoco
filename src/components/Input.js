import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.form`
  input {
    padding: 35px 0;
    width: 537px;
    border: 0px solid black;
    border-bottom: 2px solid black;
    height: 110px;

    &::placeholder {
      font: normal 600 35px/1 Nanum Gothic;
      color: #363139;
    }
  }
`;

class Input extends Component {
  state = {
    name: '',
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <StyledInput>
        <input placeholder='젠하이저' value={this.state.name} onChange={this.handleChange} />
        <div>{this.state.name}</div>
      </StyledInput>
    );
  }
}

export default Input;
