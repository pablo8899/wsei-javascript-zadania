document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.querySelector("#addBtn");
    var table = document.querySelector("#orders tbody");

    var orderId = document.getElementById("orderId");
    var item = document.getElementById("item");
    var quantity = document.getElementById("quantity");

    button.addEventListener("click",function(){
        if(orderId.value == "" || item.value == "" || quantity.value == "")
        {
            alert("Uzupełnij wszystkie pola");
        } else {
            var tr = document.createElement("tr");
            var td = null;
    
            td = document.createElement("td");
            td.innerText = orderId.value;
            tr.appendChild(td);
    
            td = document.createElement("td");
            td.innerText = item.value;
            tr.appendChild(td);
    
            td = document.createElement("td");
            td.innerText = quantity.value;
            tr.appendChild(td);
            
            table.appendChild(tr)
        }
    });
});