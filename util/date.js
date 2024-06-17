export const formatDate = (date, language = 'en') => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const locale = new Intl.Locale('en', { language })
  return new Date(date).toLocaleDateString(locale, options)
}

export const formatDateAsYear = (date) => {
  const options = { year: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
