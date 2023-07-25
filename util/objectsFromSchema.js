import { isUrl } from './url'

export const isObjectWithIdTypeName = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    ['@id', '@type', 'name'].every((key) => key in obj) &&
    isUrl(obj['@id'])
  )
}

export const isObjectWithIdName = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    ['@id', 'name'].every((key) => key in obj) &&
    isUrl(obj['@id'])
  )
}

export const isObjectWithIdOnly = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 1 &&
    Object.keys(obj)[0] === '@id' &&
    isUrl(obj['@id'])
  )
}

export const isObjectWithIdOnlyArray = (obj) => {
  return Array.isArray(obj) && obj.every((item) => isObjectWithIdOnly(item))
}

export const isObjectWithLanguageValueOnly = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 2 &&
    ['@language', '@value'].every((key) => key in obj)
  )
}

export const isSchemaProp = (string) => string.startsWith('sdo:')

export const stripSchemaURL = (string) => string.replace('sdo:', '')

export const camel2title = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()
