document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    function getDatasInfo(elements)
    {
        var retArray = [];
        console.log();
        for (var key in Array.from(elements))
        {
            retArray.push(key.getAttribute("data-color"));
        }
    }
    getDatasInfo(links);
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

});
