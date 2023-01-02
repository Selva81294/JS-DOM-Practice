let newHTMLCode = document.body.innerHTML = `
 <div class="container">
        <div class="btn">
            <button onclick="preBtn()" id="btn1">prev</button>
            <button onclick="activeList(event)" type="button" class="link active" value="1" id="btn1">1</button>
            <button onclick="activeList(event)" type="button" class="link" value="2" id="btn1">2</button>
            <button onclick="activeList(event)" type="button" class="link" value="3" id="btn1">3</button>
            <button onclick="activeList(event)" type="button" class="link" value="4" id="btn1">4</button>
            <button onclick="activeList(event)" type="button" class="link" value="5" id="btn1">5</button>
            <button onclick="activeList(event)" type="button" class="link" value="6" id="btn1">6</button>
            <button onclick="nextBtn()" id="btn1">next</button>
        </div>
    </div>`
let link = document.getElementsByClassName("link");
let currentValue = 1;
function activeList(event){
    for(i of link){
        i.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value; 
}
function preBtn(){
    if(currentValue>1){
        for(i of link){
            i.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}
function nextBtn(){
    if(currentValue<6){
        for(i of link){
            i.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");
    }
}


