import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadingPage from '@pages/Loading'
import { routes } from '@parts/Nav/routes'

const Content = () => (
  <div className='part-content'>
    <Suspense fallback={ LoadingPage }>
      <Switch>
        {
          routes.map((route, idx) => (
            <Route exact={ idx == 0 } path={ route.main.path } key={ idx }>
              <route.main.component />
            </Route>
          ))
        }
      </Switch>
    </Suspense>
  </div>
)

export default Content
