const isOddOrEven = require("./02. evenOrOdd");
const { assert } = require("chai");

describe("evenOrOdd function test", () => {
  it("test if input is not string should return undefined result", () => {
    assert.equal(isOddOrEven(1), undefined);
  });

  it("test if modulo division with even length returns even result ", () => {
    assert.equal(isOddOrEven("test"), "even");
  });

  it("test if modulo division with odd length returns odd result ", () => {
    assert.equal(isOddOrEven("tes"), "odd");
  });
});
