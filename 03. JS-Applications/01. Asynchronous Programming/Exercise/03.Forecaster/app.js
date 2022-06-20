const elements = {
  mainOutput: document.getElementById("forecast"),
  currentConditionsOutput: document.getElementById("current"),
  threeDayConditionsOutput: document.getElementById("upcoming"),
  submitBtn: document.getElementById("submit"),
  locationInput: document.getElementById("location"),
};

const symbols = {
  Sunny: "&#x2600",
  "Partly sunny": "&#x26C5",
  Overcast: "&#x2601",
  Rain: "&#x2614",
  Degrees: "&#176",
};

const returnData = async (suffix) => {
  const result = await fetch(
    `http://localhost:3030/jsonstore/forecaster/${suffix}`
  );
  return result.json();
};

const returnCode = (arr, c) => {
  const location = arr.find((l) => l.name === c);
  return location.code;
};

const currentConditions = (forecast) => {
  const div = createElement(
    "div",
    "",
    elements.currentConditionsOutput,
    "forecasts"
  );
  div.innerHTML = `<span class="condition symbol">${
    symbols[forecast.forecast.condition]
  }</span><span class="condition"><span class="forecast-data">${
    forecast.name
  }</span><span class="forecast-data">${forecast.forecast.low}&#176;/${
    forecast.forecast.high
  }&#176;</span><span class="forecast-data">${
    forecast.forecast.condition
  }</span></span>`;
};

const threeDayForecast = (data) => {
  const span = createElement(
    "span",
    "",
    elements.threeDayConditionsOutput,
    "upcoming"
  );
  span.innerHTML = `<span class="symbol">${
    symbols[data.condition]
  }</span><span class="forecast-data">${data.low}&#176;/${
    data.high
  }&#176;</span><span class="forecast-data">${data.condition}</span>`;
  return span;
};

function createElement(type, content, parent, cls) {
  const el = document.createElement(type);
  el.textContent = content;
  if (cls) {
    el.className = cls;
  }

  if (parent) {
    parent.appendChild(el);
  }

  return el;
}

async function getData(location) {
  elements.mainOutput.style.display = "block";
  elements.currentConditionsOutput.innerHTML = `<div class="label">Current conditions</div>`;
  elements.threeDayConditionsOutput.innerHTML = `<div class="label">Three-day forecast</div>`;

  try {
    const locationInfo = await returnData("locations");
    const codeInfo = returnCode(locationInfo, location);
    const todayInfo = await returnData(`today/${codeInfo}`);
    const threeDayForecastInfo = await returnData(`upcoming/${codeInfo}`);

    currentConditions(todayInfo);

    Object.values(threeDayForecastInfo.forecast).forEach((e) => {
      threeDayForecast(e);
    });
  } catch (error) {
    createElement("p", "Error", elements.currentConditionsOutput);
  }
}

function attachEvents() {
  elements.submitBtn.addEventListener("click", () =>
    getData(elements.locationInput.value)
  );
}

attachEvents();
