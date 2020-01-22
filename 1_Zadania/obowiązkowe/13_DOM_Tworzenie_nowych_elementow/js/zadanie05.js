document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll(".moveBtn");
    var list1 = document.querySelector("#list1");
    var list2 = document.querySelector("#list2");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            var e = event.target.parentElement;
            if(e.parentElement == list1)
            {
                list2.appendChild(e);
            } else {
                list1.appendChild(e);
            }
        });
    });
});