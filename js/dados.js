function inserirDados(data){
    $("#img-temp").remove();
    $("#nome-estado").text(data.name+", "+parseInt(data.main.temp)+"º");
    $("#image").prepend('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png" id="img-temp">');
}