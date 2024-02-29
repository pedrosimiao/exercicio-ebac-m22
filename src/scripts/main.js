AOS.init();

const dataDoEvento = new Date("Oct 11, 2024 16:20:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); 
    // (data evento - data atual) / (segundo * minuto * hora * dia)

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    // horasAteOEvento = resto da divisão entre a distância em dias até a data futura (retorna a fração de dias), 
    //                   dividido pelo número de milisegundos que resulta em uma hora.
    
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    // minutosAteOEvento = resto da divisão entre a distância em horas até a data futura (retorna a fração de horas), 
    //                     dividido pelo número de milisegundos que resulta em um minuto.

    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    // segundosAteOEvento = resto da divisão entre a distância em minutos até a data futura (retorna a fração de minutos), 
    //                      dividido pelo número de milisegundos que resulta em um segundo.

document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado';
}

}, 1000);