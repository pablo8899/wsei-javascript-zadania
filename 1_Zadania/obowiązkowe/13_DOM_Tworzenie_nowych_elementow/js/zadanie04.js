document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.getElementById("remove");
    button.addEventListener("click", (event) => {
        var child = document.querySelectorAll(".list li");
        child.forEach(element => {
            element.remove();
        });
    });
});