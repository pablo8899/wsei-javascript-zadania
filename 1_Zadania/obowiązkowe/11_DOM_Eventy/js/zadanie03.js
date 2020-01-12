document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll('button');
    
    let pElements = document.querySelectorAll("span");
    for(let i=0; i< buttons.length;i++)
    {
        buttons[i].addEventListener("click", function() {
            
        let pElements = document.querySelectorAll("p");
        pElements[i].querySelector("span").innerText = parseInt(pElements[i].querySelector("span").innerText) + 1;
        });
    }
});