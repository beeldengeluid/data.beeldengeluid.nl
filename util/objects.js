// Strip properties from object
export const stripObject = (object, properties) =>
  Object.keys(object).reduce((result, key) => {
    if (!properties.includes(key)) {
      result[key] = object[key]
    }
    return result
  }, {})
