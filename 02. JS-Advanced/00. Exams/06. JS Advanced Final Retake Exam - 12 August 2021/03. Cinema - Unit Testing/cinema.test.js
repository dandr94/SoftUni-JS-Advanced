const cinema = require("./cinema");
const { assert, expect } = require("chai");

describe("test cinema obj", () => {
  const dummyMovieArr = ["Foo", "Bar", "Barz"];
  const dummyFirstPlace = 10;
  const dummySecondPlace = 5;
  describe("test showMovies function", () => {
    it("test with empty arr should return correct msg", () => {
      assert.equal(
        cinema.showMovies([]),
        "There are currently no movies to show."
      );
    });
    it("test with items shold return correct result", () => {
      assert.equal(cinema.showMovies(dummyMovieArr), "Foo, Bar, Barz");
    });
    it("test with item shold return correct result", () => {
      assert.equal(cinema.showMovies(["Foo"]), "Foo");
    });
  });

  describe("test ticketPrice function", () => {
    it("test with non existing property should throw an error", () => {
      expect(() => cinema.ticketPrice("test")).to.throw(
        "Invalid projection type."
      );
    });
    it("test with normal property should return correct price", () => {
      assert.equal(cinema.ticketPrice("Normal"), 7.5);
    });
    it("test with premiere property should return correct price", () => {
      assert.equal(cinema.ticketPrice("Premiere"), 12);
    });
    it("test with discount property should return correct price", () => {
      assert.equal(cinema.ticketPrice("Discount"), 5.5);
    });
  });

  describe("test swapSeatsInHall function", () => {
    // First Place
    it("test firstPlace with float should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(5.5, dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test firstPlace with negative should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(-1, dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test firstPlace with 0 should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(0, dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test firstPlace with more than 20 should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(21, dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test firstPlace with str should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall("str", dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test non existing firstPlace with str should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall("", dummySecondPlace),
        "Unsuccessful change of seats in the hall."
      );
    });
    // Second Place

    it("test secondPlace with float should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, 5.5),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test secondPlace with negative should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, -1),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test secondPlace with 0 should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, 0),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test secondPlace with more than 20 should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, 21),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test secondPlace with str should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, "str"),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test non existing secondPlace with str should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, ""),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("test firstPlace and secondPlace with same values should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(5, 5),
        "Unsuccessful change of seats in the hall."
      );
    });
    // Other
    it("test with happy case values should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(dummyFirstPlace, dummySecondPlace),
        "Successful change of seats in the hall."
      );
    });
    it("test with border values should return correct msg", () => {
      assert.equal(
        cinema.swapSeatsInHall(1, 20),
        "Successful change of seats in the hall."
      );
    });
  });
});
