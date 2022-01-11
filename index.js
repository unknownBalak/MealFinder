let itemName = document.querySelector("#item");
let meals = document.querySelector("#find__meal");
const searchFood = async function () {
  let output = [];
  itemName.innerHTML = this.value;
  console.log("THis is this.value", this.value);

  if (this.value) {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.value}`;
    let res = await fetch(url);
    output = await res.json();
    output = output.meals;
  }
  let result = "";
  if (!output) return;
  result = output
    .map(
      (item) =>
        `<div class="meal__box" >
        <img src=${item?.strMealThumb} alt=${item?.strMeal} />
              <div class="meal__name"> <h3> ${item?.strMeal} </h3> </div>
        </div>`
    )
    .join("");
  meals.innerHTML = result;
};

let input = document.querySelector("#box");
input.addEventListener("keyup", searchFood);
