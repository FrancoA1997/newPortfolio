import React from 'react'
import MuxPlayer from '@mux/mux-player-react'
import './video.css'
const Video = ({ video }) => {
  return (
    <div className='container'>
      <MuxPlayer
        streamType='on-demand'
        playbackId={video?.playbackId}
        maxResolution='720p'
      />
    </div>
  )
}

export default Video
