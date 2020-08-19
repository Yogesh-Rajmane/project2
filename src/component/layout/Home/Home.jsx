import React from 'react'

const Home=(props)=>{
console.log(props)
    const nextPage=()=>{
        console.log(props)
        props.history.push({pathname:'question'})

    }
    
    return (
        <div>
        {/* /////////////heading coding start/////////////// */}
        <div className="header"> 
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
        <div className="video">
            <iframe 
                className="iframe"
                title="v"
                // width="1013" 
                // height="607" 
                src={"//www.youtube.com/embed/IvJCEOMaROU?rel=0"} 
                frameBorder="0" 
                allowFullScreen>                
            </iframe>


            <span className="videoText">साराभाई दल विज्ञान प्रदर्शन माहिती</span>
            <div className="playbutton">
                <div className="play"></div>
            </div>
            <div className="skipVideo">
                <span className="skipVideoText">Skip Video</span></div>
        </div>

        {/* //////////////////////VideoComponent coding end/////////////////////////////////// */}
        
        {/* //////////////////////////////sidebar coding start///////////////////////////////// */}
        <div className="sidebar">
              <span className="sidebarText">प्रतिसाद</span>  
        </div>
        <div className="sidebar second">
              <span className="sidebarText">देणगी</span>  
        </div>
        <div className="sidebar third">
              <span className="sidebarText">पुस्तिका</span>  
        </div>
        {/* ///////////////sidebar coding end////////////////////////////////////// */}

        {/* //////////////////footer coding start///////////////////////////////// */}
        <div className="footer">
            <div className="leftArrow">
                <div className="leftArrowSmall">
                     <span className="leftArrow1">
                     <i className='fas fa-chevron-left lArrow'></i>
                     </span>
                </div>
            </div>
            
            <div className="footerText"> 
            <span className="footerHeading">साराभाई दल विज्ञान प्रदर्शन </span>
            <span className="footerHeading2">प्रदर्शनाची ओळख</span>
                
            <span className="footerheading3">Lorem Ipsum के अंश कई रूप में उपलब्ध हैं,
            लेकिन बहुमत को किसी अन्य रूप में परिवर्तन का सामना करना पड़ा है, 
            हास्य डालना या क्रमरहित शब्द , 
            जो तनिक भी विश्वसनीय नहीं लग रहे हो. यदि आप Lorem Ipsum के एक लैटिन</span>
            </div>
            <div className="rightArrow">
                
                <div className="leftArrowSmall" onClick={nextPage} >
                    <span className="leftArrow1">
                        <i className='fas fa-chevron-right rArrow'></i></span>
                </div>
                <span className="rightArw"></span>
            </div>
        </div>
        <div className="footerline">

        </div>
        {/* /////////////////////footer coding end//////////////////////////////////////////////// */}
    </div>
    )
}

export default Home;