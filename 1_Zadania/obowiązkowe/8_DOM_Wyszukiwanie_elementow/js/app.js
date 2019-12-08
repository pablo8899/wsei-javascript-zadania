document.addEventListener("DOMContentLoaded", function () {
//Zadanie 0 Atrybut data
var title = document.getElementsByClassName("title")[0];

function getDataAnimation(element)
{
    var zmienna = element.getAttribute("data-animation");
    return zmienna;
}
console.log(getDataAnimation(title));

//Zadanie 1
var id = document.getElementById("home");
var id2 = document.querySelector('#home');
console.log(id);
console.log(id2);
var li = document.querySelectorAll("ul li[data-direction]")[0];
console.log(li);
var classBlock = document.querySelectorAll("div.block")[0];
console.log(classBlock);
//Zadanie 2
var liArray = document.getElementsByTagName("nav");
console.log(liArray.length);
var paragraphArray = document.querySelectorAll("div");
console.log(paragraphArray.length);
var divArray = document.querySelectorAll("article div");
console.log(divArray.length);
//Zadanie 3
var tag = document.querySelector("article[class='first']");
console.log(tag.querySelectorAll("h2").length);
});

