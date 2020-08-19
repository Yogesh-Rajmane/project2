import React from 'react'
import { withRouter } from 'react-router-dom'

 const MainQuestion = (props) => {
    //  console.log("mainq====>",props)
    return (<div className="grid-x questionbox" >
                <div className="cell small-24 medium-24 large-24 ">
                    <img src="/image/0.png" alt="" className="questionLogo"></img>
                    <span className="questionText">{props.heading}</span>
                </div>
            </div>)
}

export default withRouter(MainQuestion)