function solve(arr, sortingCriterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  return arr
    .map((x) => x.split("|"))
    .map(([d, p, s]) => new Ticket(d, Number(p), s))
    .sort((a, b) => {
      return typeof a[sortingCriterion] == "number"
        ? a[sortingCriterion] - b[sortingCriterion]
        : a[sortingCriterion].localeCompare(b[sortingCriterion]);
    });
}

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
