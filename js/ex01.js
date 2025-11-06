function calcular(){

    var trab, p, li

    p = parseFloat(prompt("Nota do prova: "))
    trab = parseFloat(prompt("Nota do trabalho: "))
    li = parseFloat(prompt("Nota da lista: "))

    function notas(trab, p, li) {
    var result = (trab * 0.2) + (p * 0.7) + (li * 0.1)
    if(result >= 7){
        return("O aluno está APROVADO")
    }else if(result >=4 && result < 7){
        return("O aluno ficou para o EXAME")
    }
    else{
        return("Está REPROVADO, sem possibilidade de exame")
    }
}
function resultado(r){
    alert("O aluno está: " + r)
}

var mediaFinal = notas(trab, p, li)
resultado(mediaFinal)
}