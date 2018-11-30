import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

var mapStateToProps = (state, ownProps) => {
    return {
        video: state.currentVideo
    }
}

var mapDispatchtoProps = (dispatch, ownProps) => ({})

var VideoPlayerContainer = connect(
    mapStateToProps,
    mapDispatchtoProps
)(VideoPlayer)

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
