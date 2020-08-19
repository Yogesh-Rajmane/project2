import React from 'react';
import data from '../../components/appConfig.json';
import MainQuestion from './MainQuestion.jsx';
import {Link} from 'react-router-dom'
const Question = (props) => {

    console.log("Question.jsx--props-->",props)
    
    const questionBlock=Object.keys(data.question)
    const noOfMainQuestion=questionBlock.length
    
    // console.log("noOfQuestion=",noOfMainQuestion)   
    
    const mainQInMarathi=[]
    let i=0
    for(i=0;i<noOfMainQuestion;i++)
    {
        mainQInMarathi.push(Object.values(data.question)[i].map(d=>d.title))  
    }

    // for(i=0;i<noOfMainQuestion;i++){
    //     // console.log("Q--",mainQInMarathi[i])
    // }

    const MainQuestionHeadingInMarathi = Object.keys(data.question).map((p,index)=>{
            return( <Link to={{pathname:("MainQuestion" + (index+1))}}  key={index}>
                        <MainQuestion
                            image={index}                   
                            heading={mainQInMarathi[index]}
                        />
                    </Link>) 
        })

    const backPage=()=>{
        props.history.goBack()
    }
        return(
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
            
            <div className="questioncheck">
                <div className=" mainquestionslider">
                    {MainQuestionHeadingInMarathi}
                    {/* <MainQuestion 
                        heading={mainQInMarathi[0]}
                    /> */}

                    

                    {/* <div className="grid-x questionbox">
                        <div className="cell small-24 medium-24 large-24 ">
                            <div>
                                <div className="questionLogo"></div>
                                <span className="questionText">संसर्गजन्य रोगांचे जंतू कोण?</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid-x questionbox">
                        <div className="cell small-24 medium-24 large-24 ">
                            <div>
                                <div className="questionLogo"></div>
                                <span className="questionText">संसर्गजन्य रोगांचे जंतू कोण?</span>
                            </div>
                        </div>
                    </div> */}

                </div>
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
                    <div className="leftArrowSmall" onClick={backPage}>
                         <span className="leftArrow1">
                         <i className='fas fa-chevron-left lArrow'></i>
                         </span>

                    </div>
    
                    {/* <span className="leftArrow2"></span> */}
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
                    
                    <div className="leftArrowSmall" >
                        <span className="leftArrow1">
                        <i className='fas fa-chevron-right rArrow'></i>
                        </span>
                    </div>
                    <span className="rightArw"></span>
                </div>
            </div>
            <div className="footerline">
    
            </div>
            {/* /////////////////////footer coding end//////////////////////////////////////////////// */}
        </div>)
    
}
export default Question