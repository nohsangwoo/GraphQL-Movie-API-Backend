import { people } from "./db";

const Sangwoo = {
  name: "sangwoo",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    sangwoo: () => Sangwoo,
    people: () => people,
  },
};

export default resolvers;
