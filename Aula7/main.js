let semaforo = "vermelho";

switch (semaforo) {
    case "verde":
        console.log("Sinal verde: pode passar");
        break;
    case "amarelo":
        console.log("Sinal amarelo: cuidado");
        break;
    case "vermelho":
        console.log("Sinal vermelho: pare");
        break;
    default:
        console.log("Sinal não identificado");
}