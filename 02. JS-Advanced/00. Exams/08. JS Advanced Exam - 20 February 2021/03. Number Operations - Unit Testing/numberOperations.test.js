const numberOperations = require("./numberOperations");
const { assert, expect } = require("chai");

describe("test numberOperations obj", () => {
  const dummyNum = 2;
  const dummyArr1 = [1, 3, 3, 7];
  const dummyArr2 = [9, 1, 1];
  describe("test powNumber function", () => {
    it("test with int should return correct result", () => {
      assert.equal(numberOperations.powNumber(dummyNum), 4);
    });
  });
  describe("test numberChecker function", () => {
    it("test with NaN should thrown an error", () => {
      expect(() => numberOperations.numberChecker("foo")).to.throw(
        "The input is not a number!"
      );
    });
    it("test with input lower than 100 should return correct msg", () => {
      assert.equal(
        numberOperations.numberChecker(dummyNum),
        "The number is lower than 100!"
      );
    });
    it("test with input close to 100 should return correct msg", () => {
      assert.equal(
        numberOperations.numberChecker(99),
        "The number is lower than 100!"
      );
    });
    it("test with input bigger than 100 should return correct msg", () => {
      assert.equal(
        numberOperations.numberChecker(155),
        "The number is greater or equal to 100!"
      );
    });
    it("test with input equal to 100 should return correct msg", () => {
      assert.equal(
        numberOperations.numberChecker(100),
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("test sumArrays function", () => {
    it("test with arr1 longer than arr 2 should return correct result", () => {
      expect(numberOperations.sumArrays(dummyArr1, dummyArr2)).to.eql([
        10, 4, 4, 7,
      ]);
    });
  });
});
