import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import IconElement, { IconSize } from '@elements/Icon'
import { routes } from '../routes'

const Items = () => (
  <div className='part-nav-items fg-1'>
    <ul>
      {
        routes
          .filter((_, idx) => idx < routes.length - 1)
          .map((route, idx) => (
            <li className='link' key={ idx }>
              <NavLink exact={ true } to={ route.main.path } className='row ai-c'>
                <IconElement
                  path={ route.meta.iconPath! }
                  size={ IconSize.Medium }
                />
                <span>{ route.meta.name }</span>
              </NavLink>
            </li>
          ))
      }
    </ul>
  </div>
)

export default Items
