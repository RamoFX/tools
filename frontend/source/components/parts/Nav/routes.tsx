import HomePage from '@components/pages/Home'
import ToolsPage from '@components/pages/Tools'
import ComponentCreatorPage from '@components/pages/ComponentCreator'
import ContentManagerPage from '@components/pages/ContentManager'
import NotFoundPage from '@components/pages/NotFound'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tools',
    name: 'Tools',
    component: ToolsPage
  },
  {
    path: '/component-creator',
    name: 'Component Creator',
    component: ComponentCreatorPage
  },
  {
    path: '/content-manager',
    name: 'Content Manager',
    component: ContentManagerPage
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFoundPage
  }
]
