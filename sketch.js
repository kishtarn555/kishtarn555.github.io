let img;
const countries = {
    "Belize": [255, 106, 0, 255],
    "Argentina": [76, 255, 0, 255],
    "Morocco": [127, 51, 0, 255],
    "Nigeria": [0, 0, 255, 255],
    "Germany": [255, 0, 0, 255],
    "Croatia": [0, 255, 255, 255],
    "Azerbaijan": [255, 0, 191, 255],
    "Turkey": [0, 153, 151, 255],
    "Bangladesh": [196, 196, 0, 255],

}
function preload() {

    img = loadImage('map.png');

}
function setup() {
    let cnv = createCanvas(1080, 700);
    cnv.style('display', 'block'); // Setting the canvas display property to block
    cnv.style('margin', 'auto'); // Setting the margin property to auto
    image(img, 0, 0)
}

function draw() {

}

function dst2(a, b) {
    let d0=a[0]-b[0];
    let d1=a[1]-b[1];
    let d2=a[2]-b[2];
    return d0*d0+d1*d1+d2*d2;
}

function mouseClicked() {
    // Get the color of the pixel at the mouse position
    let c = get(mouseX, mouseY);
    for (let country in countries) {
        if (dst2(countries[country], c) < 30) {
            console.log(country);            
            window.location.href=country;
            break;
        }
    }

    // Print the RGB values of the color to the console
    console.log(c);

}