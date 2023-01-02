fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
 //all data here
// .then((data)=>console.log(data))
//3rd data name is pakistan
// .then((data)=>console.log(data[3].name.common))  
.then((data)=>{
//using forloop
   /*  for(i=0;i<data.length;i++)                  
    console.log(data[i].name.common); */
//using forEach method (exact same as map method)
    /* data.forEach((element,id) => {         
        console.log(element.name.common, id);     
    }); */
    // console.log(data);
//using map method(id gives index)(simple method for me)
    data.map((value,id)=>{     
//for name                      
        // console.log(value.name.common,id); 
//for flag
        // console.log(value.flag,id);
//for Capital
        // console.log(value.capital,id);
//for Region
        // console.log(value.region,id);
//for Latlng
        // console.log(value.capitalInfo.latlng,id);
//for Country codes
        // console.log(value.cca3,id) 

//Destructuring concept
    const countryRequired = {
        ...value,
        name : value.name.common,
        flag: value.flags.png,
        Capital: value.capital,
        Region: value.region,
        Latlng: value.capitalInfo.latlng,
        codes: value.cca3
    }
        createCountryName(countryRequired);
        fetchWether(countryRequired);
}) 
})

function createCountryName({name,flag,Capital,Region,Latlng,codes}){
    document.body.innerHTML += 
    `<div class = "container">
    <div class = "info">
    <h2 id="head">${name}</h2>
    <img class="flag" src="${flag}" alt="">
    <h3><span>Country Capital:</span> ${Capital}</h3>
    <h3><span>Country Region:</span> ${Region}</h3>
    <h3><span>Country Latlng:</span> ${Latlng}</h3>
    <h3><span>Country Code:</span> ${codes}</h3>
    <button class = "btn">Click for Whether</button>
    <textarea name="" id="text" cols="30" rows="10"> </textarea>
    </div>
    </div>`

}


function fetchWether({Capital}){
var temp=[];
//API: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cf3f5a9bcb598a78dc13d454ceab932c
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}
     &APPID=cf3f5a9bcb598a78dc13d454ceab932c&units=metric`)
    .then((response)=>response.json())
    .then((data)=>{
        temp.push(data);
        temp.map((val)=>{
        console.log(val);
            const whetherRequired = {
                ...val,
                temp1: val.main.temp,
                temp_max:val.main.temp_max,
                temp_min:val.main.temp_min,
            }
            
            click(whetherRequired);
/* console.log(val.main.temp)
   console.log(val.main.temp_max)
   console.log(val.main.temp_min) */
        
        })
       })
    }

 function click({temp1,temp_max,temp_min}){
    const result = document.getElementById(text);
    result.innerText  =
            `Temp(°C): ${temp1}
        Temp_Min(°C): ${temp_min}
        Temp_Max9°C: ${temp_max}`   

} 







