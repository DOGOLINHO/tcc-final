// Exemplo de armazenamento de horários agendados (deve ser substituído por lógica do servidor em produção)
var agendamentos = [
    { data: "2024-08-20", hora: "10:00" },
    { data: "2024-08-21", hora: "14:00" }
];

// Obter o modal de erro
var errorModal = document.getElementById("error-popup");

// Verificar se o horário já foi agendado
document.getElementById("agendamento-form").onsubmit = function(event) {
    event.preventDefault(); // Previne o envio do formulário para verificação

    var data = document.querySelector("input[name='data']").value;
    var hora = document.querySelector("input[name='hora']").value;

    var agendamentoExistente = agendamentos.find(function(agendamento) {
        return agendamento.data === data && agendamento.hora === hora;
    });

    if (agendamentoExistente) {
        // Se o agendamento já existe, exibe o popup de erro
        errorModal.style.display = "block";
    } else {
        // Se o horário está disponível, adicione ao array de agendamentos
        agendamentos.push({ data: data, hora: hora });

        // Agora pode exibir o modal de sucesso
        modal.style.display = "block";
    }
};

// Fechar o modal de erro quando o usuário clicar no <span> (x)
span.onclick = function() {
    modal.style.display = "none";
    errorModal.style.display = "none";
};

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
};
