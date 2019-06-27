export class Haiku  {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.myHaiku = this.line1 + "<br>" + this.line2 + "<br>" + this.line3;
    this.threeLines = false
    this.threesyls = false
  }

  lineChecker() {
    if (this.line1 !== '' && this.line2 !== '' && this.line3 !== '') {
      this.threeLines = true;
    }
  }

  new_count(word) {
    word = word.toLowerCase();
    if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
  }

  sylChecker() {
    let line1Arr = this.line1.split(" ");
    let line2Arr = this.line2.split(" ");
    let line3Arr = this.line3.split(" ");
    let sylCount1 = 0;
    let sylCount2 = 0;
    let sylCount3 = 0;
    line1Arr.forEach(function(element) {
      sylCount1 += new_count(element);
    });
    line2Arr.forEach(function(element) {
      sylCount2 += new_count(element);
    });
    line3Arr.forEach(function(element) {
      sylCount3 += new_count(element);
    });
    if (sylCount1 === 5 && sylCount2 == 7 && sylCount3 === 5) {
      this.threesyls = true;
    }
  }
}
}
