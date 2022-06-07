const rentCar = require("./rentCar");
const { asset, expect, assert } = require("chai");

describe("test rentCar obj", () => {
  const dummyArr = ["Volkswagen", "Bar"];
  const dummyModel = "Volkswagen";
  const dummyDays = 5;
  const dummyCostPerDay = 2;
  const dummyBudget = 300;
  describe("test searchCar function", () => {
    it("test shop input as non arr type should throw error msg", () => {
      expect(() => rentCar.searchCar("str", dummyModel)).to.throw(
        "Invalid input!"
      );
    });
    it("test model input as non str type should throw error msg", () => {
      expect(() => rentCar.searchCar(dummyArr, 55)).to.throw("Invalid input!");
    });

    it("test both inputs with incorrect types should throw error msg", () => {
      expect(() => rentCar.searchCar("str", 55)).to.throw("Invalid input!");
    });

    it("test with correct inputs and a match should return correct msg", () => {
      assert.equal(
        rentCar.searchCar(dummyArr, dummyModel),
        `There is 1 car of model ${dummyModel} in the catalog!`
      );
    });

    it("test with correct inputs and no match should throw error msg", () => {
      expect(() => rentCar.searchCar(dummyArr, "Test")).to.throw(
        "There are no such models in the catalog!"
      );
    });
  });

  describe("test calculatePriceOfCar function", () => {
    it("test days input as non num type should throw error msg", () => {
      expect(() => rentCar.calculatePriceOfCar(dummyModel, "test")).to.throw(
        "Invalid input!"
      );
    });
    it("test days input as float num type should throw error msg", () => {
      expect(() => rentCar.calculatePriceOfCar(dummyModel, 5.5)).to.throw(
        "Invalid input!"
      );
    });

    it("test model input as non str type should throw error msg", () => {
      expect(() =>
        rentCar.calculatePriceOfCar(5, dummyDays).to.throw("Invalid input!")
      );
    });

    it("test both inputs with incorrect types should throw error msg", () => {
      expect(() => rentCar.calculatePriceOfCar(5, "test")).to.throw(
        "Invalid input!"
      );
    });

    it("test with correct inputs and no match in catalogue should throw error msg", () => {
      expect(() => rentCar.calculatePriceOfCar("Foo", dummyDays)).to.throw(
        "No such model in the catalog!"
      );
    });

    it("test with correct inputs and a match should return correct msg", () => {
      assert.equal(
        rentCar.calculatePriceOfCar(dummyModel, dummyDays),
        `You choose ${dummyModel} and it will cost $100!`
      );
    });
  });

  describe("test checkBudget function", () => {
    it("test constPerDay input as non num type should throw error msg", () => {
      expect(() =>
        rentCar.checkBudget("test", dummyDays, dummyBudget)
      ).to.throw("Invalid input!");
    });
    it("test constPerDay input as float type should throw error msg", () => {
      expect(() =>
        rentCar.calculatePriceOfCar(5.5, dummyDays, dummyBudget)
      ).to.throw("Invalid input!");
    });
    it("test days input as non num type should throw error msg", () => {
      expect(() =>
        rentCar.checkBudget(dummyCostPerDay, "test", dummyBudget)
      ).to.throw("Invalid input!");
    });
    it("test days input as float type should throw error msg", () => {
      expect(() =>
        rentCar.calculatePriceOfCar(dummyCostPerDay, 5.5, dummyBudget)
      ).to.throw("Invalid input!");
    });
    it("test budget input as non num type should throw error msg", () => {
      expect(() =>
        rentCar.checkBudget(dummyCostPerDay, dummyDays, "test")
      ).to.throw("Invalid input!");
    });
    it("test budget input as float type should throw error msg", () => {
      expect(() =>
        rentCar.calculatePriceOfCar(dummyCostPerDay, dummyDays, 5.5)
      ).to.throw("Invalid input!");
    });

    it("test with correct values but cost bigger than budget should return correct msg", () => {
      assert.equal(
        rentCar.checkBudget(dummyCostPerDay, dummyDays, 5),
        "You need a bigger budget!"
      );
    });
    it("test with correct values but budget equals cost should return correct msg", () => {
      assert.equal(
        rentCar.checkBudget(dummyCostPerDay, dummyDays, 10),
        "You rent a car!"
      );
    });
    it("test with correct values but budget bigger  than cost should return correct msg", () => {
      assert.equal(
        rentCar.checkBudget(dummyCostPerDay, dummyDays, 300),
        "You rent a car!"
      );
    });
  });
});
