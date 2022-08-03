// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  function pAeqourFactory(specimenNum, dna) {
    return {
      specimen: specimenNum,
      dna: dna,
  
      mutate() {
        const newDnaBase = [];
  
        for (let i = 0; i < this.dna.length; i++) {
          let newBase = returnRandBase();
  
          // loop used to make sure the dna base is changed
          while (newBase === this.dna[i]) {
            newBase = returnRandBase();
          }
          newDnaBase.push(newBase);
        }
        return newBase;
      },
  
      // Compares the number of DNA bases two pAeqour objects have
      // in common
      compareDNA(pAeqourObj) {
        if (typeof pAeqourObj === "object") {
          let count = 0;
  
          for (let i = 0; i < pAeqourObj.dna.length; i++) {
            if (pAeqourObj.dna[i] === this.dna[i]) {
              count++;
            }
          }
          console.log(`${Math.round((count / this.dna.length) * 100)}%`);
        }
      },
  
      willLikelySurvive() {
        let count = 0;
        for (i in this.dna) {
          if (this.dna[i] === "C" || this.dna[i] === "G") {
            count++;
          }
        }
  
        return count / this.dna.length >= 0.6 ? true : false;
      },
    };
  }
  
  const pAeqour1 = pAeqourFactory(1, mockUpStrand());
  const pAeqour2 = pAeqourFactory(2, mockUpStrand());
  
  pAeqour1.compareDNA(pAeqour2);
  console.log(pAeqour1.willLikelySurvive());
  
  const pAeqourArr = []
  
  for (let i=0; i<30; i++) {
    pAeqourArr.push(pAeqourFactory(i,mockUpStrand()));
  }