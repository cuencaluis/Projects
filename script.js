let addToButton = document.getElementById("Todo");
let todoContainer = document.getElementById("todocontainer");
let inputField = document.getElementById("inputField");

addToButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = "╚ "+inputField.value;
    if(inputField.value.length == 0){
        return;
    }
    todoContainer.appendChild(paragraph);
    paragraph.classList.add("paragraph-styling");
    inputField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        todoContainer.removeChild(paragraph);
    })
});

function play(){
    var tanga = document.getElementById("Todo");
    var sound = document.getElementById("sounds");
    
    sound.play();

}
function DeleteAll() {
    
    todoContainer.innerText = "";


}

