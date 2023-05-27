/* 
function formatarNumeroTelefone(input) {
    if (!input) {
        throw new Error("Input is null or undefined");
    }

    let numeroTelefone = input.value;
    let numeroTelefoneFormatado = "";

    if (numeroTelefone.length = 0) {
        numeroTelefoneFormatado += "(";
    }
    if (numeroTelefone.length = 2) {
        numeroTelefoneFormatado += numeroTelefone.substring(0, 2) + ") ";
    }
    if (numeroTelefone.length = 7) {
        numeroTelefoneFormatado += numeroTelefone.substring(2, 7) + "-";
    }
    if (numeroTelefone.length = 7) {
        numeroTelefoneFormatado += numeroTelefone.substring(7);
    }

    input.value = numeroTelefoneFormatado;
}
*/

// Função para mostrar/ocultar 'formato-aviso' do padrão 'telefone'
    var telefoneInput = document.getElementById('telefone');
    var formatoAviso = document.getElementById('formato-aviso');
    var contagemErro = 0;

    telefoneInput.addEventListener('input', function() {
        if (!this.validity.valid) {
            contagemErro++;
        } else {
            contagemErro = 0;
        }

        if (contagemErro >= 11) {
            formatoAviso.style.display = 'block';
        } else {
            formatoAviso.style.display = 'none';
        }
    });