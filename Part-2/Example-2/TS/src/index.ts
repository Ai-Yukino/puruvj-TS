import "./style.css";

console.log("๐ Example 2 ๐");

function sum(a: number, b: number) {
  return a + b;
}

// ๐ Error about function being possible null
// ๐https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-and-non-undefined-type-guards
document.querySelector("#submit")!.addEventListener("click", () => {
  // ๐String -> number conversion using `parseFloat()` may be
  // better than something like `+string`
  // ๐https://stackoverflow.com/a/61070859
  const val1String = (document.querySelector("#input1") as HTMLInputElement)
    .value;
  const val2String = (document.querySelector("#input2") as HTMLInputElement)
    .value;
  const val1 = parseFloat(val1String);
  const val2 = parseFloat(val2String);

  console.log(sum(val1, val2));
});
