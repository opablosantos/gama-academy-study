let newStr = '';

function reverseAString(str) {
    for (i=str.length-1; i>= 0;i--)
        newStr += str[i]
    console.log(newStr)
}

let resultado = reverseAString('olá, mundo!')