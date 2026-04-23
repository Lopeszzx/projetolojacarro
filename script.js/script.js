function salvarCarros(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById('title');
    let preco = document.getElementById('preco');
    let marca = document.getElementById('marca');
    let modelo = document.getElementById('modelo');

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

    let lista = document.getElementById('listarCarros');

    let card = document.createElement('div');

    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";
}