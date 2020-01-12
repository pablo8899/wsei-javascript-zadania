
document.addEventListener('DOMContentLoaded', (event) => {
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

//Kod przy przeniesieniu sekcji script do sekcji head wywouje błąd ponieważ strona nie została wcześniej załadowana 
//Po dodaniu eventu skrypt zostanie wykonany po załadowaniu strony 