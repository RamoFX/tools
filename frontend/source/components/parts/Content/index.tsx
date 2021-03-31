import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadingPage from '@components/pages/Loading'
import { routes } from '@components/parts/Nav/routes'

const Content = () => (
  <Suspense fallback={ LoadingPage }>
    <Switch>
      {
        routes.map(({ path, name: _, component: Component }, idx) => (
          <Route exact={ idx == 0 } path={ path } key={ idx }>
            <Component />
          </Route>
        ))
      }
    </Switch>
  </Suspense>
)

export default Content
