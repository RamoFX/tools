import React from 'react'
import { Link } from 'react-router-dom'
import IconElement, { size } from '@components/elements/Icon'
import { routes } from '../routes'

const Items = () => (
  <div className='part-nav-items'>
    <ul>
      {
        routes
          .filter((_, idx) => idx < routes.length - 1)
          .map((route, idx) => (
            <li>
              <IconElement path={ route.meta.iconPath! } size={ size.small } /><Link to={ route.main.path } key={ idx }>{ route.meta.name }</Link>
            </li>
          ))
      }
    </ul>
  </div>
)

export default Items
