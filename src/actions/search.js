import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    dispatch(searchYouTube({query:q}))
    dispatch(VideoList(videos))
    dispatch(changeVideo(video))
  }

};

export default handleVideoSearch;

// export function itemsFetchData(url) {
//   return (dispatch) => {
//       dispatch(itemsIsLoading(true));
//       fetch(url)
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }
//               dispatch(itemsIsLoading(false));
//               return response;
//           })
//           .then((response) => response.json())
//           .then((items) => dispatch(itemsFetchDataSuccess(items)))
//           .catch(() => dispatch(itemsHasErrored(true)));
//   };
// }
