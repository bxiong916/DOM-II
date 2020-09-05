// Your code goes here

//Event dbclick - spins image 360 degrees
const yellowBus = document.querySelector(".intro").querySelector("img");

// console.log(yellowBus);
yellowBus.addEventListener("dblclick", () => {
    
//yellowBus.style.animation = 'rotation 3s infinite linear';
yellowBus.style.transform = "rotate(360deg)";
yellowBus.style.transition = "transform 1s";
});

// Event Mouseover - blue border for img
const boatImg = document.querySelector('.content-section.inverse-content img');
console.log("hello");
boatImg.addEventListener('mouseover', (event) => {
    event.target.style.border = 'solid blue 10px';
});

// Event Keydown - pressing # changes background color

document.addEventListener('keydown', (event) => {
    if (event.key == '1'){
        document.body.style.backgroundColor = 'red';
    }
    if (event.key == '2'){
        document.body.style.backgroundColor = 'green';
    }
    if (event.key == '3'){
        document.body.style.backgroundColor = 'blue';
    }
    if (event.key == '4'){
        document.body.style.backgroundColor = 'yellow';
    }
    if (event.key == '5'){
        document.body.style.backgroundColor = 'grey';
    }
    if (event.key == '6'){
        document.body.style.backgroundColor = 'purple';
    }
    if (event.key == '7'){
        document.body.style.backgroundColor = 'orange';
    }
    if (event.key == '8'){
        document.body.style.backgroundColor = 'pink';
    }
    if (event.key == '9'){
        document.body.style.backgroundColor = 'brown';
    }
    if (event.key == '0'){
        document.body.style.backgroundColor = 'white';
    }
})


//Event contextmenu
const welcomeP = document.querySelector(".home").querySelector("p");
// console.log (welcomeP);
welcomeP.addEventListener("contextmenu", () => {
    welcomeP.textContent = "...";
});

const imgSelector = document.getElementsByClassName("img-content");
console.log(imgSelector);
//console.log (imgSelector);

//Event scroll
const adventureImage = imgSelector[0];
console.log(adventureImage);
//console.log(adventureImage)
window.addEventListener("scroll", () => {
    adventureImage.style.transform = "scale(1)";
});

//Events click
adventureImage.addEventListener("click", () => {
    adventureImage.style.transform = "scale(.10)";
});

//Event drag
const adventureP = document.querySelectorAll("p")[1];
console.log(adventureP);
//console.log (adventureP);
adventureP.addEventListener("drag", () => {
    adventureP.style.color = "red";
    adventureP.style.fontSize = "2rem";
});

//Event dragend
adventureP.addEventListener("dragend", () => {
    adventureP.style.color = "black";
});

// Event Mouseenter
const mainTopText = document.querySelector("h1");
mainTopText.addEventListener('mouseenter', (event) => {
    console.log('line 26')
    document.querySelector("h1").textContent = "The Magic Shool Bus";
});

// Event Mouseleave
mainTopText.addEventListener('mouseleave', (event) =>
document.querySelector("h1").textContent ="Fun Bus");

// Event Mouseup
mainTopText.addEventListener('mouseup', (event) => 
document.querySelector("h1").textContent = "Bus Fun");
const letsGo = document.querySelector("h2")[1];
console.log(letsGo);
