// console.log("hiii...");
const container=document.getElementById("root");

console.log(container);

const root=ReactDOM.createRoot(container);

const h2=React.createElement('h2',{style:{color:'red'}},"welcome to app devlopment...");

const h1=React.createElement('h1',
    {style:{color:'black'}},
    "ABES Engineering College");

const image=React.createElement('img',
    {src:'https://imgs.search.brave.com/s3nLjxW5Y9M5eX3N_xVct3vHl73tqVwCjRHBYkGKgVY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaW0t/Z2F5LW51djdwOGM1/dTl0cHZrYm4uanBn',
        style:{height:'200px',
            width:'200px',
            display:'block',
            margin:'auto'}})

const div=React.createElement('div',
    {style:{backgroundColor:'cyan',
        border:'2px solid red',
        // display:'flex',
        // justifyContent:'centre'
    }},
    h1,h2,image);

const h21=<h2>Hello World</h2>

root.render(div);                //usually takes single elememt but array can help give multiple element because array is trated as a single element