let farenheight = [];
let forenheightList = document.getElementById("forenheightList");
let centigrad = document.getElementById("centigrad");
let cold = '<i class="fa fa-bolt" aria-hidden="true"></i>';
let hot = '<i class="fa fa-sun" aria-hidden="true"></i>';
function addTemp() {
  let forenheightItem =
    '<div id="forenheightItem"><input  class="item" type="text">  </div>';

  if (forenheightList && forenheightItem) {
    forenheightList.insertAdjacentHTML("beforeend", forenheightItem);

    addListener();
  }
}
function filterDuplicates() {
  farenheight = [...new Set(farenheight)];
}

const fahrenheitToCelsius = () => {
  let temperaturePairs = farenheight.map((farenheightItem) => {
    const celsiusValue = ((5 * (farenheightItem - 32)) / 9).toFixed(2);
    return { fahrenheit: farenheightItem, celsius: celsiusValue };
  });

  const temperatureTableRows = temperaturePairs
    .map(
      (item) =>
        `<tr><td>Fahrenheit:</td><td>${
          item.fahrenheit
        }</td><td>Celsius:</td><td>${
          item.celsius > 0
            ? item.celsius + " " + hot
            : item.celsius + " " + cold
        }°C</td></tr>`
    )
    .join("");

  const tableHTML = `<table>${temperatureTableRows}</table>`;
  centigrad.innerHTML = tableHTML;
};

window.addEventListener("load", () => {
  addListener();
});

function result() {
  fahrenheitToCelsius();
}

function addListener() {
  let temperatureInputs = document.querySelectorAll(".item");
  temperatureInputs.forEach((temperature) => {
    temperature.addEventListener("change", (e) => {
      farenheight.push(e.target.value);
      filterDuplicates();
    });
  });
}
