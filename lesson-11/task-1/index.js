'use strict';

// put your code here
const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  if (isAsc === false) {
    return contacts.sort((a, b) => b.name.localeCompare(a.name));
  }
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
