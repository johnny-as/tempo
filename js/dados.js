var estado = document.querySelector("#nome-estado");

function inserirDados(temperatura){
    var nome = temperatura.name;
    var tempI = temperatura.main.temp;
    return estado.textContent = nome+", "+tempI+"º";
}