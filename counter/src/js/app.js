const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const value = document.querySelector(".value");
value = 0;
increment.addEventListener("click", () => {
  ++value;
});
decrement.addEventListener("click", () => {
  --value;
});
