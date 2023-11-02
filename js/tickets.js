function calcularTotal() {
    var categoria = document.getElementById("categoria").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precioUnitario;
    
    if (categoria === "estudiante") {
        precioUnitario = 50;
    } else if (categoria === "trainee") {
        precioUnitario = 75;
    } else if (categoria === "junior") {
        precioUnitario = 100;
    } else {
        alert("Selecciona una categoría válida.");
        return;
    }

    var total = cantidad * precioUnitario;

    if (cantidad > 5) {
        total *= 0.9;
    }

    document.getElementById("total").innerHTML = "Total a Pagar: $" + total.toFixed(2);
}