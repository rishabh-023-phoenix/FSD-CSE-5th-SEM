// const sum=function(a,b){
//     return a+b;
// }

// const sum=(a,b)=>{return a+b}

// (()=>{
//     console.log("hey...using IIFE")
// })();

// var a=23;
// // console.log(typeof a)
// if(a>20){
//     var a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)


// let a=23;
// // console.log(typeof a)
// if(a<40){
//     let a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)

// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Hiiii "+msg+" your result is = "+result)
// }
// msgWithSum(sum,"rishabh")

function login(error,msg){
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(msg)
    }
}
function loginHandler(username,password,clbk){
    if (username=="ptomer40" && password=="122345"){
        clbk(null,"login Success")
    }
    else{
        clbk("username or password is incorrect",null)
    }
} 
loginHandler("ptomer40","122345",login)