import React , {Component} from 'react';
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import Home from './component/layout/Home/Home';
import Question from './component/question/Question';
import SubQuestion from './component/question/subquestion/SubQuestion';

class App extends Component{
 
  render(){
    return(
      <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/question" exact component={Question} />
        <Route path="/:id" component={SubQuestion}/>
      </Switch>    
      </BrowserRouter>
      </div>
    )
  }
}
export default App;




// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import CourseStructure from './components/CourseStructure';
// class App extends Component {

// render()
// { 

//   return (
//     <div className="App">
//         <BrowserRouter>  
//           <Switch>
//               <Route path="/" exact component={Home} />

//               <Route path="/:coursename" component={CourseStructure} />
//           </Switch>
//         </BrowserRouter>
//     </div>

//   );
// }
// }
// export default App