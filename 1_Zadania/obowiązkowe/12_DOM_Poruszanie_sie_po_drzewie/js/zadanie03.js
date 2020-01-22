document.addEventListener('DOMContentLoaded', (event) => {
    var lists = document.querySelectorAll(".listContainer");
    lists.forEach(element => {
        element.addEventListener("mouseover",function(){
            var e = this.querySelector("ul").children;
            var elements = Array.from(e);
            elements.forEach(element => {
                console.log(elements);
                if(elements.indexOf(element) == 0)
                {
                    element.style.backgroundColor = "red";
                } 
                else if(elements.indexOf(element) == elements.length-1)
                {
                    element.style.backgroundColor = "blue";
                } 
                else 
                {
                    element.style.backgroundColor = "green";
                }
            });
        });

        element.addEventListener("mouseleave",function(){
            var e = this.querySelector("ul").children;
            var elements = Array.from(e);
            elements.forEach(element => {
                element.style.backgroundColor = "";
            });
        });
    });
});