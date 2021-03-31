import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavPart from '@components/parts/Nav'
import ContentPart from '@components/parts/Content'

const Main = () => (
  <div className='layout-main'>
    <BrowserRouter>
      <NavPart />
      <ContentPart />
    </BrowserRouter>
  </div>
)

export default Main
