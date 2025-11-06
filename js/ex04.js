function N(){
    var numero=parseInt(prompt("Digite um numero para a sequencia de fibonacci:"))

    for(var a=0,b=1,c=0,i=1;i<numero;i++){
        c=a+b
        a=b
        b=c
        alert(a)
    }
}