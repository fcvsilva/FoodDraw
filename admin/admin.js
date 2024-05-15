// food_draw/frontend/admin/admin.js

/*
Lógica para a tela de administração do componente customizado Food Draw.
*/

document.getElementById('categoria').addEventListener('change', function() {
    const categoria = this.value;
    // Aqui você pode adicionar a lógica para buscar os registros da categoria selecionada
    console.log('Categoria selecionada:', categoria);
    // Exibir os registros da categoria selecionada na div "resultado"
    document.getElementById('resultado').innerHTML = `Registros de ${categoria}`;
});
