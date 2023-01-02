// console.log(window);
// let newElement = document.createElement('div');
// document.body.append(newElement);
// newElement.innerHTML = '<P class = "newClass"></P> <P class = "newClass"></P> <P class = "newClass"></P> <P class = "newClass"></P> <P class = "newClass"></P>';
// let queryElement = document.querySelectorAll(".newClass");
// for(i=0;i<queryElement.length;i++){
//     queryElement[i].textContent = "I'm a new Para";
// }

console.log(document);
//---------------------------------------------
console.log(window.location.host);
// alert("hi there");
//window.location.reload();

//Alert
// for(i=0;i<6;i++){
//     if(i===3){
// //alert is used to alert the user at particular time 
//         alert("The loop has runed three times");
//     }
//     console.log(i);
// }

//prompt
// let elementName = prompt("Hi! How are you?","");
// if(elementName != null)
// {
//     prompt("I'm fine! How is your course going?");
// }

//confirm
// confirm("Are you sure you want to continue");

//replace
// location.replace("https://www.google.com/");

//onclick function
// function newFunction(){
//     prompt("Please enter ur name:");
// }

//setTimeout & clearTimeout:
// setTimeout(newFunction,5000);
let timer = document.createElement("h1");
document.body.append(timer);
let count = 0;
function timeoutFun(){
    count = count+1;
    timer.textContent = count;
    let id = setTimeout(timeoutFun,1000);
    if (count ==10){
        clearTimeout(id);           // clearTimeout is used to stop timeOut
        timer.textContent = "";
    }
}

//setInterval & clearInterval:
function timeIntervalFun(){
let Count = 10;
let ourInterval = setInterval(()=>{
    Count = Count-1;
    timer.textContent = Count;
    if (Count === 0){
        clearInterval(ourInterval);
        timer.textContent = "";
    }
},1000)
}
//////----------------------------------------
//clickEvent
let clickCounter = 0;
function clickEvent(){
    clickCounter++;
    console.log("You clicked this", clickCounter)
}
//--------------------------------------------
//changeEvent
let changeCounter = 0;
function changeEvent(){
    changeCounter++;
    console.log("You changed this", changeCounter)
}

//Add an Event
let eventAdd = document.getElementById("addEvent");
eventAdd.addEventListener("click",()=>{
    console.log("you have create a funtion");
})

//window events
//Scroll
window.addEventListener("scroll",()=>{
    console.log("I'm Scrolled")
    document.body.style.backgroundColor = "black";
})

//Resize
window.addEventListener("resize",(e)=>{
    console.log(e)
    timer.textContent = 
    `"The width of the screen is ${e.target.innerWidth}"
    "The height of the screen is ${e.target.innerHeight}"`
})

// //Mouse Events: 
// //Mouse down (at the moment of click mouse):
// let downMouse = document.getElementById("mouseDown")
// downMouse.addEventListener("mousedown",()=>{
//     document.body.style.backgroundColor = "black";
// })
// //MouseUp (at the moment of release mouse)
// downMouse.addEventListener("mouseup",()=>{
//     document.body.style.backgroundColor = "white";
// })

// //Mouse Move (at the moment of mouse movement)
// document.addEventListener("mousemove",(e)=>{
//     console.log(e);
//     //timer.textContent =`"The X-Coordinate is ${e.clientX} and the Y-Coordinate is ${e.clientY}"`
// });

//Keyboard Events:
//Keydown
window.addEventListener('keydown',(e)=>{
    console.log(e);
})               

window.addEventListener('keyup',(e)=>{
    console.log(e);
})   

//Form Events:
let inputArea = document.createElement("textarea");
document.body.append(inputArea);

let divArea = document.createElement("div");
document.body.append(divArea);

inputArea.setAttribute("id","tArea");

divArea.setAttribute("id","dArea");


//input event:
const maxCharAllowed = 200;
inputArea.addEventListener("input", ()=>{
    const allowedChar = maxCharAllowed - inputArea.value.length
    const styleColors = allowedChar < 20 ? "red" : "green";
    //divArea.textContent = `The Remaining Allowed Characters are ${allowedChar}`
    divArea.style.color = styleColors;
})
//submit event:
let sampleForm = document.getElementById("subID");
sampleForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted")
})


//Task 
//when u write in textArea and click submit button, need the written content display in screen
function displayContent(){
    divArea.textContent = inputArea.value;
}














