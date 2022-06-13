function escolhaEstado(){
    
    var estado = $("#estados").val();

    switch (estado) {
        case 'Acre':
            var lat = -9;
            var lon = -70;
            return `${lat}&lon=${lon}`;
        case 'Alagoas':
            var lat = -13.8;
            var lon = -47.8167;
            return `${lat}&lon=${lon}`;
        case 'Amapá':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Amazonas':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Bahia':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Ceará':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Brasília':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Espírito Santo':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Goiás':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Maranhão':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Mato Grosso':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Mato Grosso do Sul':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Minas Gerais':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Pará':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Paraíba':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Paraná':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Pernambuco':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Piauí':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Rio de Janeiro':
                var lat = -23.5475;
                var lon = -46.6361;
                return `${lat}&lon=${lon}`;
        case 'Rio Grande do Norte':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Rio Grande do Sul':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Rondônia':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Roraima':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Santa Catarina':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'São Paulo':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Sergipe':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        case 'Tocantins':
            var lat = -23.5475;
            var lon = -46.6361;
            return `${lat}&lon=${lon}`;
        default:
            return "erro";
    }
}