//prompt
// let elementName = prompt("Hi! How are you?","");
// if(elementName != null)
// {
//     prompt("I'm fine! How is your course going?");
// }
//-----------------------------------
// creating a element                              ------> important concept
let newElement = document.createElement('h1');
document.body.append(newElement);
//innerText (*immportant*)
newElement.innerText = "I'm from JS";          
newElement.style.backgroundColor = "aqua";
//innerHTMl (code must within ``) (*important*)
document.body.innerHTML = 
`<div>
    <h1 style="background-color: red; color: yellow">I'm inner HTML</h1>    
</div>`
newElement.innerHTML =
`<div>
    <h1 style="background-color: yellow; color: red">I'm inner HTML</h1>    
</div>` 
// --------------------------
//set attribute
newElement.setAttribute("class","create-class")
//----------------------------------
//Get element by id:
// let inbuildElement= document.getElementById("newID");
// inbuildElement.innerText= "Dom intro over ID";
// inbuildElement.style.backgroundColor="red";

//--------------------------------------------------
//difference b/w innertext and textcontent
let sampletext = document.getElementById("para");
// console.log("innerText: ", sampletext.innerText);
// console.log("textContent: ", sampletext.textContent);
//---------------------------------------------------------
//Query Selector
// let querySelector =document.querySelector("#sample-id-2");
// querySelector.style.color = 'blue';
// let queryElement = document.querySelector(".sample-class");
// queryElement.style.color = 'red';  //-----it takes only first class in qusrySelector 

//Query SelectorAll
let queryAllElement = document.querySelectorAll(".sample-class");
console.log(queryAllElement);           //-----it takes all similar classes in one single array qusrySelector   
for(i=0; i<queryAllElement.length; i++){
    queryAllElement[i].style.color = "green";
}
//------------------------------------------------------------
//append vs appendChild
//append
const newDivision = document.createElement("div");
newElement.append(newDivision,"I'm a new string");
newDivision.setAttribute("id", "append-sample");
newDivision.innerText = "I'm append Content"
console.log(newDivision);
//appendChild
// newElement.appendChild(newDivision,"I'm a new string");


//If we need data dynamically;
// let elementName = prompt("Hi! How are you?","");
// if(elementName != null)
// {
//     newElement.innerText= elementName;
// }


console.log(document);









