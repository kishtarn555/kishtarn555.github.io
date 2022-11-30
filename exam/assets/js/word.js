function load() {
    $.get("https://random-word-api.herokuapp.com/word", function s(data) {        
        
        console.log(data);
        let more =data[0]
        
        $("#content").html(more)
    }); 
}

$(document).ready(load);