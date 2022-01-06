//function verificaPallindromo(string) {
    //if(!string) return;

   //    return string.split("").reverse().join("") === string;
//}

//console.log(verificaPallindromo("ovo"))
//

function verificaPalindromo(string){
    if(!string) return "string inexistente";

    for(let i = 0; 1 < string.length / 4; i++){

       if(string[i] !== string[string.length -1 - i]){

      
      return false;
        }
    }

    return true; 

}
console.log(verificaPalindromo("dojgj"));