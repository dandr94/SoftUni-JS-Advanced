const library = require("./library");
const { assert, expect } = require("chai");

describe("test library obj", () => {
  const dummyNameOfBook = "Malazan";
  const dummyYear = 1999;
  const dummyDiscountPrice = 10;
  const dummyPrice = 20;
  const dummyBooks = ["Malazan", "Hobbit", "The Return of The King"];
  const dummyCountOfBooks = 5;
  describe("test calcPriceOfBook function", () => {
    it("test nameOfBook input with type non str should throw an error", () => {
      expect(() => library.calcPriceOfBook(5, dummyYear)).to.throw(
        `Invalid input`
      );
    });
    it("test year input with float should throw an error", () => {
      expect(() => library.calcPriceOfBook(dummyNameOfBook, 5.5)).to.throw(
        `Invalid input`
      );
    });
    it("test year input with str t should throw an error", () => {
      expect(() => library.calcPriceOfBook(dummyNameOfBook, "test")).to.throw(
        `Invalid input`
      );
    });

    it("test year less than 1980 should return correct amount", () => {
      assert.equal(
        library.calcPriceOfBook(dummyNameOfBook, 1969),
        `Price of ${dummyNameOfBook} is ${dummyDiscountPrice.toFixed(2)}`
      );
    });
    it("test year equal to 1980 should return correct amount", () => {
      assert.equal(
        library.calcPriceOfBook(dummyNameOfBook, 1980),
        `Price of ${dummyNameOfBook} is ${dummyDiscountPrice.toFixed(2)}`
      );
    });
    it("test year more than 1980 should return correct amount", () => {
      assert.equal(
        library.calcPriceOfBook(dummyNameOfBook, dummyYear),
        `Price of ${dummyNameOfBook} is ${dummyPrice.toFixed(2)}`
      );
    });
  });

  describe("test findBook function", () => {
    it("test empty bookArr input should throw and error", () => {
      expect(() => library.findBook([], dummyNameOfBook)).to.throw(
        `No books currently available`
      );
    });

    it("test with match should return correct msg", () => {
      assert.equal(
        library.findBook(dummyBooks, dummyNameOfBook),
        "We found the book you want."
      );
    });
    it("test with no match should return correct msg", () => {
      assert.equal(
        library.findBook(dummyBooks, "test"),
        "The book you are looking for is not here!"
      );
    });
  });

  describe("test arrangeTheBooks function", () => {
    it("test countBooks with float should thrown an error", () => {
      expect(() => library.arrangeTheBooks(5.5)).to.throw(`Invalid input`);
    });
    it("test countBooks with non int type should thrown an error", () => {
      expect(() => library.arrangeTheBooks("foo")).to.throw(`Invalid input`);
    });
    it("test countBooks with value less than 0 should thrown an error", () => {
      expect(() => library.arrangeTheBooks(-5)).to.throw(`Invalid input`);
    });
    it("test with insufficient space should return correct msg", () => {
      assert.equal(
        library.arrangeTheBooks(100),
        "Insufficient space, more shelves need to be purchased."
      );
    });
    it("test countOfBooks value less than availableSpace should return correct msg", () => {
      assert.equal(
        library.arrangeTheBooks(dummyCountOfBooks),
        "Great job, the books are arranged."
      );
    });
    it("test countOfBooks value equal to availableSpace should return correct msg", () => {
      assert.equal(
        library.arrangeTheBooks(40),
        "Great job, the books are arranged."
      );
    });
  });
});
