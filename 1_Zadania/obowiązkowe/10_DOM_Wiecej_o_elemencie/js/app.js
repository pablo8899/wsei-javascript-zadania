document.addEventListener("DOMContentLoaded", function () {

    //Zadanie 0
    var li = document.querySelectorAll("div[class='exercise ex5'] ul li");
    var counter = 0;
    li.forEach(element => {
        if(counter % 2 === 0) {
            element.style.backgroundColor = "green";
        }

        if(counter === 5){
            element.classList.add("big");
        }

        if(counter % 3 === 0)
        {
            element.style.borderBottom = '3px solid red';
        }
        
        counter++;
    });

    //Zadnie 1
    //by nie nadpisać zmian js
    var li1 = Array.from(document.querySelectorAll("div[class='exercise ex1'], div:not([class])")).splice(1);
    var chrome = li1[0];
    var edge = li1[1];
    var firefox = li1[2];

    chrome.getElementsByClassName("chrome")[0].style.width = "100px";
    chrome.getElementsByTagName("a")[0].innerText = "Chrome";
    edge.getElementsByClassName("edge")[0].style.backgroundImage = 'url("assets/img/edge.png")';
    edge.getElementsByTagName("a")[0].setAttribute("href","https://microsoft.com/en-us/windows/microsoft-edge")
    
    firefox.getElementsByClassName("firefox")[0].style.backgroundImage = 'url(assets/img/firefox.png)';
    firefox.getElementsByTagName("a")[0].setAttribute("href","https://firefox.com")
    firefox.getElementsByTagName("a")[0].innerText = "Firefox";
   
    //Zadanie 2
    var li2 = document.querySelectorAll("div[class='exercise ex2'] ul li");
    li2[0].innerHTML += "Paweł Wójsik";
    li2[1].innerHTML += "Zielony";
    li2[2].innerHTML += "Tatar";

    //Zadanie 3
    var li3 = document.querySelectorAll("div[class='exercise ex3']");

    li3[0].getElementsByTagName("ul")[0].setAttribute("class","menu");

    document.querySelectorAll("div[class='exercise ex3'] li").forEach(element => {
        element.classList.add("menuElement");
    });
    var error = document.querySelectorAll("[class*='error']");
    error.forEach(element => {
        element.classList.remove("error");
    });
    //Zadanie 4
    var li4 = document.querySelectorAll("div[class='exercise ex4'] ul li");

    var e = 0;
    li4.forEach(element => {
        e++;
        element.setAttribute("data-id",e);
    });
});