import React from "react";
import "./App.css";

function App() {
  let msg = "Welcome to the React JS!"; //let or const, never use var because it will make it global and will cause security issues
  let age = 20;
  let n1 = 10;
  let n2 = 20;
  let langs = ["JavaScript", "Python", "Java", "C++", "Dart","C"]; //array of strings
  let lang = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "C++" },
    { id: 5, name: "Dart" },
    { id: 6, name: "C" },
  ]

  return (
    <div>
      <h1> Welcome to React JS</h1>
      <h1>{msg}</h1>
      <h1>{"Age=${age}"}</h1> //interpolation
      <h1>{"Sum = ${n1+n2}"}</h1> //jssx expression
      <h1>
        {langs.map((item,index) => (
          <li key={index}>{item}</li> //important for listings to have a key value
        ))}
      </h1>
      <h1>
        {lang.map((obj) => (
            <li key={obj.id}>{obj.lang}</li> //using id as key
        ))}
      </h1>
    </div>
  );
}

export default App;
//statemt  or expression difference - expression is stamenet which evaluates something
//rendering process fast