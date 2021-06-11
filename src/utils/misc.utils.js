export const createIntegerArrayFromLength = (arrayLength) =>
  Array.from({ length: arrayLength }, (arrayItem, index) => index + 1)
