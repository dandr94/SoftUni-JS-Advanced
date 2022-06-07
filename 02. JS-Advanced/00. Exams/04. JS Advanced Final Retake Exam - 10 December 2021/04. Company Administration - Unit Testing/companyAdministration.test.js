const companyAdministration = require("./companyAdministration");
const { assert, expect } = require("chai");

describe("test companyAdministration obj", () => {
  const dummyName = "Foo";
  const dummyPosition = "Programmer";
  const dummyYearsExperience = 5;
  const dummyHours = 180;
  const dummyArr = ["Foo", "Bar", "Barz"];
  const dummyIndex = 1;
  describe("test hiringEmployee function", () => {
    it("test position different than programmer should throw an error", () => {
      expect(() =>
        companyAdministration.hiringEmployee(
          dummyName,
          "Bar",
          dummyYearsExperience
        )
      ).to.throw(`We are not looking for workers for this position.`);
    });
    it("test years experience lower than needed should return correct msg", () => {
      assert.equal(
        companyAdministration.hiringEmployee(dummyName, dummyPosition, 2),
        `${dummyName} is not approved for this position.`
      );
    });
    it("test with happy case inputs should return correct msg", () => {
      assert.equal(
        companyAdministration.hiringEmployee(
          dummyName,
          dummyPosition,
          dummyYearsExperience
        ),
        `${dummyName} was successfully hired for the position ${dummyPosition}.`
      );
    });
    it("test yearsExperience with value equal to 3 inputs should return correct msg", () => {
      assert.equal(
        companyAdministration.hiringEmployee(dummyName, dummyPosition, 3),
        `${dummyName} was successfully hired for the position ${dummyPosition}.`
      );
    });
  });

  describe("test calculateSalary function", () => {
    it("test hours input with non num type should throw an error", () => {
      expect(() => companyAdministration.calculateSalary("test")).to.throw(
        `Invalid hours`
      );
    });
    it("test hours lower than 0 hould throw an error", () => {
      expect(() => companyAdministration.calculateSalary(-5)).to.throw(
        `Invalid hours`
      );
    });

    it("test totalAmount with hours less than 160", () => {
      assert.equal(companyAdministration.calculateSalary(150), 2250);
    });
    it("test totalAmount with hours equal to 160", () => {
      assert.equal(companyAdministration.calculateSalary(160), 2400);
    });
    it("test totalAmount with hours more than 160 should return totalamount + 1000", () => {
      assert.equal(companyAdministration.calculateSalary(dummyHours), 3700);
    });
  });

  describe("test firedEmployee function", () => {
    it("test employees input with non arr type should throw an error", () => {
      expect(() => companyAdministration.firedEmployee("test", 1)).to.throw(
        `Invalid input`
      );
    });
    it("test index input with float should throw an error", () => {
      expect(() => companyAdministration.firedEmployee(dummyArr, 1.5)).to.throw(
        `Invalid input`
      );
    });
    it("test index input with non int type should throw an error", () => {
      expect(() =>
        companyAdministration.firedEmployee(dummyArr, "test")
      ).to.throw(`Invalid input`);
    });
    it("test index input with value less than 0 should throw an error", () => {
      expect(() => companyAdministration.firedEmployee(dummyArr, -1)).to.throw(
        `Invalid input`
      );
    });
    it("test index input with value more than employees length should throw an error", () => {
      expect(() => companyAdministration.firedEmployee(dummyArr, 4)).to.throw(
        `Invalid input`
      );
    });
    it("test index input with value equal to employees length should throw an error", () => {
      expect(() => companyAdministration.firedEmployee(dummyArr, 3)).to.throw(
        `Invalid input`
      );
    });

    it("test result with match should return correct values", () => {
      assert.equal(
        companyAdministration.firedEmployee(dummyArr, dummyIndex),
        "Foo, Barz"
      );
    });
  });
});
