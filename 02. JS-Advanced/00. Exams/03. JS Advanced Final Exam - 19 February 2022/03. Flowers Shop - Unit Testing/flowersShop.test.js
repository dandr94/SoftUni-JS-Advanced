const flowerShop = require("./flowersShop");
const { assert, expect } = require("chai");

describe("test flowerShop obj", () => {
  const dummyArr = ["Foo", "Bar"];
  const dummyFlower = "Foo";
  const dummyPrice = 5;
  const dummyQuantity = 2;
  const dummySum = dummyPrice * dummyQuantity;
  const dummySpace = 3;
  describe("test calcPriceOfFlowers function", () => {
    it("test flower input as non str type should throw error msg", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers(5, dummyPrice, dummyQuantity)
      ).to.throw("Invalid input!");
    });
    it("test price input as non num type should throw error msg", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers(dummyFlower, "test", dummyQuantity)
      ).to.throw("Invalid input!");
    });
    it("test price input as float type should throw error msg", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers(dummyFlower, 5.5, dummyQuantity)
      ).to.throw("Invalid input!");
    });
    it("test quantity input as non num type should throw error msg", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers(dummyFlower, dummyPrice, "test")
      ).to.throw("Invalid input!");
    });
    it("test quantity input as float type should throw error msg", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers(dummyFlower, dummyPrice, 5.5)
      ).to.throw("Invalid input!");
    });
    it("test with correct values should return correct msg", () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers(dummyFlower, dummyPrice, dummyQuantity),
        `You need $${dummySum.toFixed(2)} to buy ${dummyFlower}!`
      );
    });
  });

  describe("test checkFlowersAvailable function", () => {
    it("test with no match should return correct msg", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("Test", dummyArr),
        `The Test are sold! You need to purchase more!`
      );
    });
    it("test with match should return correct msg", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable(dummyFlower, dummyArr),
        `The ${dummyFlower} are available!`
      );
    });
  });

  describe("test sellFlowers function", () => {
    it("test gardenArr input as non arr type should throw error msg", () => {
      expect(() => flowerShop.sellFlowers(5, dummySpace)).to.throw(
        "Invalid input!"
      );
    });
    it("test space input as non int type should throw error msg", () => {
        expect(() => flowerShop.sellFlowers(dummyArr, 'test')).to.throw(
          "Invalid input!"
        );
      });
    it("test space input as float type should throw error msg", () => {
        expect(() => flowerShop.sellFlowers(dummyArr, 5.5)).to.throw(
          "Invalid input!"
        );
      });

    it("test space input as negative num should throw error msg", () => {
        expect(() => flowerShop.sellFlowers(dummyArr, -10)).to.throw(
          "Invalid input!"
        );
      });
    it("test space equals garden length should throw error msg", () => {
        expect(() => flowerShop.sellFlowers(dummyArr, 2)).to.throw(
          "Invalid input!"
        );
      });
    it("test space bigger than garden length should throw error msg", () => {
        expect(() => flowerShop.sellFlowers(dummyArr, 5)).to.throw(
          "Invalid input!"
        );
      });
    it ('test with correct inputs should return correct msg', () => {
        assert.equal(flowerShop.sellFlowers(dummyArr, 1), `Foo`)
    })
    it ('test with correct inputs should return correct msg', () => {
        assert.equal(flowerShop.sellFlowers(['Test', 'Test2', 'Test3'], 2), `Test / Test2`)
    })
  });
});
