import React from 'react'
import MuxPlayer from '@mux/mux-player-react'
import './video.css'
const Video = ({ video }) => {
  return (
    <MuxPlayer
      streamType='on-demand'
      playbackId={video.playbackId}
      autoPlay='true'
      maxResolution='720p'
    />
  )
}

export default Video
