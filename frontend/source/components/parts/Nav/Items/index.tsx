import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Items = () => (
  <div className='part-nav-items'>
    <ul>
      {
        routes
          .filter((_, idx) => idx < routes.length - 1)
          .map((route, idx) => (
            <Link to={ route.main.path } key={ idx }>{ route.meta.name }</Link>
          ))
      }
    </ul>
  </div>
)

export default Items
