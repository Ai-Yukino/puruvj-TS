/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
  return a + b;
}

document.querySelector("#submit").addEventListener("click", () => {
  /** @type {HTMLInputElement} */
  const el1 = document.querySelector("#input1");

  /** @type {HTMLInputElement} */
  const el2 = document.querySelector("#input2");

  // 📝 `val1` and `val2` are seen as strings,
  // so we need to convert them to numbers
  const val1 = parseFloat(el1.value);
  const val2 = parseFloat(el2.value);

  console.log(sum(val1, val2));
});
