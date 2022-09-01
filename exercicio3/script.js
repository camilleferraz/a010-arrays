const array1 = [33,88,99]
const array2 = ["quadrado","bola","triangulo"]
const array3 = [56,"prédio",884,"janela"]

const array1Copia = array1.slice()
array1.push(2)
console.log("Original:",array1,"Cópia:",array1Copia)

const array2Copia = array2.slice()
array1.pop()
console.log("Original:",array2,"Cópia:",array2Copia)

const array3Copia = array3.slice()
array3.splice(3,1)
console.log("Original:",array3,"Cópia:",array3Copia)


