console.log("hello world");
// alert("Welcome to our website");

let a= 23;
let b= "23";
let c;
console.log(a===b);


 function name(params) {
    a= "Hello";
    b="World";
    console.log(a+" "+b);
}

name();

let myPromise = new Promise(function(reject, resolve){
// alert("hello world");
reject=console.error("server 404 not found");
});
myPromise.then(((value)=>{
 alert("ok")
}));

