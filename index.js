let farenheight = [];
let forenheightList = document.getElementById("forenheightList");
let centigrad = document.getElementById("centigrad");
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
  let convertedDeg = farenheight.map((farenheightItem) => {
    return ((5 * (farenheightItem - 32)) / 9).toFixed(2);
  });
  const convertedTemperaturesString = convertedDeg
    .map(
      (item) =>
        `<table><tr><td>the temps are :</td><td>${item}</td></tr></table>`
    )
    .join("<br>");
  centigrad.innerHTML = convertedTemperaturesString;
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
