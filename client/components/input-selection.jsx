import React, { Component } from 'react';

export default class InputSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { value, index, handleValueSelection, clearValueSelected, handleInputSelected, inputSelected } = this.props;
    return (
      <>
        <div onClick={(e) => handleInputSelected(e)} data-cell={value} className={`${inputSelected[value] ? 'selected' : ''} value col-4 d-flex justify-content-center align-items-center`}>{value}</div>
        {/* <div className="eraser"><i class="fas fa-eraser"></i></div> */}
      </>
    );
  }
}
