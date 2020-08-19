import React,{useState} from 'react'
import data from '../../../components/appConfig.json'
import { Link } from 'react-router-dom'


const SubQuestion = (props) => {

     const appConfigData=data.question[props.match.params.id]
     console.log(props)

    const [vid,uid]= useState(appConfigData[0].sub[0].vid)

    const renderVideo=()=>{
        return(
            <>
            <div>
                <iframe 
                    title="v"
                    // width="453" 
                    // height="480" 
                    src={"//www.youtube.com/embed/" + vid + "?rel=0"} 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
          </>
        )
    }
    return (
        <div>
        {/* /////////////heading coding start/////////////// */}
        <div className="header subheader"> 
            <div className="grid-x">
                <div className="cell small-20 medium-20 large-21 headerText">
                    <span className="cell ">ज्ञान प्रबोधिनी युवक विभाग</span>
                </div>
                <button type="button" className="cell small-4 medium-4 large-3 aboutus" style={{width:'141px'}}>
                    <span className="aboutusText">आमच्या विषयी</span>
                </button>
            </div> 
        </div>
        {/* ////////////////heading coding end/////////////////////////////////////////////// */}
        
        {/* ////////////////////VideoComponent coding start///////////////////////////////////// */}
        <div className="subvideo">
            <div>

            {renderVideo()}
            </div>
            <div className="playbutton">
                <div className="play"> </div>
            </div>
            <div className="skipVideo"> 
                <span className="skipVideoText">Skip Video</span>
            </div>
        </div>
        {/* //////////////////////VideoComponent coding end/////////////////////////////////// */}
        
        {/* //////////////subquestionlist coding start//////////////////// */}
        <div className="subleftsidebar">       
                {/* {subQuestionVideoList} */}
                {appConfigData[0].sub.map((d,index)=>{
        return (<Link to={{pathname : props.match.url +"/"+d.vid}} key={index}
                                onClick={()=> { 
                                    uid(d.vid)
                                }}
                            > 
                            <div className="leftbox" >
                                <div className="playbuttonleftbar">
                                    <div className="playsmallbtn"></div>
                                </div>
                                <div className="subquestionlist">
                                    <span className="subquestionTextleft">{d.stitle} </span>
                                </div>
                            </div></Link>)
                            })}
        </div>
        {/* //////////////subquestionlist coding end//////////////////////////// */}
        
        {/* /////////////////////////sidebar for shabdakosh start////////////////////////////////////////// */}
        <div className="shabdakosh">
            <div className="nextvideo">
                <div >
                    <div className="subplaybutton">
                        <div className="innerbutton"></div>
                    </div>
                    <span className="nextquestion">पुढील प्रश्न</span>
                </div>
                <div className="nextquestionbox">
                    <span className="subnextvideoText">
                    रोग प्रतिकरक शक्ति रोगाला कसा प्रतिसाद देते?
                    </span>
                </div>
            </div>

            <div className="shabdkoshpoint">
                <div>
                    <div className="shabdkoshlogo"></div>
                    <span className="shabdkoshText">शब्दकोश</span>
                </div>


            <div className="shabdkoshw">
                <span className="rog">रोग</span>
                <span className="shabdkoshwords"> आजार, दुखणे, रोगराई, विकार, व्याधी
                        शरीरातील तंत्राच्या बिघाडामुळे किंव
                        रोगजंतूंच्या प्रादुर्भावामुळे होणारा शारीरि
                        त्रास
                        "संतुलित आहार, विहार आणि
                        विचाराने रोग टाळता येतात"
                </span>
            </div>

            <div className="chachani shabdkoshw">
                <span className="rog">चाचणी</span>
                <span className="shabdkoshwords"> 
                    आजार, दुखणे, रोगराई, विकार, व्याधी
                    शरीरातील तंत्राच्या बिघाडामुळे किंव
                    रोगजंतूंच्या प्रादुर्भावामुळे होणारा शारीरि
                    त्रास
                    "संतुलित आहार, विहार आणि
                    विचाराने रोग टाळता येतात"
                </span>
            </div>

            <div className="chachani shabdkoshw chachani2">
                <span className="rog">चाचणी</span>
                <span className="shabdkoshwords"> 
                    आजार, दुखणे, रोगराई, विकार, व्याधी
                    शरीरातील तंत्राच्या बिघाडामुळे किंव
                    रोगजंतूंच्या प्रादुर्भावामुळे होणारा शारीरि
                    त्रास
                    "संतुलित आहार, विहार आणि
                    विचाराने रोग टाळता येतात"
                </span>
            </div>

            </div>
        </div>
        {/* /////////////////////////sidebar for shabdakosh end//////////////////////////////////////// */}
        
        {/* //////////////////footer coding start///////////////////////////////// */}
        <div className="subfooter">
            <div className="subquestionlogo"></div>
            <span className="subquestionText">रोगांची चाचणी आणि निदान कसे करतात?</span>
            <span className="subquestiondescription"> Lorem Ipsum के अंश कई रूप में उपलब्ध हैं, में परिवर्तन का सामना करना पड़ा है, हास्य डालना या क्रमरहित शब्द , जो तनिक भी विश्वसनीय नहीं लग रहे हो. यदि आप Lorem Ipsum के एक लैटिन </span>
            <span className="subprogramname">साराभाई दल विज्ञान प्रदर्शन </span>
        </div>

        <div className="subfootermenu">
            <div className="footerbar">
                <span className="footerbarText1">प्रतिसाद</span>  
            </div>
            <div className="footerbar footerbar2">
                <span className="footerbarText1">देणगी</span>
            </div>
            <div className="footerbar  footerbar3">
                <span className="footerbarText1">पुस्तिका</span>
            </div>
        </div>

        <div className="footerline">

        </div>
        {/* /////////////////////footer coding end//////////////////////////////////////////////// */}
    </div>
    )
}
export default SubQuestion