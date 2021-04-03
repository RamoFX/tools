import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavPart from '@parts/Nav'
import ContentPart from '@parts/Content'

const Main = () => (
  <div className='layout-main columns'>
    <BrowserRouter>
      <NavPart />
      <ContentPart />
    </BrowserRouter>
  </div>
)

export default Main
