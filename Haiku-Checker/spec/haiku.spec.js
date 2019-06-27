import { Haiku } from "../src/haiku.js"

let testObj = new Haiku("In Autumn moonlight", "a small worm digs silently", "into the chestnut");
// Your logic should verify that the poem has three lines.
describe('HaikuLines', function() {
  it('should test whether Haiku.myHaiku property is functioning properly', function() {
    expect(testObj.myHaiku).toEqual("In Autumn moonlight" + "<br>" + "a small worm digs silently" + "<br>" + "into the chestnut");
  });
  it('should test whether a Haiku has three lines', function() {
    testObj.lineChecker(); //This line do lineChecker action with inputs ("abcd", "efgh", "ijkl") and return true for this.threeLines,
    // when we have three lines actually. If we have only two lines, then it is still false after lineChecker fuction process.
    expect(testObj.threeLines).toEqual(true);
  });
});

// Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.

describe('HaikuLineOneSyll', function() {
  it('should test whether each line has the correct number of syllables 5, 7, 5', function() {
    testObj.sylChecker();
    expect(testObj.threesyls).toEqual(true);
  });
});


// If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.
