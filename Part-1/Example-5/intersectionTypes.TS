// 📝 "Intersection" here means variables of type `User`
// must contain all direct properties of `LoginFields`
// `PersonalFields`, and `AccountDetails`
// 📝 i.e., we're saying a "member" of the "set" `User`
// must be a member of the constituent sets of `User`
// 📝 To rephrase one more time, elements of the "set" `loginFields`
// are "tuples" (id, email, username, password);
// We're thinking of these constituent types as sets which are defined
//  via a "basis" of properties rather than a set of "basis" elements
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
