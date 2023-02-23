import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  handleClick = (event) => {
    this.props.selectGifFunct(this.props.id)
  };

  render() {
    if (!this.props.id) {
      return null;
    }
    console.log("gif render");
    const src = `https://media1.giphy.com/media/${ this.props.id }/giphy.gif`
    return(
      <img src={src} alt='' className='gif' onClick={this.handleClick} />
    );
  }
}

export default Gif;
