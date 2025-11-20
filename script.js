// Função de mudança de cor criada 
function mudarCorContainer() {
    const container = document.querySelector(".container");
    container.style.backgroundColor = "lightblue";
}

// Função para limpar o input e o resultado — adicionada por João Lucena
function limpar() {
    const input = document.getElementById("valor");
    const resultado = document.getElementById("resultado");
    input.value = "";
    resultado.innerText = "";
    input.focus();
}

function converter() {
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

    const resultado = document.getElementById("resultado");
    resultado.classList.remove("resultado-placeholder");
    resultado.innerText = "Resultado: " + valor;
}

const selectDe = document.getElementById("de");
const selectPara = document.getElementById("para");
const botao = document.getElementById("btnConverter");

function verificarSelecao() {
    if (selectDe.value && selectPara.value) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

selectDe.addEventListener("change", verificarSelecao);
selectPara.addEventListener("change", verificarSelecao);
