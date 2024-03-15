// const heading = React.createElement(
//   "h1", //Element
//   { id: "heading", className: "head" }, //Attributes
//   "Hello World from Javascript!!" //Content that you have to put inside element
// );
// // type: "h1"  ,
// //props : {id:"heading", class:"head", children : "Hello World from Javascript!!"}
// console.log("heading : ", heading); //return an object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//render method is rendering heading object into div has id = "root" by converting it into "h1" HTML tag
//ReactElemnt(object) ==> HTML(Browser understands)

/*
<div id="parent">
   <div id="child">
      <h1 id="head1">I am h1 tag</h1>
      <h2 id="head2">I am h2 tag</h1>
   </div>
</div>
*/
const head1 = React.createElement("h1", { id: "head1" }, "I am h1 tag");
const head2 = React.createElement("h2", { id: "head2" }, "I am h2 tag");
const child = React.createElement("div", { id: "child" }, [head1, head2]);
const parent = React.createElement("div",{id:"parent"}, child)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

