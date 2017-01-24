import React from 'react';

const VideoPlayer = (props) => (
  <div>
    <video id="media" name="media" width="640" height="360" preload controls>
      <source src={props.currentVideo}/>
    </video>
  </div>
  );

export default VideoPlayer;
