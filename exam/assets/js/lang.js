const spanish = new Map([
    ["footer-madeby", "Esta página fue hecha por Héctor Ricárdez"],
    ["index-presentation", "Hola, mi nombre es Héctor Fernando Ricárdez Lara y este es mi portafolio de programador. Aquí puedes encontrar todo lo que he hecho hasta ahora. Puedes usar la barra de navegación superior para ver mis proyectos escolares, los personales y también mi experiencia laboral."],
    ["index-presentation2", "Actualmente estudio mi quinto semestre en la Universidad Panamericana para obtener un título en Ingeniería en Inteligencia Articilial. Además, estoy persiguiendo mi segunda participación en el ICPC World Finals."],    
    ["index-presentation3", "Me encanta programar, disfruto crear algo usando mi creatividad y la satisfacción al resolver los desafíos que aparecen en el transcurso"],
    ["index-presentation4", "Explora:"],
    ["nav-contact", "Contacto"],
    ["nav-home","Inicio"],
    ["nav-homework","Tareas"],
    ["nav-projects","Proyectos"],
    ["nav-skills","Habilidades"],
    ["nav-wdone", "Mi trabajo"],
    ["nav-experience","Experiencia"],
    ["title-portfolio", "Portafolio"],
    ["utils-hector", "Héctor Fernando Ricárdez Lara"],        
    
]);

const english = new Map([
    ["footer-madeby", "This website was made by Hector Ricardez:"],
    ["index-presentation", "Hi I'm Hector Fernando Ricardez and this is my programming portfolio. Here you can find everything I've done so far. You can use the navigation bar at the top to see my school projects, personal ones and also my laboral experience."],
    ["index-presentation2", "I'm currently studying my fifth semester at Universidad Panamerica to get my Engineering Degree in Artifial Intelligence. And I\'m also  seeking my second ICPC World Finals participation."],
    ["index-presentation3", "I love programming, I enjoy creating something from my creativity as well as the satisfaction when I solve the challenges that pop up along the way."],
    ["index-presentation4", "Start exploring:"],
    ["nav-contact", "Contact"],
    ["nav-experience","Experience"],
    ["nav-home","Home"],
    ["nav-homework","Homework"],
    ["nav-projects","Projects"],
    ["nav-skills","Skills"],
    ["nav-wdone", "My work"],
    ["title-portfolio", "Portfolio"],    
    ["utils-hector", "Hector Fernando Ricardez Lara"],    
]);


function getLanguange() {
    if (window.localStorage["lang"]) {
        return window.localStorage["lang"]
    } else {
        return window.localStorage["lang"] = "es"
    }
}

function it8n() {
    language = getLanguange();
    let dictionary = {};
    
    if (language === "es") {
        dictionary= spanish;
        $("#spanish").removeClass("btn-secondary")
        $("#spanish").addClass("btn-primary")
        $("#english").addClass("btn-secondary")
        $("#english").removeClass("btn-primary")
    } else if (language === "en") {
        
        $("#english").removeClass("btn-secondary")
        $("#english").addClass("btn-primary")
        $("#spanish").addClass("btn-secondary")
        $("#spanish").removeClass("btn-primary")
        dictionary = english;
    }
    for (let [key, value] of dictionary) {
        $(`[it8n="${key}"]`).text(value)

    }

}

function changeEnglish() {
    window.localStorage["lang"]="en"
    it8n();
}
function changeSpanish() {
    window.localStorage["lang"]="es"
    it8n();
}

$("#spanish").click(changeSpanish);
$("#english").click(changeEnglish);

$(document).ready(
    ()=>{
        it8n();
    }

)