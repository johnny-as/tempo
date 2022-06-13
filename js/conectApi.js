$("#buscar-temperatura").click(buscarTemp);

function buscarTemp(event){
    event.preventDefault();
    var url = coordenadas(escolhaEstado());

    $.get(url, inserirDados);
    
}

function coordenadas(latLon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latLon}&units=metric&appid=95c79131314a8f5cc064001c2e317903`
}