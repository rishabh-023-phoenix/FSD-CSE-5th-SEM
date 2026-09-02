// console.log("hiii...");
const container=document.getElementById("root");
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},"welcome to app devlopment...");
root.render(h2);