var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});