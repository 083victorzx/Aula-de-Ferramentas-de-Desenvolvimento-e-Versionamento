function converter() {
    //teste js dia 09/11
    let valor = parseFloat(document.getElementById("valor").value);
    let de = document.getElementById("de").value;
    let para = document.getElementById("para").value;

    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Digite um valor válido!";
        return;
    }

    // Converte "de" para Joules (J)
    if (de === "cal") valor *= 4.184;
    if (de === "kwh") valor *= 3600000;

    // Converte de Joules para a unidade final
    if (para === "cal") valor /= 4.184;
    if (para === "kwh") valor /= 3600000;

    document.getElementById("resultado").innerText = "Resultado: " + valor;
}
