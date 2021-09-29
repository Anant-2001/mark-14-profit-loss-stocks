var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
const tellButton = document.querySelector("#submit-button");
const result = document.querySelector(".result");

tellButton.addEventListener("click", () => {
  initial = Number(initialPrice.value);
  amount = Number(quantity.value);
  current = Number(currentPrice.value);
  if(initial == current){
    result.innerHTML = `<h3>Neither profit nor loss</h3>`
  }
  else if(initial > current){
    loss = (initial - current) * amount;
    lossPer = (loss / initial) * 100;
    result.innerHTML = `<h4> Your loss is ${Number(loss).toFixed(4)} and loss percentage is ${Number(lossPer).toFixed(2)}% </h4>`;
  }
  else if(current > initial){
    profit = (current-initial) * amount;
    profitPer = (profit / initial) * 100;
    result.innerHTML = `<h4> Your profit is ${Number(profit).toFixed(4)} and profit percentage is ${Number(profitPer).toFixed(2)}% </h4>`;
  }

})