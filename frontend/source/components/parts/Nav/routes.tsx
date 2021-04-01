import { FC } from 'react'
import HomePage from '@components/pages/Home'
import ToolsPage from '@components/pages/Tools'
import ComponentCreatorPage from '@components/pages/ComponentCreator'
import ContentManagerPage from '@components/pages/ContentManager'
import NotFoundPage from '@components/pages/NotFound'
import { mdiHome, mdiTools, mdiPuzzleOutline, mdiContentSaveCogOutline } from '@mdi/js'

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
      path: '/tools',
      component: ToolsPage
    },
    meta: {
      name: 'Tools',
      iconPath: mdiTools
    }
  },
  {
    main: {
      path: '/component-creator',
      component: ComponentCreatorPage
    },
    meta: {
      name: 'ComponentCreator',
      iconPath: mdiPuzzleOutline
    }
  },
  {
    main: {
      path: '/content-manager',
      component: ContentManagerPage
    },
    meta: {
      name: 'ContentManager',
      iconPath: mdiContentSaveCogOutline
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
