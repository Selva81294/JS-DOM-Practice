//Callback Fuctions:
//Example 1:
// function mainFunction(callback){
//     console.log("Main Function Executed")
//     callback();
// }
// function callBackFun(){
//     console.log("Callback Function Executed")
// }
// mainFunction(callBackFun);

//Example 2:
// function registerHotel(callback){
//     console.log(Name);
//     callback();
// }
// function welcomeGuest(){
//     console.log(`Welcome ${Name}! What do you like to have?`);
// }

// let Name = "Selva";
// registerHotel(welcomeGuest);
//here welcomeGuest is callback function for registerHotel

//task (callback)
//person has to register, pick up a product, number of products, dispatch done, delivery made
function register(callback){
console.log("you have registered");
callback();
}
function pickUp(callback){
    console.log("pick up a product");
    callback();
}
function productCount(callback){
    console.log("number of products is 3");
    callback();
}
function dispatch(callback){
    console.log("Dispatch Done");
    callback();
}
function delivered(){
    console.log("Delivery Done");
}

register(()=>{
    pickUp(()=>{
        productCount(()=>{
            dispatch(()=>{
                delivered()
            })
        })
    })
})



