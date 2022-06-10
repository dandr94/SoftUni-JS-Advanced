const testNumbers = require("./testNumbers");
const { assert, expect } = require("chai");

describe("test testNumbers obj", () => {
  const dummyNum1 = 5;
  const dummyNum2 = 2;
  const sum = (dummyNum1 + dummyNum2).toFixed(2);
  const dummyArr = [5, 4, 3, 2];
  describe("test sumNumbers function", () => {
    it("test if num1 is not a number should return undefined", () => {
      assert.equal(testNumbers.sumNumbers("foo", dummyNum2), undefined);
    });
    it("test if num2 is not a number should return undefined", () => {
      assert.equal(testNumbers.sumNumbers(dummyNum1, "foo"), undefined);
    });
    it("test with correct values should return correct sum", () => {
      assert.equal(testNumbers.sumNumbers(dummyNum1, dummyNum2), sum);
    });
  });

  describe("test numberChecker function", () => {
    it("test input with different than str and num should throw an error", () => {
      expect(() => testNumbers.numberChecker(dummyArr)).to.throw(
        "The input is not a number!"
      );
    });
    it("test input with str should return correct msg", () => {
      assert.equal(testNumbers.numberChecker("5"), "The number is odd!");
    });
    it("test input with int should return correct msg", () => {
      assert.equal(testNumbers.numberChecker(dummyNum1), "The number is odd!");
    });
    it("test input with float should return correct msg", () => {
      assert.equal(testNumbers.numberChecker(5.5), "The number is odd!");
    });
    it("test input with float should return correct msg", () => {
      assert.equal(testNumbers.numberChecker(dummyNum2), "The number is even!");
    });
  });

  describe("test averageSumArray", () => {
    it("test with correct arr should return correct value", () => {
      assert.equal(testNumbers.averageSumArray(dummyArr), 3.5);
    });
  });
});
