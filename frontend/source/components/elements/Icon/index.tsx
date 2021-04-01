import React, { FC } from 'react'

enum size { small, medium, large, veryLarge }

interface IconProperties {
  path: string,
  size: size
}

const Icon: FC<IconProperties> = ({ path, size }) => (
  <div className={ `element-icon size-${ size }` }>
    <svg viewBox='0 0 24 24'>
      <g>
        <path d={ path } />
        <rect width='24' height='24' fill='transparent' />
      </g>
    </svg>
  </div>
)

export default Icon
