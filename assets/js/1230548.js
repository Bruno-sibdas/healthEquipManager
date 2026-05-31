// Confirma carregamento do JavaScript
console.log("HealthEquipManager carregado");

// Obtém elementos da página
const formulario = document.getElementById("formEquipamento");

const mensagemSistema = document.getElementById("mensagemSistema");

const tabelaEquipamentos = document.getElementById("tabelaEquipamentos");

// Contador de IDs
let proximoId = 3;

// Evento submit
formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    mensagemSistema.innerHTML = "";

    // Recolha dos dados
    const nome = document.getElementById("nomeEquipamento").value;

    const categoria =
        document.getElementById("categoriaEquipamento").value;

    const estado =
        document.getElementById("estadoEquipamento").value;

    const localizacao =
        document.getElementById("localizacaoEquipamento").value;

    // Validações
    if (nome.trim() === "") {

        mensagemSistema.innerHTML = `
            <div class="alert alert-danger">
                O nome do equipamento é obrigatório.
            </div>
        `;

        return;
    }

    if (localizacao.trim() === "") {

        mensagemSistema.innerHTML = `
            <div class="alert alert-danger">
                A localização é obrigatória.
            </div>
        `;

        return;
    }

    // Criação da nova linha
    const novaLinha = `
        <tr>

            <td>${proximoId}</td>

            <td>${nome}</td>

            <td>${categoria}</td>

            <td>${estado}</td>

            <td>${localizacao}</td>

            <td>

                <button class="btn btn-warning btn-sm me-2">
                    Editar
                </button>

                <button class="btn btn-danger btn-sm btn-remover">
                    Remover
                </button>

            </td>

        </tr>
    `;

    // Adiciona à tabela
    tabelaEquipamentos.innerHTML += novaLinha;

    // Incrementa ID
    proximoId++;

    // Mensagem de sucesso
    mensagemSistema.innerHTML = `
        <div class="alert alert-success">
            Equipamento registado com sucesso!
        </div>
    `;

    // Limpa formulário
    formulario.reset();

});

// Remoção de equipamentos
tabelaEquipamentos.addEventListener("click", function(evento) {

    // Verifica se foi clicado um botão remover
    if (evento.target.classList.contains("btn-remover")) {

        // Confirmação do utilizador
        const confirmar =
            confirm("Pretende remover este equipamento?");

        if (confirmar) {

            // Procura a linha da tabela
            const linha =
                evento.target.closest("tr");

            // Remove a linha
            linha.remove();

            // Mensagem Bootstrap
            mensagemSistema.innerHTML = `
                <div class="alert alert-warning">
                    Equipamento removido com sucesso.
                </div>
            `;
        }
    }

});