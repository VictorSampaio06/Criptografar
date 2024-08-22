var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    outInput.innerHTML = `
        <textarea readonly id="output-textarea">${resultCripto}</textarea>
        <button class="btn-copiar" onclick="copiar('output-textarea')">Copiar</button>
    `;
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    outInput.innerHTML = `
        <textarea readonly id="output-textarea">${resultDescripto}</textarea>
        <button class="btn-copiar" onclick="copiar('output-textarea')">Copiar</button>
    `;
}

function copiar(id) {
    var textoCop = document.getElementById(id);

    if (textoCop) {
        textoCop.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Texto copiado!' : 'Falha ao copiar o texto.';
            alert(msg);
        } catch (err) {
            console.error('Erro ao copiar o texto: ', err);
        }
    } else {
        console.error('Elemento com o ID fornecido não encontrado.');
    }
}
