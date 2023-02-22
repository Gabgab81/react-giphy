import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.selectGifFunct(this.props.id)
  };

  render() {
    if (!this.props.id){
      return null
    }
    const src = `https://media1.giphy.com/media/${ this.props.id }/giphy.gif`
    return(
      <img src={src} alt='' className='gif' onClick={this.handleClick} />
    );
  }
}

export default Gif;
