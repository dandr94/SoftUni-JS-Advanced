const mathEnforcer = require("./04. mathEnforcer");
const { assert } = require("chai");

describe("test mathEnforcer obj", () => {
  describe("test mathEnforcer addFive function", () => {
    const dummyStr = "test";
    const dummyNum = 5;
    it("test input with incorrect type should return undefined", () => {
      assert.equal(mathEnforcer.addFive(dummyStr), undefined);
    });

    it("test input with correct int should return correct result", () => {
      assert.equal(mathEnforcer.addFive(dummyNum), 10);
    });
    it("test input with correct float should return correct result", () => {
        assert.equal(mathEnforcer.addFive(5.5), 10.5);
      });
    it("test input with correct negative int should return correct result", () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
      });
  });

  describe("test mathEnforcer subtractTen function", () => {
    const dummyStr = "test";
    const dummyNum = 5;
    it("test input with incorrect type should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen(dummyStr), undefined);
    });

    it("test input with correct int should return correct result", () => {
        assert.equal(mathEnforcer.subtractTen(dummyNum), -5);
      });
    it("test input with correct float should return correct result", () => {
          assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
        });
    it("test input with correct negative int should return correct result", () => {
          assert.equal(mathEnforcer.subtractTen(-5), -15);
        });
  });

  describe("test mathEnforcer sum function", () => {
    const dummyStr = "test";
    const dummyNum = 5;
    it("test  incorrect first input type should return undefined", () => {
      assert.equal(mathEnforcer.sum(dummyStr, dummyNum), undefined);
    });

    it("test incorrect second input type should return undefined", () => {
      assert.equal(mathEnforcer.sum(dummyNum, dummyStr), undefined);
    });
    

    it("test input with correct int should return correct result", () => {
        assert.equal(mathEnforcer.sum(dummyNum, dummyNum), 10);
      });
    it("test input with correct float should return correct result", () => {
          assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
        });
    it("test input with correct negative int should return correct result", () => {
          assert.equal(mathEnforcer.sum(-5, -5), -10);
        });
  });
});
