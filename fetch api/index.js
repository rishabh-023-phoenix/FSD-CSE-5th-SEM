const root=document.getElementById("container");
const button=document.getElementById("btn");
const disp=document.getElementById("disp");
const loader=document.getElementById("loader");

async function fetchdata(){
    
    try{
        loader.innerHTML="<h2 style=color:red>Loading Data....</h2>";
        const serverData= await fetch("https://fakestoreapi.com/products");
        const jsonData=await serverData.json();
        // console.log(jsonData[0].title);
        // console.log(serverData);
        // disp.innerHTML=`${jsonData[0].title}`;
        let table=`<table border=2px>
        ${
            jsonData.map((ele)=>(
                `<tr>
                <td><img src=${ele.image} height=200 width=200></img></td>
                <td>${ele.title}</td>                  //template literal interpolation
                <td>${ele.description}</td>
                <td>${ele.price}</td>
                </tr>`
            ))

        }
        </table>`
        disp.innerHTML=table;

    }
    catch(e){
        console.log("Error is "+e);
    }
    finally{
        loader.innerHTML='';

    }
}
button.addEventListener("click",fetchdata);