import { FC } from 'react'
import HomePage from '@pages/Home'
import ComponentCreatorPage from '@pages/ComponentCreator'
import ContentManagerPage from '@pages/ContentManager'
import NotFoundPage from '@pages/NotFound'
import { mdiHome, mdiTools, mdiPuzzle, mdiContentSaveCog } from '@mdi/js'

interface route {
  main: {
    path: string,
    component: FC
  },
  meta: {
    name: string,
    iconPath?: string
  }
}

export const routes: Array<route> = [
  {
    main: {
      path: '/',
      component: HomePage
    },
    meta: {
      name: 'Home',
      iconPath: mdiHome
    }
  },
  {
    main: {
      path: '/component-creator',
      component: ComponentCreatorPage
    },
    meta: {
      name: 'ComponentCreator',
      iconPath: mdiPuzzle
    }
  },
  {
    main: {
      path: '/content-manager',
      component: ContentManagerPage
    },
    meta: {
      name: 'ContentManager',
      iconPath: mdiContentSaveCog
    }
  },
  {
    main: {
      path: '*',
      component: NotFoundPage
    },
    meta: {
      name: 'Not Found'
    }
  }
]
