import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(changeVideo(exampleVideoData[0]));
    store.dispatch(changeVideoList(exampleVideoData));
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

// fetchData(url) {
//   this.setState({ isLoading: true });
//   fetch(url)
//       .then((response) => {
//           if (!response.ok) {
//               throw Error(response.statusText);
//           }
//           this.setState({ isLoading: false });
//           return response;
//       })
//       .then((response) => response.json())
//       .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
//       .catch(() => this.setState({ hasErrored: true }));
// }
