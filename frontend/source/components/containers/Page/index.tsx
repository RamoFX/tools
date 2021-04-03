import React, { FC } from 'react'
import './style.scss'

interface PageProperties {
  className?: string
}

const Page: FC<PageProperties> = ({ children, className }) => (
  <div className={ [ 'container-page', className ].join(' ') }>
    { children }
  </div>
)

export default Page
