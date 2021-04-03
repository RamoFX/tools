import React, { FC, MouseEventHandler } from 'react'
import './style.scss'

export enum ButtonSize { Small, Medium, Large }
export enum ButtonType { Normal, Elevatable, Flat }

interface ButtonProperties {
  size?: ButtonSize,
  type?: ButtonType,
  disabled?: boolean,
  text: string,
  clickHandler?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProperties> = ({ size = ButtonSize.Medium, type = ButtonType.Normal, disabled = false, text, clickHandler }) => (
  <button
    className={ [
      'element-button',
      'font-weight-bold',
      `h${ Object.keys(ButtonSize).length / 2 - size + 3 }`,
      `size-${ ButtonSize[size]!.toLowerCase() }`,
      `type-${ ButtonType[type]!.toLowerCase() }`,
      disabled ? 'disabled' : ''
    ].join(' ') }
    onClick={ !disabled ? clickHandler : undefined }
  >
    { text }
  </button>
)

export default Button
