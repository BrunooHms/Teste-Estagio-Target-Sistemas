let num = 21; // Coloque aqui o numero de entrada //
let termos = [0 , 1];
let i = 1;

if(num === 0 || num ===1) {
    console.log("O número " + num + " pertence a sequência de Fibonacci!");
} else {
    while(termos[i] < num){
        termos.push(termos[i-1] + termos [i]);
        i++;
    }
    if(termos[i] === num) {
        console.log("o número " + num + " pertence a sequência de Fibonacci!");
    } else {
        console.log("O número " + num + " não pertence a sequência de Fibonacci!");
    }

}





