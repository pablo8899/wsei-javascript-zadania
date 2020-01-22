document.addEventListener('DOMContentLoaded', (event) => {

    var button = document.querySelector("form");

    button.addEventListener("submit",function (event) {
        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;
        var agree = document.getElementById("agree").checked;

        ClearError();
        var err = "";
        if(!email.includes("@"))
            err += LogError("Email musi posiadać znak @");

        if(name.length <= 6)
            err += LogError("Twoje imię jest za krótkie");

        if(surname.length <= 6)
            err += LogError("Twoje nazwisko jest za krótkie");
        
        if(!(pass1 == pass2 && pass1.length != 0 && pass2.length != 0))
            err += LogError("Hasła nie są takie same lub puste");

        if(!agree)
            err += LogError("Musisz zaakceptować warunki");

        if(err != "")
            event.preventDefault();
    });

    function LogError(err)
    {
        return document.querySelector(".error-message").innerText += document.querySelector(".error-message").innerHTML.trim().length != 0 ? "\n" + err :  err;
    }

    function ClearError()
    {
        document.querySelector(".error-message").innerText = "";
    }


});