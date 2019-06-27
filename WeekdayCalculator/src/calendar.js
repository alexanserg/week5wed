export class myDate {
  constructor(dayInfo) {
    this.dayInfo = dayInfo;
  }

  getMyDay() {
    let result = new Date(this.dayInfo);
    let dayNum = result.getDay();
    let dayArr = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
    return dayArr[dayNum];
  }
}

// export function myDate(dayInfo) {
//   this.dayInfo = dayInfo;
// }
//
// myDate.prototype.getMyDay = function() {
//   let result = new Date(this.dayInfo);
//   let dayNum = result.getDay();
//
//   let dayArr = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
//   return dayArr[dayNum];
// };
