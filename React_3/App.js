import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement ==> ReactElement(Object) ==> HTML Elemnet(When render component)
const heading = React.createElement("h1", { id: "head1" }, "I am h1 tag");


//JSX ==> HTML-like or XML-like syntax
//    ==>Babel transpiles it to React.createElemnt before it reaches the JS engine ==> ReactElement-JS Object ==> HTMLElement(render)
//React Element
const jsxHeading = <h1 id="head1">Namaste React</h1>

//React Funtional Component

const Title = () => (
    <h1>Namaste React using JSX.</h1>
)
const HeadingCompo = () => (
  <div className="heading">
    <Title/>
    <h1 className="head">Namaste React Funtional Component</h1>
  </div>
);
 
//BOth are same things if you log heading or jsxHeading but writting in first method is not developer friendly
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingCompo/>);

//Now we will not use React.createElement()

