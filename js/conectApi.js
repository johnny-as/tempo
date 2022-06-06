var botaoAdicionar = document.querySelector("#buscar-temperatura");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = coordenadas(escolhaEstado());
     
        xhr.open("GET", url);

        //var erroAjax = document.querySelector("#erro-ajax");
        xhr.addEventListener("load", function(){
            if (xhr.status == 200){
                //erroAjax.classList.add("invisivel");
                var resposta = xhr.responseText;
                var temperatura = JSON.parse(resposta);
                console.log(temperatura.name);
                console.log(temperatura.main.temp);
                inserirDados(temperatura);
                /* pacientes.forEach(function(paciente){
                    adicionaPacienteNaTabela(paciente);
                });*/
            }else{
                console.log(xhr.status);
                console.log(xhr.responseText);
                //erroAjax.classList.remove("invisivel");
            }
        });

        xhr.send();


});

function coordenadas(latLon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latLon}&units=metric&appid=95c79131314a8f5cc064001c2e317903`
}