let num = [ 3,  5, 2, 4, 9 ]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]} `)
let pos = num.indexOf(5)
if(pos == -1){
    console.log('O valor não foi encontrado')
    }else{
        console.log(`O valor está na posição ${pos}`)
    
    }

