document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(element => {
        element.addEventListener("click",function(){
            var e = this.nextElementSibling;
            if(e.style.visibility == "hidden")
                e.style.visibility = ""
            else
                e.style.visibility = "hidden";
        });
    });
});