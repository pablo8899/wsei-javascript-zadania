document.addEventListener('DOMContentLoaded', (event) => {
    var invoiceData = document.querySelector("#invoiceData");
    invoiceData.style.display = "none";
    var invoice = document.querySelector("#invoice");

    invoice.addEventListener("change", (event) => {
        if(event.target.checked)
        {
            invoiceData.style.display = "";
        } else {
            invoiceData.style.display = "none";
        }
    });

});