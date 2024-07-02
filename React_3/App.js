import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement ==> ReactElement(Object) ==> HTML Elemnet(When render component)
const heading = React.createElement("h1", { id: "head1" }, "I am h1 tag");


//JSX ==> HTML-like or XML-like syntax
//    ==> transpile before it reaches the JS engine ==> it is done by PARCEL
const jsxHeading = <h1 id="head1">Namaste React</h1>


//BOth are same things if you log heading or jsxHeading but writting in first method is not developer friendly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//Now we will not use React.createElement()