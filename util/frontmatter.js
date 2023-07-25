export const isEmailObject = (value) => {
  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ['name', 'email'].every((key) => key in value)
  )
}

export const isEmailArray = (value) => {
  return value.every((v) => isEmailObject(v))
}

export const isLinkObject = (value) => {
  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ['name', 'url'].every((key) => key in value)
  )
}

export const isLinkArray = (value) => {
  return value.every((v) => isLinkObject(v))
}

export const filterUndefined = (article) => {
  return Object.entries(article).filter(
    ([, value]) =>
      value !== undefined && value !== '' && value !== [] && value !== {}
  )
}
