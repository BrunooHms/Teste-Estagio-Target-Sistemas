function inverterString(string) {
    let stringInvertida = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
    
    return stringInvertida;
  }
  
 let minhaString = "Subi no onibuS";
 let stringinvertida = inverterString(minhaString);

 console.log(stringinvertida);