// example 1 simple flow
// createElement accepts 3 arguments 1st htmlnode(tag), 2nd props/attributes and lastly childerns


const messagenode = React.createElement('div', {
    id: 'test'
}, "Hello I am here learning React as a begnier");
console.log(messagenode)
const getroot = ReactDOM.createRoot(document.getElementById('root'));

// getroot.render(messagenode);

// example 2 what if we have complex doms as expected  in industries
//  ex 
//  <div id="parent">
//      <div id="child">
//         <h1></h1>
//     </div>   
//  </div>   


const nestednode = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {
    id: "h1"
}, "hello I am nested tag"), React.createElement("h6", {
    id: "h6"
}, "hello I am nested tag2")]),React.createElement("div", {
    id: "child2"
}, [React.createElement("h1", {
    id: "h1"
}, "hello I am nested tag"), React.createElement("h6", {
    id: "h6"
}, "hello I am nested tag2")])])

console.log(nestednode)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(nestednode);