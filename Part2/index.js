const colorInput = document.getElementById('colorInput')
const idInput = document.getElementById('idInput')

function setCard (){
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value

}

function reset(){
    console.log('string')
    let card = document.getElementById(idInput.value)
    idInput.value = ''
    colorInput.value = ''
    card.style.color = 'gray'
}