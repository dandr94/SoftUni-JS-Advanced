const bookSelection = require("./bookSelection");
const { assert, expect } = require("chai");

describe("test bookSelection obj", () => {
  const incorrectAge = 5;
  const correctAge = 15;
  const genre = "Action";
  const gerneNotSuitableForKids = "Thriller";
  const obj = [];
  describe("test isGenreSuitable function", () => {
    it("test with incorrect age type input should return the error msg", () => {
      assert.equal(
        bookSelection.isGenreSuitable(gerneNotSuitableForKids, incorrectAge),
        `Books with ${gerneNotSuitableForKids} genre are not suitable for kids at ${incorrectAge} age`
      );
    });
    it("test with correct inputs should return right msg", () => {
      assert.equal(
        bookSelection.isGenreSuitable(gerneNotSuitableForKids, correctAge),
        `Those books are suitable`
      );
    });
    it("test with correct inputs should return right msg", () => {
      assert.equal(
        bookSelection.isGenreSuitable(genre, correctAge),
        `Those books are suitable`
      );
    });
  });

  describe("test isItAffordable function", () => {
    it("test wrong input type for price should throw an error", () => {
      expect(() => bookSelection.isItAffordable("str", 500)).to.throw(
        "Invalid input"
      );
    });
    it("test wrong input type for budget should throw an error", () => {
      expect(() => bookSelection.isItAffordable(500, "str")).to.throw(
        "Invalid input"
      );
    });

    it("test with negative result should return correct msg", () => {
      assert.equal(
        bookSelection.isItAffordable(2000, 500),
        "You don't have enough money"
      );
    });
    it("test with correct result should return correct msg", () => {
      assert.equal(
        bookSelection.isItAffordable(200, 500),
        "Book bought. You have 300$ left"
      );
    });
  });

  describe("test suitableTitles function", () => {
    it("test with incorrect array type should throw error msg", () => {
      expect(() => bookSelection.suitableTitles("str", "Action")).to.throw(
        "Invalid input"
      );
    });
    it("test with incorrect wantedGenre type should throw error msg", () => {
      expect(() => bookSelection.suitableTitles(["Drama"], 5)).to.throw(
        "Invalid input"
      );
    });

    it("test with correct inputs should return array", () => {
      obj.push({ title: "Hello", genre: "Action" });
      obj.push({ title: "Bye", genre: "Drama" });
      assert.equal(bookSelection.suitableTitles(obj, "Action"), "Hello");
    });
    it("test with correct inputs but no matches should return array", () => {
      obj.push({ title: "Hello", genre: "Action" });
      obj.push({ title: "Bye", genre: "Drama" });
      expect(bookSelection.suitableTitles(obj, "Comedy")).to.eql([]);
    });

    it("test with empty arr should return empty array", () => {
      expect(bookSelection.suitableTitles(obj, "Comedy")).to.eql([]);
    });
  });
});
