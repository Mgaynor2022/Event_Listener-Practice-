const square = document.getElementsByClassName("square");
square.addEventListener("mouseover",function(){
    square.style.color = "blue"
})

square.addEventListener("mousedown", function(){
    square.style.color = "red"
})

square.addEventListener("mouseup", function(){
    square.style.color = "yellow"
})

square.addEventListener("dbclick", function(){
    square.style.color = "green"
})

square.addEventListener("wheel", function(){
    square.style.color = "orange"
})

