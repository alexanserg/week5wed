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

  newCount(word) {
    word = word.toLowerCase();
    if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
  }

  sylChecker() {
    let lineArr = [this.line1.split(" "), this.line2.split(" "), this.line3.split(" ")];
    let sylCount = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      lineArr[i].forEach(function(element) {
        sylCount[i] += this.newCount(element); //"this."" keyword is for calling a method from another method in same class
      });
    }
    if (sylCount[0] === 5 && sylCount[1] == 7 && sylCount[2] === 5) {
      this.threesyls = true;
    }
  }
}

export class haikuAi {
  constructor(ranString){
    this.ranString = ranString;
    this.ranArr = ranString.split(/\s+/);
  }

  wordGrabber() {
    ranIndex= getRandomInt(this.ranArr.length);
    ranLine = [];
    ranWord = ranLine.push(this.ranArr[ranIndex]);
  }

  // function count (word) {
  //   if(word.length <= 3) { return 1; }
  //     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  //     word = word.replace(/^y/, '');
  //     return word.match(/[aeiouy]{1,2}/g).length;
  // }
  //
  // let ranString = "when i consider how my light was spent ere half my days in this dark world and wide with that one talent which is death to hide";
  // let ranArr = ranString.split(" ");
  // let ranLine = [];
  //
  // let
  // let ranNum = Math.floor((Math.random() * ranArr.length) + 1);
  // let testWord = ranArr[ranNum];
  // document.write(testWord, count(testWord));
  // if (count(testWord) < 6) {
  //  ranLine.push(ranArr[ranNum]);
  // }

}
