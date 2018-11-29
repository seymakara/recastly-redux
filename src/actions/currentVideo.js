var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_VIDEO',
    video, //ES6 Syntax --> same as video: video
});

export default changeVideo;
