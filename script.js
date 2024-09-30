let macasCompradas = Number(prompt("Quantas maçãs foram compradas?"))
let precoMaca  

if(macasCompradas < 12){
    precoMaca = 1.30
}else{
    precoMaca = 1.00
}

let custoTotal = macasCompradas * precoMaca
let custoTotalf = custoTotal.toFixed(2)
alert("O cursto total é "+custoTotalf)