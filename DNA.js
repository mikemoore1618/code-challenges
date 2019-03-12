function DNAStrand(dna){
    let DNArray = dna.split('')
    let ComplimentArray = []
    DNArray.forEach(element => {
        if (element == 'A') {
            ComplimentArray.push('T')
        }
        if (element == 'T') {
            ComplimentArray.push('A')
        }
        if (element == 'G') {
            ComplimentArray.push('C')
        }
        if (element == 'C') {
            ComplimentArray.push('G')
        } 
    });
    return ComplimentArray.join('')
  }
