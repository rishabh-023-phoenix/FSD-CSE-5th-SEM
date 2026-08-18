
const container=document.getElementById("container");
const button=document.getElementById("btn");

function resume(){
    container.innerHTML=`
    <div class="container">
    <h2>RISHABH KUMAR</h2>
    <p><b><u>ABES Engineering College</u></b></p>
    <hr>
    <h3>8868847839</h3>
    <hr>
    <p>E-mail: <b>rishabh.24b0101008@abes.ac.in</b></p>
    </div>
    `
    
}
button.addEventListener("click",resume);