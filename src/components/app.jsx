import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(faMoon, faRocket);
library.add(fas, far);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy("ARlGu5m3G8vu6WKTlSu3vJoYncSmDcbU").search({
      q: query,
      rating: 'g',
      limite: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data.slice(0, 10)
      });
      // this.state.gifs = result;
    });
  };

  changeSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  };

  render() {
    return (
      <div>

        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunct={this.changeSelectedGif} />
        </div>

      </div>
    )
  }
}

export default App;
