const INIT = 0;
const TYPING =1;
const OPERATION =2;

let state = INIT;
const panel = $("#panel");  

function updateState(val) {
    state=val;
    if (state==INIT) {
        panel.addClass("text-warning")
        panel.removeClass("text-light")
    }  else {
        
        panel.removeClass("text-warning")
        panel.addClass("text-light")
    }
}

function reset() {
    updateState(INIT);
    $("#panel").text("Calculadora")
}
reset();



function number() {
    let num = $(this).text();    
    if (state == INIT) {
        updateState(TYPING);
        panel.text(num);
        return;
    }    
    
    updateState(TYPING);
    panel.text(panel.text()+num);
}

function operation() {
    let operation = $(this).text();    
    if (state===OPERATION) {        
        updateState(OPERATION);
        let text = panel.text().slice(0, -1);        
        text+=operation;
        panel.text(text);
        return;
    }
    updateState(OPERATION);
    panel.text(panel.text()+operation);
}

function back() {
    if (state===INIT)
        return;
    let text = panel.text();
    text=text.slice(0,-1);    
    if (text.length===0) {
        reset();
        return;
    }
    if (
        text.charAt(text.length-1) ==="+"
        || text.charAt(text.length-1) ==="*"
        || text.charAt(text.length-1) ==="÷"
        || text.charAt(text.length-1) ==="-"
    ) {
        updateState(OPERATION);
    }
    panel.text(text);
    updateState(TYPING);
}

function dot() {    
    if (state==INIT) {
        panel.text("0");
    }
    panel.text(panel.text()+".");    
    updateState(TYPING);

}

function equals() {
    str = panel.text();
    str=str.replace(/÷/g,"/");
    str=str.replace(/x/g,"*");
    str=str.replace(/(?<=[^\*\+\-\/])\(/g,"*(");
    str=str.replace(/\)(?=[^\*\+\-\/])/g,")*");
    try {
        updateState(INIT);
        panel.text(eval(str))        
    } catch (error) {
        panel.text("ERROR")
    }
}
$("#ac").click(reset);

$("#back").click(back);
$("#dot").click(dot);

$("#b0").click(number);
$("#b1").click(number);
$("#b2").click(number);
$("#b3").click(number);
$("#b4").click(number);
$("#b5").click(number);
$("#b6").click(number);
$("#b7").click(number);
$("#b8").click(number);
$("#b9").click(number);

$("#bl").click(number);
$("#br").click(number);

$("#divi").click(operation);
$("#adds").click(operation);
$("#subs").click(operation);
$("#mult").click(operation);

$("#eqls").click(equals);

