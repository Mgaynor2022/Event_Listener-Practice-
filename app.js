document.getElementById("square").addEventListener('mouseenter', function() {
    this.style.backgroundColor = "blue"
});

document.getElementById("square").addEventListener('mousedown', function(){
    this.style.backgroundColor = "red"
});

document.getElementById("square").addEventListener('mouseup', function(){
    this.style.backgroundColor = "yellow"
});

document.getElementById("square").addEventListener('dbclick', function(){
    this.style.backgroundColor = "green"
});

document.getElementById("square").addEventListener('wheel', function(){
    this.style.backgroundColor = "orange"
});


// Key Press for all the colors 
document.addEventListener('keyup', function(event) {
    if (event.key == 'r') {
        document.getElementById("square").style.backgroundColor = "red"
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key == 'b') {
        document.getElementById("square").style.backgroundColor = "blue"
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key == 'g') {
        document.getElementById("square").style.backgroundColor = "green"
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key == 'o') {
        document.getElementById("square").style.backgroundColor = "orange"
    }
});