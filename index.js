const driver = {}

// NON-DESTRUCTIVELY UPDATES AN OBJECT:
function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
  // {} - is the most important bit here
}
updateDriverWithKeyAndValue(driver, "name", "Sam");


// DESTRUCTIVELY UPDATES AN OBJECT:
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
updateDriverWithKeyAndValue(driver, "name", "Sam");


// NON-DESTRUCTIVELY DELETES A KEY/VALUE PAIR:
function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}
deleteFromDriverByKey(driver, "name");


// DESTRUCTIVELY DELETES A KEY/VALUE PAIR:
function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
destructivelyDeleteFromDriverByKey(driver, "name");
