// Write your solution in this file!

const driver = {name: "Sam"}

const updateDriverWithKeyAndValue = (driver, key, val) => {
  const newObj = { ...driver };

  newObj[key] = val;

  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver,key,val) => {
  driver[key] = val;
  return driver;
}

const deleteFromDriverByKey = (obj,key) => {

  const newObj = { ...obj };

  delete newObj[key]

  return newObj;

}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
  delete obj[key]
  return obj
}
