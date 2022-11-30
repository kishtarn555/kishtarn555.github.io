
function parseHour(starttime, index) {
    let hour = Math.floor((starttime*2+index)/2+0.01);
    if (hour >=24)hour-=24;
    let left = hour < 10 ? `0${hour}`:`${hour}`;
    let right =  (Math.floor(starttime*2+index))%2===0?"00":"30";
    return left+":"+right;
}
function getIcon(data) {
    switch (data) {
        case "rainny":
            return '<h2 class="text-center bg-warning "><i class="bi bi-cloud-drizzle"></i> Llovizna</h2>';  
            break;              
        case "cloudy":            
                return '<h2 class="text-center bg-info"><i class="bi bi-cloud-sun"></i> Nublado</h2>';              
                break;
        case "sunny":            
            return '<h2 class="text-center bg-info"><i class="bi bi-brightness-high"></i> Soleado</h2>';             
            break;
            case "windy":            
                return '<h2 class="text-center bg-warning"><i class="bi bi-wind"></i> Ventarrón</h2>'; 
                break;
        case "tornado":            
            return '<h2 class="text-center bg-danger"><i class="bi bi-tornado"></i> TORNADO</h2>'; 
            break;
        default:
            return '<h2 class="text-center">ERROR</h2>'; 
            break;
    }
}

function getPanel(data, index) {
let hour = parseHour(data.firstPrediction, index)
let pred = data.predictions[index];
return `
${getIcon(pred.preditcion)}

<h4>${pred.temperature} °C</h4>
<p>${hour}</p>
<p>Probablidad de lluvia: ${pred.rain}%</p>
<p>Velocidad del viento: ${pred.wind} km/h</p>
`;

}


function load() {
    $.get("https://raw.githubusercontent.com/kishtarn555/kishtarn555.github.io/main/exam/fakeapi/weather.json", function getWeather(data) {
        data= JSON.parse(data);
        console.log(data);
        $("#location").text(data.location)
        $("#p0").html(getPanel(data,0))
        $("#p1").html(getPanel(data,1))
        $("#p2").html(getPanel(data,2))
        $("#p3").html(getPanel(data,3))
        let more =""
        for (let i =4; i < data.predictions.length; i++) {
            more+='<div class="col-xs-12 border">'+getPanel(data, i)+"</div>";
        }
        $("#more").html(more)
    });
}

$(document).ready(load);