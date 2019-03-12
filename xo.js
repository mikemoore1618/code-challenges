function XO(str) {

    // make the string lowercase because we are case insensitive
    str = str.toLowerCase();

    // put the string into an array
    var arrayOfCharacters = str.split("");

    //count the x's
    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);
      
    // count the o's
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0);
    
    // do these numbers match? if so return true and if not return false
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}


function XO(str) {
    //convert to lowercase
    str = str.toLowerCase();
    // put string into array
    const arrayOfChars = str.split('');
    //count xs
    //count os
    arrayOfChars.forEach(function(char){
        const countX = 0;
        const countO = 0;
        if (char === 'x') {
            countX + 1;
        }
        if (char === 'o') {
            countO + 1;
        }
        //compare x and o
        if (countX == countO) {
            // if they match return true
            return true;
        } else {
            // if not return false
            return false;
        }
    })
};