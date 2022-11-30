let news;

function loadNews(index) {
    $("#modal").removeAttr("hidden");
    $("#modal-h").text(news[index].header);
    $("#modal-text").text(news[index].complete);
}
function getPanel(data,index) {
    
return `
<h3>${data.header}</h3>
<p>${data.summary}</p>
<a class="btn btn-primary" onclick="loadNews(${index})">Leer más</a>
`;

}


function load() {
    $.get("https://raw.githubusercontent.com/kishtarn555/kishtarn555.github.io/main/exam/fakeapi/noticias.json", function s(data) {        
        data=JSON.parse(data)
        news=data;
        console.log(data);
        let more =""
        for (let i =0; i < data.length; i++) {
            more+='<div class="col-xs-12 border p-2 fancy-title">'+getPanel(data[i],i)+"</div>";
        }
        $("#content").html(more)
    }); 
}

$(document).ready(load);