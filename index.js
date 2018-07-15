// Write your solution in this file!
const driver = {
  name: "Sena"
}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key] : value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const array = Object.assign({}, driver);
  delete array[key];
  return array
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
