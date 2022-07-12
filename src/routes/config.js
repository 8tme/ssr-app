import Ad from '../pages/Ad'
import Home from '../pages/home'
import List from '../pages/List'
import NotFound from '../pages/NotFound'

export const routerConfig = [
  { path: '/', comp: Home },
  { path: '/ad', comp: Ad },
  { path: '/list', comp: List },
  { path: '*', comp: NotFound },
]
