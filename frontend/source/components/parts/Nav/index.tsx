import React from 'react'
import './style.scss'
import NavHeader from './Header'
import NavItems from './Items'
 
const Nav = () => (
  <div className='part-nav rows'>
    <NavHeader />
    <NavItems />
  </div>
)

export default Nav
