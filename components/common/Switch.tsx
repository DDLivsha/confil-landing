'use client'
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   className?: string
   label?: string
}
const Switch: FC<Props> = ({ className, label, id, ...props }) => {

   const inputId = id || props.name || `input-${Math.random()}`

   return (
      <label htmlFor={inputId} className={cn('switch', className)}>
         <input
            id={inputId}
            type="checkbox"
            className="switch__input"
            {...props}
         />
         <div className="switch__slider" />
         {label && <span className="input__label">{label}</span>}
      </label>
   )
}

export default Switch