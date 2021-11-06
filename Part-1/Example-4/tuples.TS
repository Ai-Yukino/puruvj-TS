// 📝 Extracts coordinates from `coords` passed into `getLocation()`
// 📝 Also this is standard JS destructuring:
// 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
type Coordinates = [number, number];

function getLocation(coords: Coordinates) {
  const [x, y] = coords;

  /** Logic */
}

// 📝
type Grid = [[number, number], [number, number]];

const x: Grid = [
  [1, 2],
  [3, 4],
]; // ✅ Correct

const y: Grid = [[1, 2], 3]; // ❌ ERROR

// 📝 Tuple coordinates can have different types
type UserData = [string, number, number, string, UserRole];
