import React, { DetailedHTMLProps, FC, forwardRef, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
   error?: FieldError
   label?: string
}

const Textarea: FC<Props> = forwardRef(({ className, label, id, error, ...props }, ref: React.ForwardedRef<HTMLTextAreaElement>) => {

   const inputId = id || props.name || `input-${Math.random()}`

   return (
      <div className='input__wrapper'>
         {label && <label htmlFor={inputId} className={cn('input__label', { '--error': error })}>{label}</label>}
         <textarea ref={ref} id={inputId} {...props} className={cn('input', className, { '--error': error })} />
         {error && <span className='input__error-msg'>{error.message}</span>}
      </div>
   )
})

export default Textarea