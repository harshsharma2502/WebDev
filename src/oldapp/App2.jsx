// import React from 'react'
// //import './App.css'

// function App() {
//   let n1=20;
//   let n2=30;
//   let lang =[
//     {id: 1,lang:"JavaScript"},
//     {id: 2,lang:"Python"},
//     {id: 3,lang:"Java"}
//   ];
//   return (<React.Fragment> 
//   <h1>Welcome come to react JS</h1>
//   <h1>by kiet institute</h1>
//   <h1>{`Sum =${n1+n2}`}</h1>
//   <h2>{lang.map((obj) =>
//    <li key={obj.id}>{obj.lang}</li>)
//   }
//   </h2>
//   </React.Fragment>
//   // <>This is also a type to return tags</>
//   // <div> </div> 
//   )
    
//   }

// export default App

 import TopHeader,{SubHeader} from "../components/Header"
 import Content from "../components/Content"
 import Footer from "../components/Footer"
 import Devansh from "../components/Devansh"
 import MCA from "../components/MCA"
 import KIET from "../components/KIET"
function App() {
return(
  <div>
    {/* <TopHeader />
    <SubHeader/>
    <Content /> 
    <Footer/> */}
    <Devansh />
    <MCA />
    <KIET />
  </div>
)
}

export default App
// {Header()}  this can't be rendered when event or property or paramter is to be passed.
// <Header> This is another method</Header>
// <Header /> empty tag
// <Content /> which function have return tag, reuse is valid and is the main way.
// default got special permission to change name of imported but not in case of normal can change name with only alias.


