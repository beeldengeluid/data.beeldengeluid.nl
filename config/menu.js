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
    icon: icons.blog,
    title: 'blogs',
    to: 'blogs',
    color: classColors.blog,
  },
  {
    icon: icons.about,
    title: 'about',
    to: 'about',
  },
]
