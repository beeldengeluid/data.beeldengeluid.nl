export const serialize = (obj) =>
  Object.entries(obj)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join('&')

export const isUrl = (string) => {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
