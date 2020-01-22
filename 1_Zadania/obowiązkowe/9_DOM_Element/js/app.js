document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //Zadanie 0
    function getDatasInfo(link)
    {
        var retArray = [];
        for (var key in Array.from(link))
        {
            retArray.push(link[key].getAttribute("data-color"));
        }

        return retArray;
    }
    console.log(getDatasInfo(links));

    //Zadanie 1
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

    LogClassNameAndTag(homeElement);
    LogClassNameAndTag(banner);
    LogClassNameAndTag(links);
    iterateArray(blocks);
    iterateArray(childElements);

    //Zadanie 2
    //InnerHTML Zawiera znaczniki bez diva a outerhtml z divami
    blocks.forEach(element => {
       console.log(element.innerHTML);
       console.log(element.outerHTML);
       element.innerHTML = "Nowa wartość diva o klasie blocks";
    });


    //Zadanie 3
    var idMainFooter = document.getElementById("mainFooter");

    function getId(object)
    {
        return object.getAttribute("id");
    }

    console.log(getId(idMainFooter));
    

    //Zadanie 4

    function getTags(elements)
    {
        var retArray = [];

        Array.from(elements).forEach(element => {
            retArray.push(element.tagName);
        });

        return retArray;
    }
    console.log(getTags(childElements));


    //Zadanie 5
    function getClassInfo(element)
    {
        return element.classList;
    }

    console.log(getClassInfo(banner));
    

    //Zadanie 6
    var navList = document.querySelectorAll("nav li");

    function setDataDirection(elements)
    {
        elements.forEach(element => {
            if(element.getAttribute("data-direction") == null)
            {
                element.setAttribute("data-direction","top");
            }
        });
    }

    setDataDirection(navList);
});
