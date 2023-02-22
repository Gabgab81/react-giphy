import React from 'react';
import Gif from "./gif";

function GifList({ gifs, selectGifFunct }) {
  const renderList = () => {
    // console.log(this.props.selectGif)
    return gifs.map(({id}) => {
      return (
        <Gif
          id={id}
          key={id}
          selectGifFunct={selectGifFunct}
        />
      );
    });
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
}

export default GifList;
