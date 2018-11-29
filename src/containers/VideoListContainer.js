import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state, ownProps) => {
    return {
        videos: state.videoList
    }
}

var mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        handleVideoListEntryTitleClick: video => {
          dispatch(changeVideo(video))
        }
      }
}

var VideoListContainer = connect(
    mapStateToProps,
    mapDispatchtoProps
)(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
