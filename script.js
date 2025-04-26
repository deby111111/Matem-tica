document.addEventListener('DOMContentLoaded', () => {
    const valorInput = document.getElementById('valor');
    const unidadeInicialSelect = document.getElementById('unidade-inicial');
    const unidadeFinalSelect = document.getElementById('unidade-final');
    const converterBotao = document.getElementById('converter');
    const resultadoDiv = document.getElementById('resultado');

    converterBotao.addEventListener('click', () => {
        const valor = parseFloat(valorInput.value);
        const unidadeInicial = unidadeInicialSelect.value;
        const unidadeFinal = unidadeFinalSelect.value;

        if (isNaN(valor)) {
            resultadoDiv.textContent = 'Por favor, digite um valor numérico.';
            return;
        }

        const valorEmSegundos = converterParaSegundos(valor, unidadeInicial);
        const resultado = converterDeSegundos(valorEmSegundos, unidadeFinal);

        resultadoDiv.textContent = `${valor} ${converterTexto(unidadeInicial)} é igual a ${resultado} ${converterTexto(unidadeFinal)}.`;
    });

    function converterParaSegundos(valor, unidade) {
        switch (unidade) {
            case 'segundos':
                return valor;
            case 'minutos':
                return valor * 60;
            case 'horas':
                return valor * 60 * 60;
            case 'dias':
                return valor * 60 * 60 * 24;
            case 'semanas':
                return valor * 60 * 60 * 24 * 7;
            case 'meses':
                return valor * 60 * 60 * 24 * 30.44; // Aproximação média
            case 'anos':
                return valor * 60 * 60 * 24 * 365.25; // Considera anos bissextos
            default:
                return NaN;
        }
    }

    function converterDeSegundos(valorEmSegundos, unidadeFinal) {
        switch (unidadeFinal) {
            case 'segundos':
                return valorEmSegundos;
            case 'minutos':
                return valorEmSegundos / 60;
            case 'horas':
                return valorEmSegundos / (60 * 60);
            case 'dias':
                return valorEmSegundos / (60 * 60 * 24);
            case 'semanas':
                return valorEmSegundos / (60 * 60 * 24 * 7);
            case 'meses':
                return valorEmSegundos / (60 * 60 * 24 * 30.44);
            case 'anos':
                return valorEmSegundos / (60 * 60 * 24 * 365.25);
            default:
                return NaN;
        }
    }

    function converterTexto(unidade) {
        switch (unidade) {
            case 'segundos':
                return 'segundos(s)';
            case 'minutos':
                return 'minuto(s)';
            case 'horas':
                return 'hora(s)';
            case 'dias':
                return 'dia(s)';
            case 'semanas':
                return 'semana(s)';
            case 'meses':
                return 'mês(es)';
            case 'anos':
                return 'ano(s)';
            default:
                return '';
        }
    }
});