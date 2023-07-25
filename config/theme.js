import colors from 'vuetify/es5/util/colors'

const theme = {
  nisvlightblue: '#05c8f0',
  nisvdarkblue: '#0f238c',
  primary: '#0f238c', // colors.blue.darken2, // dataset
  secondary: colors.amber.darken3, // project
  tertiary: colors.pink.darken1, // blog
  quaternary: colors.purple.darken1, // theme
  quinary: colors.teal.darken1, // lab
  senary: colors.green.darken1, // api
  accent: colors.grey.darken3,
  info: colors.teal.lighten1,
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3,
}

export const classColorIndex = {
  dataset: 'primary',
  project: 'secondary',
  blog: 'tertiary',
  topic: 'quaternary',
  lab: 'quinary',
  api: 'senary',
  archive: 'accent',
}

export const classColors = {
  dataset: theme[classColorIndex.dataset],
  project: theme[classColorIndex.project],
  blog: theme[classColorIndex.blog],
  topic: theme[classColorIndex.topic],
  lab: theme[classColorIndex.lab],
  api: theme[classColorIndex.api],
  archive: theme[classColorIndex.archive],
}

export default theme
