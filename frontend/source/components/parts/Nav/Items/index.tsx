import React from 'react'
import { Link } from 'react-router-dom'
import IconElement, { IconSize } from '@elements/Icon'
import { routes } from '../routes'

const Items = () => (
  <div className='part-nav-items'>
    <ul>
      {
        routes
          .filter((_, idx) => idx < routes.length - 1)
          .map((route, idx) => (
            <li key={ idx }>
              <Link to={ route.main.path }>
                <IconElement
                  path={ route.meta.iconPath! }
                  size={ IconSize.Small }
                />
                <span>{ route.meta.name }</span>
              </Link>
            </li>
          ))
      }
    </ul>
  </div>
)

export default Items
