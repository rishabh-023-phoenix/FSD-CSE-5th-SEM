// console.log("Hello World");

const root=document.getElementById('container');
// console.log(root);
const button=document.getElementById("btn");
const h2=document.createElement('h2');
const img=document.createElement("img");
const div=document.createElement("div");

function showData(){

    try{
    // alert("hii...");
    h2.innerText="Welcome To DOM..";
    h2.style.color='red';
    h2.style.backgroundColor="cyan";

    img.src="https://imgs.search.brave.com/s3nLjxW5Y9M5eX3N_xVct3vHl73tqVwCjRHBYkGKgVY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaW0t/Z2F5LW51djdwOGM1/dTl0cHZrYm4uanBn";
    img.setAttribute("height",400);
    // img.setAttribute("width",800);
    img.style.width='100%';                     //styling image

    div.style.border="10px solid red";              //styling div
    div.style.backgroundColor="black";

    div.append(h2);         //adding element to div instead of root
    div.append(img);


    root.append(div);           //adding div to root
    // root.appendChild(img);
    // root.appendChild(h2);
    }
    catch(e){
        console.log(e);

    }
    finally{
            img.remove();  //remove an element

    }



}

button.addEventListener("click",showData);