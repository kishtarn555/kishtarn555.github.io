let news;
function getPanel(data,index) {
    
return `
<h3>${data.header}</h3>
<p>${data.summary}</p>
<a class="btn btn-primary">Leer más</a>
`;

}


function load() {
    $.get("/exam/fakeapi/noticias.json", function s(data) {        
        news=data;
        console.log(data);
        let more =""
        for (let i =0; i < data.length; i++) {
            more+='<div class="col-xs-12 border p-2 fancy-title">'+getPanel(data[i])+"</div>";
        }
        $("#content").html(more)
    }); 
}

$(document).ready(load);