// 📝 Lots of typing if we're using literal type declartions
// type ColorPalette =
//   // Blue
//   | "blue-100"
//   | "blue-300"
//   | "blue-500"
//   | "blue-700"

//   // Green
//   | "green-100"
//   | "green-300"
//   | "green-500"
//   | "green-700"

//   // Yellow
//   | "yellow-100"
//   | "yellow-300"
//   | "yellow-500"
//   | "yellow-700"

//   // Red
//   | "red-100"
//   | "red-300"
//   | "red-500"
//   | "red-700"

//   // Cyan
//   | "cyan-100"
//   | "cyan-300"
//   | "cyan-500"
//   | "cyan-700";

// 📝Template literal types save typing
type Color = "blue" | "green" | "yellow" | "red" | "cyan";
type Shade = 100 | 300 | 500 | 700;
type ColorPalette = `${Color}-${Shade}`;
// 📝On windows: Press `ctrl + enter` in between "" to see options
const x: ColorPalette = "";
