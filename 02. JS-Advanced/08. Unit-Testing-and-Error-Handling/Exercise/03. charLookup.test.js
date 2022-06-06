const lookupChar = require("./03. charLookup");
const { assert } = require("chai");

describe("test lookupChar function", () => {
  const testStrInput = "test";
  const testIndexInput = 1;

  it("test input with type not string and correct second input should return undefined", () => {
    assert.equal(lookupChar(1, testIndexInput), undefined);
  });

  it("test input with type string and incorrect second type input should return undefined", () => {
    assert.equal(lookupChar(testStrInput, testStrInput), undefined);
  });
  it("test input with type string and float type input should return undefined", () => {
    assert.equal(lookupChar(testStrInput, 1.1), undefined);
  });

  it("test input with both incorrect type of values should return undefined", () => {
    assert.equal(lookupChar(testIndexInput, testStrInput), undefined);
  });

  it("test string length that is lower than index input should return incorrect index", () => {
    assert.equal(lookupChar(testStrInput, 5), "Incorrect index");
  });
  it("test index input lower than 0 should return incorrect index", () => {
    assert.equal(lookupChar(testStrInput, -1), "Incorrect index");
  });

  it("test input with correct values should return correct charAt", () => {
    assert.equal(lookupChar(testStrInput, testIndexInput), "e");
  });
});
