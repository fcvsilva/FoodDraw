// food_draw/frontend/cadastro/cadastro.js

/*
Lógica para a tela de cadastro do componente customizado Food Draw.
*/

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const url = document.getElementById('url').value;
    // Aqui você pode adicionar a lógica para enviar os dados de cadastro para o backend
    console.log('Nome:', nome);
    console.log('URL:', url);
    // Limpar os campos do formulário após o envio
    document.getElementById('nome').value = '';
    document.getElementById('url').value = '';
});
