import icons from './icons'
import { classColors } from './theme'

export default [
  {
    icon: icons.home,
    title: 'home',
    to: 'index',
  },
  {
    icon: icons.dataset,
    title: 'datasets',
    to: 'datasets',
    color: classColors.dataset,
  },
  {
    icon: icons.api,
    title: 'apis',
    to: 'apis',
    color: classColors.api,
  },
  {
    icon: icons.showcase,
    title: 'showcases',
    to: 'showcases',
    color: classColors.showcase,
  },
  {
    icon: icons.about,
    title: 'about',
    to: 'about',
  },
]
