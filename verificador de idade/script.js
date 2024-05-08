function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero='Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-masc.png')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-masc.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-masc.png')
            }
        } else if(fsex[1].checked) {
            genero ='Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-fem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-fem.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-fem.png')
            } else{
                //idoso
                img.setAttribute('src', 'idosa-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}