import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '@parts/Nav/routes'

const Content = () => (
  <div className='part-content'>
    <Switch>
      {
        routes.map((route, idx) => (
          <Route exact={ true } path={ route.main.path } key={ idx } component={ route.main.component } />
        ))
      }
    </Switch>
  </div>
)

export default Content
