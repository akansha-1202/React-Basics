const head1 = React.createElement("h1", {
    id: "head1"
}, "I am h1 tag");
const head2 = React.createElement("h2", {
    id: "head2"
}, "I am h2 tag");
const child = React.createElement("div", {
    id: "child"
}, [
    head1,
    head2
]);
const parent = React.createElement("div", {
    id: "parent"
}, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
