async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const buses = document.getElementById("buses");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  buses.innerHTML = "";
  try {
    const res = await fetch(url);
    const data = await res.json();

    stopName.textContent = data.name;
    Object.entries(data.buses).forEach(([bussNumber, time]) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${bussNumber} arrives in ${time} minutes`;
      buses.appendChild(li);
    });
  } catch (error) {
    stopName.textContent = "Error";
  }
}
