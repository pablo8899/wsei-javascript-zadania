document.addEventListener('DOMContentLoaded', (event) => {
    var btn = document.querySelector("[class='btn btn-primary']");

    var apple = document.querySelector("[alt='Apple']");
    var ubuntu = document.querySelector("[alt='Ubuntu']");
    var windows = document.querySelector("[alt='Windows']");

    apple.style.display = "none";
    ubuntu.style.display = "none";

    btn.addEventListener("click", (event) => {
        var e = document.querySelector(".form-control").value;
        switch (e) {
            case "Windows":
                windows.style.display = "";
                apple.style.display = "none";
                ubuntu.style.display = "none";
                break;
            case "Os X":
                windows.style.display = "none";
                apple.style.display = "";
                ubuntu.style.display = "none";
                break;
            case "Ubuntu":
                windows.style.display = "none";
                apple.style.display = "none";
                ubuntu.style.display = "";
                break;
        
            default:
                break;
        }
        event.preventDefault();
    });

});