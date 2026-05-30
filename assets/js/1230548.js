// Confirma que o JavaScript foi carregado
console.log("HealthEquipManager carregado");

// Obtém o formulário através do ID
const formulario = document.getElementById("formEquipamento");

// Escuta o evento de submissão
formulario.addEventListener("submit", function(evento) {

    // Impede o comportamento padrão
    evento.preventDefault();

    console.log("Formulário submetido");

});