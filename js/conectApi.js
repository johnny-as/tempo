var botaoAdicionar = document.querySelector("#buscar-temperatura");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=-23.36&lon=-46.84&appid=95c79131314a8f5cc064001c2e317903";
    
    xhr.open("GET", url);

    //var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            //erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var temperatura = JSON.parse(resposta);
            console.log(temperatura);

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