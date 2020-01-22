document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.getElementById("remove");
    button.addEventListener("click", (event) => {
        document.getElementsByTagName("body")[0].children[0].remove();
    });
});