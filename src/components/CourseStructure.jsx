import React, {useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
const CourseStructure=(props)=> {
    
    const courseName=props.match.params.coursename;
     console.log('dd',courseName)
    const question={
                mainQ1:[
                    {title:"m1-->sub Q title 1" , vid:"si-KFFOW2gw"},
                    {title:"m1-->sub Q title 2" , vid:"sB7YGSbAIvQ"},
                    {title:"m1-->sub Q title 3" , vid:"sB7YGSbAIvQ"}
                ],
                mainQ2:[
                    {title:"m2-->sub Q title 1" , vid:"nZnMH5x6PfQ"},
                    {title:"m2-->sub Q title 2" , vid:"rFnWoTnoC50"},
                    {title:"m2-->sub Q title 3" , vid:"ndfz-biPdZ0"}
                ]
            }   
            console.log(question)
            const [vid,uid]= useState(question[courseName][0].vid )
            const [title,utitle]= useState(question[courseName][0].title)
            
            const renderVideo=()=>{
                return(
                    <>
                    <h1>{title}</h1>
                    <div>
                        <iframe 
                            title="v"
                            width="453" 
                            height="480" 
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
                <h1>{courseName}</h1>
                {renderVideo()}
                <div >
                {   
                    question[courseName].map((item)=>{
                        
                        return <Link to={props.match.url +"/" +item.vid}
                                key={item.title} 
                                // className="collection-item"
                                onClick={()=>{
                                uid(item.vid)
                                utitle(item.title)
                        }}
                        >{item.title}</Link>
                    })
                }
                </div>

            </div>
        )
    }

export default CourseStructure