import React from 'react'
import { Link } from 'react-router-dom';

const Home=()=> {
        console.log("home")
        const question={
            mainquestion:[{name:'mainQ1'},{name:'mainQ2'}]
        } 
        
        return (

            <div>
                {question.mainquestion.map((nam,index)=>{
                    return( <Link to={{pathname:nam.name}} key={index}>
                                <h2>{nam.name} </h2>  
                            </Link>)
                })}

                {/* <Link to={{pathname:'reactjs'}}>
                    <h2>React js course --mainQ-1</h2> 
                </Link>
                <Link to={{pathname:'nodejs'}}>
                    <h2>node js course --mainQ-2</h2> 
                </Link> */}
 
            </div>
        )
    }
export default Home;