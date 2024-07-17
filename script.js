const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency')
const result = document.getElementById('result')
let valueConverted = 0


// Função de validação
function handleSubmit(e){
    e.preventDefault() // Serve para que não recarregue a página quando o formulário for enviado.

    // Prevenindo que seja enviando um valor vazio ou negativo
    if(!inputValue.value || inputValue < 0){
        alert('Informe um valor correto!')
        return
    } 
    // Caso não seja escolhido a moeda para conversão
    else if(!selectedCurrency.value){
        alert('Escolha uma moeda!')
        return
    }

    converter() // Só será feito a conversão se antes tiver sido passados os valores certos
}

// Função para converter a moeda
function converter(){
    // Convertendo para EURO - Cotação no dia 17/07/24
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value / 5.95
        result.innerHTML = valueFormatter('pt-br', 'EUR')
        
        animateResult()
    }
    // Convertendo para DÓLAR - Cotação no dia 17/07/24
    else if(selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value / 5.44
        result.innerHTML = valueFormatter('pt-br', 'USD')
        
        animateResult()
    }


    // Caso queira que após converter a moeda, os campos (input e select) sejam apagos os valores selecionados. Descomente essas linhas:
    // inputValue.value = ''
    // selectedCurrency.value = ''
}

// Função para formatar o valor
function valueFormatter(Locale, currency){
    const value = valueConverted.toLocaleString(`${Locale}`, {style: 'currency', currency: `${currency}`}) // 1º parâmetro é o locale
    return `${value}`                     // 2º parâmetro é para estilizar ("currency" indica que é a formatação monetária) e para indicar o tipo de moeda (vai receber a moeda que foi passada no select)

    // OBS 1: Se retirar o style: 'currency', irá exibir o valor convertido, mas sem o simbolo monetário.
    // OBS 2:  Se retirar o currency: `${currency}`, por algum motivo que não entendi, não aparece o resultado convertido e nem o simbolo monetário.
}

// Função para fazer a animação
function animateResult(){
    return result.animate([{transform: 'translateY(-20px)'}, {transform: 'translateY(0px)'}], {duration: 500})
}