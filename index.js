// 1. Case-insensitive name match
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

// 2. Match drivers whose names start with the provided letters
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

// 3. Match drivers by object property `name`
function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name === query
  );
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};

