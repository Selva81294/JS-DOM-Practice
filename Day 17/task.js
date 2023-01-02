console.log(document);
let newElement = document.createElement("h1");
document.body.append(newElement);

function counter10(fn){
    newElement.innerText = 10;
    fn();
}
function counter9(fn) {setTimeout(function(){
    newElement.innerText = 9;
},1000);
fn();}

function counter8(fn) {setTimeout(function(){
    newElement.innerText = 8;
},2000);
fn();}

function counter7(fn) {setTimeout(function(){
    newElement.innerText = 7;
},3000);
fn();}

function counter6(fn) {setTimeout(function(){
    newElement.innerText = 6;
},4000);
fn();}

function counter5(fn) {setTimeout(function(){
    newElement.innerText = 5;
},5000);
fn();}

function counter4(fn) {setTimeout(function(){
    newElement.innerText = 4;
},6000);
fn();}

function counter3(fn) {setTimeout(function(){
    newElement.innerText = 3;
},7000);
fn();}

function counter2(fn) {setTimeout(function(){
    newElement.innerText = 2;
},8000);
fn();}

function counter1(fn) {setTimeout(function(){
    newElement.innerText = 1;
},9000);
fn();}

function counter0() {setTimeout(function(){
    newElement.innerText = "HAPPY INDEPENDENCE DAY";
},10000)}

counter10(()=>{
    counter9(()=>{
        counter8(()=>{
            counter7(()=>{
                counter6(()=>{
                    counter5(()=>{
                        counter4(()=>{
                            counter3(()=>{
                                counter2(()=>{
                                    counter1(()=>{
                                        counter0();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
newElement.style.color= "red";
newElement.style.textAlign = "center";
newElement.style.marginTop = "300px"
newElement.style.fontSize = "60px";
newElement.style.fontFamily ="cursive"
