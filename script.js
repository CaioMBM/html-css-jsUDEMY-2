const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency')
const result = document.getElementById('result')

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
}