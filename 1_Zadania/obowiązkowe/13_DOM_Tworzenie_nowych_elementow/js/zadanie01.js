document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.querySelector(".button");
    var menu = document.querySelector(".menu");

    button.addEventListener("click",function(){
        var li = document.createElement("li");
        menu.appendChild(li)
        var count = document.querySelectorAll(".menu li").length;
        li.innerText = "Element " + count + " - w chwili dodania było  " + (count-1) + " elementów";
    });
});