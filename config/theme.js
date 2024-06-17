import colors from 'vuetify/util/colors'

const theme = {
  nisvlightblue: '#05c8f0',
  nisvdarkblue: '#0f238c',
  primary: '#0f238c', // colors.blue.darken2, // dataset
  secondary: colors.amber.darken3,
  tertiary: colors.pink.darken1, // showcase
  quaternary: colors.purple.darken1, // theme
  quinary: colors.teal.darken1,
  senary: colors.green.darken1, // api
  accent: colors.grey.darken3,
  info: colors.teal.lighten1,
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3,
}

export const classColorIndex = {
  dataset: 'primary',
  showcase: 'tertiary',
  api: 'senary',
}

export const classColors = {
  dataset: theme[classColorIndex.dataset],
  showcase: theme[classColorIndex.showcase],
  api: theme[classColorIndex.api],
}

export default theme
