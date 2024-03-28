const getPeople = obj => {
  // put your code here
  return Object.values(obj).flatMap(user => user.map(person => person.name));
};
