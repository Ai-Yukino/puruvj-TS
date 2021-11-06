type LoginFields = {
  id: number;
  email: string;
  username: string;
  password: string;
};

type PersonalFields = {
  id: number;
  name: string;
  gender: "male" | "female" | "non-binary" | "prefer-not-to-say";
  dob: Date;
};

type AccountDetails = {
  id: number;
  accountCreated: Date;
  lastSeen: Date;
};

type User = LoginFields & PersonalFields & AccountDetails;

// 📝 Hard codes a subset type of `User`
// type FewUserFields = {
//   id: number;
//   gender: "male" | "female" | "non-binary" | "prefer-not-to-say";
//   name: string;
// };

// 📝 Same type above without hard coding
type FewUserFields = Pick<User, "id" | "gender" | "name">;
