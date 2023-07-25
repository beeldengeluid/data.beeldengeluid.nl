export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

export const formatDateAsYear = (date) => {
  const options = { year: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
