import React, { Component } from 'react';
import axios from 'axios';

import Track from './Track';

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackList: [],
      heading: 'Top 10 Tracks'
    };
  }

  async componentDidMount() {
    const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
    const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
    const API_KEY = `&apikey=${process.env.REACT_APP_MM_KEY}`;

    // Get the top 10 most popular tracks in the US
    const res = await axios.get(`${CORS_URL}${BASE_URL}chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1${API_KEY}`);

    this.setState({ trackList: res.data.message.body.track_list });
  }

  render() {
    const { trackList, heading } = this.state;

    return (
      <React.Fragment>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {trackList.map(item => {
            return <Track key={item.track.track_id} track={item.track} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Tracks;