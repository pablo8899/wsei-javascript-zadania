document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    function getDatasInfo(link)
    {
        var retArray = [];
        for (var key in Array.from(link))
        {
            retArray.push(link[key].getAttribute("data-color"));
        }

        return retArray;
    }

    function LogClassNameAndTag(object)
    {
        console.log(object.className + "    " + object.tagName);
    }

    function iterateArray(object)
    {
        for (var key in Array.from(object))
        {
            LogClassNameAndTag(object[key]);
        }
    }

    //getDatasInfo(links);
    //LogClassNameAndTag(homeElement);
    //iterateArray(childElements);

    var idMainFooter = document.getElementById("mainFooter");

    function getId(object)
    {
        return object.getAttribute("id");
    }

    console.log(getId(idMainFooter));

    function getClassInfo(element)
    {
        var retArray = []; 
        
        retArray.push(link[key]);

        return retArray;
    }

    console.log(getClassInfo(banner));

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

});
