import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

import _ from 'lodash';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce(function(dispatch) {
    var options = {
      key: YOUTUBE_API_KEY, 
      query: q
    };
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos))
      dispatch(changeVideo(videos[0]))
    })
    
  },200);

};

export default handleVideoSearch;
