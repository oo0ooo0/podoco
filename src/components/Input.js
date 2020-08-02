import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.form`
  input {
    padding-top: 27px;
    width: 537px;
    border: 0px solid black;
    border-bottom: 2px solid black;
    border-radius: 0;
    height: 67px;
    font: normal 600 20px/1 Nanum Gothic;
    color: #363139;
    &:active {
      border: 0px solid red;
    }
    &::placeholder,
    text {
      font: normal 600 20px/1 Nanum Gothic;
      color: #363139;
    }
  }
  @media (max-width: 720px) {
    input {
      padding: 3.5vw 0;
      width: 73vw;
      border: 0px solid black;
      border-bottom: 2px solid black;
      height: 15vw;
      font-size: 5vw;

      &::placeholder {
        font-size: 5vw;
      }
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
        {/* <div>{this.state.name}</div> */}
      </StyledInput>
    );
  }
}

export default React.memo(Input);
