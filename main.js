let search = document.getElementById('searchBtn')
let inputt = document.getElementById('search')
let natija = document.getElementById('natija')
let harorat = document.getElementById('harorat')
let tip = document.getElementById('tip')
let london = document.getElementById('london')

let m = 0
const child = (url, temp, city) => {
    let box = document.createElement("div")
    box.innerHTML = ` <div class="history">
        <h4 id="davlatHis" class="font-family: 'Inconsolata', monospace;">${city} </h4>
        <p id="haroratHis">${temp} °C     <img src="${url}" alt="">
        </p>
        <p id="statusHis"></p>   
    </div>`
    m =m+1
    return box
    
}


function qidiruv(e) {
    let shahar = inputt.value
    natija.style.display = "inline-block"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${shahar}&appid=647cfe605726adfa4eee54b79485f3ac`)
        .then(response => response.json())

        // .then(data => {console.log(data);} );
        .then(data => {
            const { weather } = data
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            harorat.innerHTML = `Hozir ${shahar} shahridagi  havo-harorati ${Math.floor(data.main.temp - 273)} <img class="tip" src="${icon}" alt="">C'`
            let histories = document.getElementById('histories')

            histories.append(child(icon, Math.floor(data.main.temp - 273), shahar ))
            if(m>2){
                histories.firstChild.remove()
            }
        });
        
    inputt.value = ""
}
















// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${shahar.value}&appid=647cfe605726adfa4eee54b79485f3ac`)
//     .then(response => response.json())
//     .then(data => {console.log(data);} );
