document.addEventListener("DOMContentLoaded", function () {
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

    var li2 = document.querySelectorAll("div[class='exercise ex2'] ul li");
    li2[0].innerHTML += "Paweł Wójsik";
    li2[1].innerHTML += "Zielony";
    li2[2].innerHTML += "Tatar";

    var li3 = document.querySelectorAll("div[class='exercise ex4'] ul li");

    var e = 0;
    li3.forEach(element => {
        e++;
        element.setAttribute("data-id",e);
    });
});