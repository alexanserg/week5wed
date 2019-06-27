export class Haiku  {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.myHaiku = "";
  }
  lineCombine() {
    this.myHaiku = this.line1 + "<br>" + this.line2 + "<br>" + this.line3;
  }
}
