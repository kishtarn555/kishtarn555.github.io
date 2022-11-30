const spanish = new Map([ 
    ["skills-algorithm-desc", "Algoritmos de grafo como Prim, Tarjan, Dijkstra, A*, etc. \n Mi punto fuerte son estructura de datos como lo son los arboles binarios balanceads aumentados."],
    ["experience-competitive", "Seis años de programación competitiva. <br> Obtuve un rating de 2140 en codeforces, bicampeón de la OMI, medallista de bronce en la IOI y ganador de honores en la ICPC WF 2022."],
    ["today", "hoy"],
    ["python", "He usado python en un ambiente laboral."],
    ["cpp", "Usado en programación competitiva."],
    ["csharp", "Gran cantidad de proyectos personales."],
    ["meta-exp", "Trabaje en infraestructura de datos. Use principalmente Python y como medio secundario PHP, SQL."],
    ["meta-verano", "Boston USA - Verano 2022"],
    ["experience-intro", "Sigo estudiando, pero he tenido oportunidad de obtener experiencia:"],
    ["skills-description", "Aquí estan las habilidad que tengo y los lenguajes de programación que conozco"],    
    ["skills-algorithm", "Algoritmos intermedios"],
    ["skills-data", "Estructura de datos"],   
    ["hw-description", "Lista de tareas:"],
    ["contact-name", "Nombre completo:"],
    ["contact-phone", "Teléfono:"],
    ["contact-birth", "Fecha de nacimiento:"],
    ["contact-address", "Dirección:"],

    ["footer-madeby", "Esta página fue hecha por Héctor Ricárdez"],
    ["index-presentation", "Hola, mi nombre es Héctor Fernando Ricárdez Lara y este es mi portafolio de programador. Aquí puedes encontrar todo lo que he hecho hasta ahora. Puedes usar la barra de navegación superior para ver mis proyectos escolares, los personales y también mi experiencia laboral."],
    ["index-presentation2", "Actualmente estudio mi quinto semestre en la Universidad Panamericana para obtener un título en Ingeniería en Inteligencia Articilial. Además, estoy persiguiendo mi segunda participación en el ICPC World Finals."],    
    ["index-presentation3", "Me encanta programar, disfruto crear algo usando mi creatividad y la satisfacción al resolver los desafíos que aparecen en el transcurso"],
    ["index-presentation4", "Explora:"],
    ["nav-contact", "Contacto"],
    ["nav-home","Inicio"],
    ["nav-homework","Tarea"],
    ["nav-projects","Proyectos"],
    ["nav-skills","Habilidades"],
    ["nav-wdone", "Mi trabajo"],
    ["nav-experience","Experiencia"],

    ["projects-karel-txt", "Realicé dos PR al proyecto de código abierto conocido como Karel.js. Arreglé un bug por un undefined inesperado."],
    ["projects-arduino", "Video Compuesto NTSC desde un Arduino [C++]"],
    ["projects-arduino-txt", "Usando una placa de Arduino, cree la señal NTSC necesaria para mostrar imagines a blanco y negro en un televisor."],
    ["projects-arduino-txt2", "Fue necesario contar la duración de los ciclos del programa para generar la señal NTSC con los tiempos correctos."],    
    ["projects-intro", "Aquí encontrarás los proyectos en los que he trabajado. Cada que tengo tiempo realizó un proyecto de lo que me llame el interés en ese momento, una temporada fue el hardware de bajo nivel, otra la generación procedural de videojuegos."],
    ["projects-minecraft-txt", "Una librería de C# que ofrece herramientas para le creación y manipulación de contenido de Minecraft mediante código. Algunas de sus características son:"],
    ["projects-minecraft-nbt", "Manipulación de archivos NBT."],
    ["projects-minecraft-structure", "Manipulación de estructuras y archivos mcstructure."],
    ["projects-minecraft-image", "Conversión de imágenes a mcstructure con algoritmos de dithering."],
    ["projects-logicsim","Simulador Lógico de Circuitos [C#]"],            
    ["projects-logicsim-txt","Simulación de circuitos electónicos a nive lógico. Incluye:"],            
    ["projects-logicsim-i1","Soporte para un nuevo lenguaje de script que crea los circuitos."],
    ["projects-logicsim-i2","Circuito de una RAM de un 1KB diseñado por mi."],
    ["projects-logicsim-i3","Otros cicruitos pequeños."],

    ["title-portfolio", "Portafolio"],
    ["utils-hector", "Héctor Fernando Ricárdez Lara"],        
    
]);

const english = new Map([   
    ["skills-algorithm-desc", "Graph algorithms such as Prim, Tarjan, Dijkstra, A*, etc. \n My strong point are data structures such as agumented balanced binary trees."],
    ["experience-competitive", "Six years of competitive programming.<br> Acheived a codeforces rating of 2140, twice-winner of OMI, bronze medalist at IOI and honors at ICPC WF 2022"],
    ["today", "today"],
    ["python", "Got real experience at work."],
    ["cpp", "Used for competitive programming."],
    ["csharp", "Developed with it a large amount of personal projects."],  
    ["meta-exp", "Worked on data infrastructure. Used mainly Python and some PHP and SQL."],
    ["meta-verano", "Boston USA - Summer 2022"],
    ["experience-intro", "I'm still at university but I've had some experience. It has been:"],   
    ["skills-description", "Here I have the skills and programming languages I know"],
    ["skills-algorithm", "Intermidiate Algorithms"],
    ["skills-data", "Intermidiate Data Structures"],
    ["hw-description", "Homework list:"],
    ["contact-name", "Full name:"],
    ["contact-phone", "Phone number:"],
    ["contact-birth", "Birthdate:"],
    ["contact-address", "Address:"],

    ["footer-madeby", "This website was made by Hector Ricardez:"],
    ["index-presentation", "Hi, I'm Hector Fernando Ricardez and this is my programming portfolio. Here you can find everything I've done so far. You can use the navigation bar at the top to see my school projects, personal ones and also my work experience."],
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
    ["projects-karel-txt", "Made two PR to open source project known as Karel.js. I fixed a long lasting bug related to an unexpected undefined"],
    ["projects-arduino", "NTSC Composite Video from Arduino [C++]"],
    ["projects-arduino-txt", "Using an arduino board, we created the signal to generate a black and white image using the NTSC protocol."],
    ["projects-arduino-txt2", "Counting the length of the cycles of the Atmega2560, we are able to create a composite video signal following the correct timings."],
    ["projects-intro", "Here you can find all the coding projects I've worked on. Whenever I have time, I work on a project of a topic in which I'm interested, some time it was low level hardware, and now is procedural content for videogames."],
    ["projects-minecraft-txt", "A C# library that offers a set of tools for the creation and manipulation of Mincraft content via code. Some of its features are:"],
    ["projects-minecraft-nbt", "Nbt file manipulation."],
    ["projects-minecraft-structure", "Mcstructure file manipulation."],
    ["projects-minecraft-image", "Converts from images to mcstructure files using dithering algorithms."],
    ["projects-logicsim","Circuit Logic Simulator [C#]"],            
    ["projects-logicsim-txt","Emulation of electrical circuits a logical level. It includes:"],            
    ["projects-logicsim-i1","Support for new Script Language that creates the circuits."],
    ["projects-logicsim-i2","Circuit for a 1KB RAM designed by me."],
    ["projects-logicsim-i3","Some other minor circuits."],
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
        $(`[it8n="${key}"]`).html(value)

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