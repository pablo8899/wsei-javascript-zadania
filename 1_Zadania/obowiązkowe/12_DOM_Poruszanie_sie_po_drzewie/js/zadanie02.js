document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(element => {
        element.addEventListener("click",function(){
            var e = this.parentElement;
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            e.style.backgroundColor = randomColor;
        });
    });
});