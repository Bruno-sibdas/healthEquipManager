// Confirma que o JavaScript foi carregado
console.log("HealthEquipManager carregado");

// Obtém o formulário
const formulario = document.getElementById("formEquipamento");

// Obtém a área de mensagens
const mensagemSistema = document.getElementById("mensagemSistema");

// Escuta a submissão do formulário
formulario.addEventListener("submit", function(evento) {

    // Impede o envio do formulário
    evento.preventDefault();

    // Limpa mensagens anteriores
    mensagemSistema.innerHTML = "";

    // Obtém os valores dos campos
    const nome = document.getElementById("nomeEquipamento").value;

    const localizacao = document.getElementById("localizacaoEquipamento").value;

    // Validação do nome
    if (nome.trim() === "") {

        mensagemSistema.innerHTML = `
            <div class="alert alert-danger">
                O nome do equipamento é obrigatório.
            </div>
        `;

        return;

    }

    // Validação da localização
    if (localizacao.trim() === "") {

        mensagemSistema.innerHTML = `
            <div class="alert alert-danger">
                A localização é obrigatória.
            </div>
        `;

        return;

    }

    // Mensagem de sucesso
    mensagemSistema.innerHTML = `
        <div class="alert alert-success">
            Equipamento validado com sucesso!
        </div>
    `;

});