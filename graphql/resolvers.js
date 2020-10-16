const Sangwoo = {
  name: "sangwoo",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => sangwoo,
  },
};

export default resolvers;
