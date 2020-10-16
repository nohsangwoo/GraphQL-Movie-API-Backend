import { people, getById } from "./db";

const Sangwoo = {
  name: "sangwoo",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    sangwoo: () => Sangwoo,
    people: () => people,
    // 전달받은 argument에서 id를 뽑아옴
    person: (_, { id }) => getById(id),
  },
};

export default resolvers;
