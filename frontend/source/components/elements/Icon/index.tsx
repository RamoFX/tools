import React, { FC } from 'react'

export enum IconSize { VerySmall, Small, Medium, Large, VeryLarge  }

interface IconProperties {
  path: string,
  size: IconSize
}

const Icon: FC<IconProperties> = ({ path, size }) => (
  <div className={ `element-icon size-${ IconSize[size]!.toLowerCase() }` }>
    <svg viewBox='0 0 24 24'>
      <g>
        <path d={ path } />
        <rect width='24' height='24' fill='transparent' />
      </g>
    </svg>
  </div>
)

export default Icon
