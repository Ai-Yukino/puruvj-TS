console.log("Example 1");

function sum(a, b) {
  return a + b;
}

document.querySelector("#submit").addEventListener("click", () => {
  // 🍂 Concatenates strings 🍃
  // const val1 = document.querySelector("#input1").value;
  // const val2 = document.querySelector("#input2").value;

  // 🍂 Adds numbers 🍃
  const val1 = +document.querySelector("#input1").value;
  const val2 = +document.querySelector("#input2").value;

  console.log(sum(val1, val2));
});
