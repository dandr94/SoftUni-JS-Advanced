function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const infoOutput = document.getElementById("info");

  let stop = {
    next: "depot",
  };

  async function depart() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;
    try {
      const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
      const data = await fetch(url);
      stop = await data.json();

      infoOutput.textContent = `Next stop ${stop.name}`;
    } catch (error) {
      infoOutput.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    departBtn.disabled = false;
    info.textContent = `Arriving at ${stop.name}`;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
