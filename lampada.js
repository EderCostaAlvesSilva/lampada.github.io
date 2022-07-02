const on = document.getElementById('on');
const off = document.getElementById('off');

const lamp = document.getElementById('lamp');

function lampON(){
    if(!verifica()){
        lamp.src = 'imagens/ligada.jpg'
        }
}

function lampOFF(){
    if(!verifica()){
    lamp.src = 'imagens/desligada.jpg'
    }
}

function lampQuebrada(){
    lamp.src = 'imagens/quebrada.jpg'
}

function verifica(){
    return lamp.src.indexOf('quebrada') > -1
}
on.addEventListener('click', lampON)

off.addEventListener('click', lampOFF)

lamp.addEventListener('mouseover', lampON)
lamp.addEventListener('mouseout', lampOFF)
lamp.addEventListener('dblclick', lampQuebrada)





