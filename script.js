function CONTAR(){
    var ini= document.getElementById('txti')
    var fim= document.getElementById('txtf')
    var passo= document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! faltam dados!!!')
    }else{
       res.innerHTML='CONTANDO:'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if(p <= 0){
           window.alert('Passo invalido!considerando passo 1')
           p = 1
       }
       if(i < f){
           for(let c = i; c <= f ; c+= p){
           res.innerHTML += ` ${c} \u{1f449}`
       }
        res.innerHTML += `\u{1f3c1}`
    }else{
        for(let c = i ; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1f449}`  
        }
    }   res.innerHTML += `\u{1f3c1}`
}      
}