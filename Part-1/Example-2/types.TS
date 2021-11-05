// 📝 `x` only takes specified values
// 📝 declares unnamed string literal type
const x: "hello" | "hi" | "hola" | "namaste" = "namast";

// 📝 An apparently useful way to handle error handling in react
type TLoginError =
  | "user-not-found"
  | "wrong-password"
  | "network-request-failed"
  | "too-many-requests";

const loginErrorMessages: { [error in TLoginError]: string } = {
  "network-request-failed": `Network request failed. Try to log in again.`,
  "user-not-found": "Email not found in our database",
  "wrong-password": "Email and Password do not match",
  "too-many-requests": "Too many login attempts. Try again in a minute",
};

// 📝 Declare `FontWeights` type
// and create a new variable of that type
type FontWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700;

const fontWeight: FontWeights = "bold";

// 📝
const searchFilters: ("name" | "email" | "phone" | "designation")[] = [];
searchFilters[0] = "name";
searchFilters[1] = "uwu";
