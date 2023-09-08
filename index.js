let farenheight = [];
let forenheightList = document.getElementById("forenheightList");

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

  console.log(farenheight, "res");
}

window.addEventListener("load", () => {
  addListener();
});

function addListener() {
  let temperatureInputs = document.querySelectorAll(".item");
  temperatureInputs.forEach((temperature) => {
    temperature.addEventListener("change", (e) => {
      console.log(e.target.value);
      farenheight.push(e.target.value);
      filterDuplicates();
    });
  });
}
