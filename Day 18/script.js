/* Promise
General Syntax:
new Promise((resolve, reject) => {
   
}) */
/* let taskCompletion = 80;
let promise = new Promise((resolve, reject) => {
    setTimeout(() =>{ if(taskCompletion >= 80) {
        resolve("Your Placement is Guaranteed");
    }
    else{
        reject("Sorry! You are not met your Task Completion target")
    }
    },3000);
}) */
/* console.log(promise);  //----->Pending State
setTimeout(()=>{
    console.log(promise)      //----------> here fulfilled or Reject state will appear
},3000) */

//.then , .catch uses:
/* promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}) */

//Multiple Promises (with no reject):
/* let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(25)
    },2000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(50)
    },4000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(100)
    },6000)
})
Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val);
}) */

//Multiple Promises (with reject):
/* let promise4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("4th promise is called");
        resolve(25)
    },8000)
})
let promise5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("5th promise is called");
        reject("Your promise is rejected")             //rejected here
    },10000)
})
let promise6 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("6th promise is called");
        reject("100")
    },12000)
})
Promise.all([promise4,promise5,promise6]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}) */


//Promise chain:
/* let newPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(25);
    },5000)
})
newPromise.then((val1)=>{
    console.log(val1);
    return val1*2
}).then((val2)=>{
    console.log(val2);
    return val2*3
}).then((val3)=>{
    console.log(val3);
}) */ 

//Await sync function:

//first we have to know how to create normal function to Promise
//normal function:
/* function changePromise(){
    console.log("Normal Function")
}
changePromise() */
//change to Promise
/* function changePromise(){
    return new Promise((resolve, reject) => {
        resolve("Promise function")
    })
}
changePromise().then((res)=>{
    console.log(res)
})
 */

//Exaples for Asyn-await Function:
function firstCall(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I'm a First Call")
        },2000)
    })
}
function secondCall(){
    console.log("I'm a Second Call")
}
function thirdCall(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I'm a Third Call")
        },5000)
    })
}
function fourthCall(){
    console.log("I'm a Fourth Call")
}
//Normal call function:
/* function main(){
    firstCall();
    secondCall();
    thirdCall();
    fourthCall();
}
main(); */

//Async-await function
// 2 rules (await function should be promise; async keyword should be place in before function)
/* async function main(){
    const first = await firstCall();
    console.log(first);
    secondCall();
    const third = await thirdCall();
    console.log(third);
    fourthCall();
}
main(); */

//Error handling Async-await (trycatch method):
//syntax
/* try {
    your codes.........
} catch (error) {
    console.log(error);
} */

/* async function main(){
    try {
        const first = await firstCall();
        console.log(first);
        secondCall();
        const third = await thirdCall();
        console.log(third);
        fourthCall();
    } catch (error) {
        console.log(error);
    }
   
}
main(); */

async function fetchData(){
    try {
        const response = await fetch ("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

 fetchData();





