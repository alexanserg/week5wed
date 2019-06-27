import { Haiku } from "../src/haiku.js"

// Your logic should verify that the poem has three lines.
describe('HaikuLines', function() {
  it('should test whether a Haiku has three lines', function() {
    let testObj = new Haiku("asdf", "sadf", "ljlkj");
    testObj.lineCombine()
    expect(testObj.myHaiku).toEqual("asdfsadfljlkj");
  });
});

// Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.
//
// describe('HaikuLineOneSyll', function() {
//
//   it('should test whether line 1 has five syllables', function() {
//     //Test content will go here.
//   });
// });
//
// describe('HaikuLineTwoSyll', function() {
//
//   it('should test whether line 2 has seven syllables', function() {
//     //Test content will go here.
//   });
// });
//
// describe('HaikuLineThreeSyll', function() {
//
//   it('should test whether line 3 has five syllables', function() {
//     //Test content will go here.
//   });
// });



// If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.
