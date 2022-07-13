const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let i = 0;
button.addEventListener("click", (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

const createDeleteElements = (value) => {
  i++;
  const li = document.createElement("li");
  li.className = "li";
  li.textContent = value;
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "удалить";
  li.appendChild(button);
  button.addEventListener("click", (e) => {
    result.removeChild(li);
    i--;
    total.textContent = i;
  });
  li.addEventListener("click", (e) => {
    li.classList.toggle("li-active");
  });
  total.textContent = i;
  result.appendChild(li);
};
