import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Items = () => (
  <div className='part-nav-items'>
    {
      routes
        .filter((_, idx, array) => idx != array.length - 1)
        .map((route, idx) => <Link to={ route.path } key={ idx }>{ route.name }</Link>)
    }
  </div>
)

export default Items
