
function XO(str) {
    //convert to lowercase
    str = str.toLowerCase();
    // put string into array
    let arrayOfChars = str.split('');
    //count xs
    //count os
    arrayOfChars.forEach(function(char){
        let countX = 0;
        let countO = 0;
        if (char === 'x') {
            countX ++;
        }
        if (char === 'o') {
            countO ++;
        }
        //compare x and o
        if (countX === countO) {
            // if they match return true
            return true;
        } else {
            // if not return false
            return false;
        }
    })
};