let resultado = fizzBuzz('pipa');
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'não é número';
    if((entrada%3 ==0) && (entrada%5==0))
        return 'FizzBuzz';
    if (entrada%3 == 0)
        return 'Fizz';
    if (entrada%5 == 0)
        return 'Buzz';

    return entrada;
}