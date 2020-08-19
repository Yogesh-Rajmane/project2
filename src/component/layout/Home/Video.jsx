import React from 'react'

const Video = (props) => {
    console.log("video=",props)
    return (
<div >
            <span className="videoText">साराभाई दल विज्ञान प्रदर्शन माहिती</span>
            <div className="playbutton">
                <div className="play"></div>
            </div>
            <div className="skipVideo">
                <span className="skipVideoText">Skip Video</span></div>
        </div>
    )
}

export default Video;