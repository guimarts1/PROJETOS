const turnOn = document.getElementById('on');
const turnOff = document.getElementById('off');
const lamp = document.getElementById('lamp');

function verifyLampbreak(){
    return lamp.src.indexOf('lampada-queb') > -1
}

function lampOn(){
    if(!verifyLampbreak()){
        lamp.src = './img/lampada-lig.jpg';
    }
    off.style.display = 'block'
    on.style.display = 'none'
}

function lampOff(){
    if(!verifyLampbreak()){
        lamp.src = './img/lampada-desl.jpg';
    }
    off.style.display = 'none'
    on.style.display = 'block'
}
function lampBreak(){
    lamp.src = './img/lampada-queb.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreak);