const {
  createAndSavePerson,
  createManyPeople,
  // findPeopleByName,
  // findOneByFood,
  // findPersonById,
  // findEditThenSave,
  // findAndUpdate,
  // removeById,
  // removeManyPeople,
  // queryChain,
} = require('./crudMongo');

const runTests = async () => {
  // Test operations
  await createAndSavePerson();
  // await createManyPeople([{ name: 'Alice', age: 25, favoriteFoods: ['Pasta'] }]);
  // await findPeopleByName('John Doe');
  // await findOneByFood('Pizza');
  // await findPersonById('some_id');
  // await findEditThenSave('some_id');
  // await findAndUpdate('Alice', 35);
  // await removeById('some_id');
  // await removeManyPeople('Mary');
  // await queryChain('Pasta');
};

runTests();
