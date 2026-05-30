// Confirma que o JavaScript foi carregado
console.log("HealthEquipManager carregado");

// Obtém o formulário
const formulario = document.getElementById("formEquipamento");

// Escuta a submissão do formulário
formulario.addEventListener("submit", function(evento) {

    // Impede o comportamento normal do formulário
    evento.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById("nomeEquipamento").value;

    const localizacao = document.getElementById("localizacaoEquipamento").value;

    // Verifica se o nome está vazio
    if (nome.trim() === "") {

        alert("O nome do equipamento é obrigatório.");

        return;

    }

    // Verifica se a localização está vazia
    if (localizacao.trim() === "") {

        alert("A localização é obrigatória.");

        return;

    }

    // Se chegou aqui, a validação passou
    alert("Equipamento validado com sucesso!");

});