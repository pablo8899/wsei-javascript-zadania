document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll(".deleteBtn");
    buttons.forEach(element => {
        element.addEventListener("click",function(){
            var e = this.parentElement.parentElement;
            e.remove();
        });
    });
});