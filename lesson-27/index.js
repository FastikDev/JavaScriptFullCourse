localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Viktor' }));
localStorage.setItem('name', 'Alina');
localStorage.setItem('age', JSON.stringify(17));

export const getLocalStorageDate = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newVavue;
    try {
      newVavue = JSON.parse(value);
    } catch (e) {
      newVavue = value;
    }
    return {
      ...acc,
      [key]: newVavue,
    };
  }, {});
};

console.log(getLocalStorageDate());
