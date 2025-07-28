'use client'
import { motion } from 'motion/react'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, forwardRef } from 'react'

interface Props extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
   isOpen: boolean
}

const BurgerButton: FC<Props> = forwardRef(({ isOpen, ...props }, ref) => {
   return (
      <button ref={ref} {...props} className='burger'>
         <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0, background: isOpen ? '#fff' : '#4B465C' }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
         />
         <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: 0, background: isOpen ? '#fff' : '#4B465C' }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
         />
         <motion.span
            animate={{ opacity: isOpen ? 0 : 1, background: isOpen ? '#fff' : '#4B465C' }}
            transition={{ duration: 0.1 }}
         />
         <motion.span
            animate={{ opacity: isOpen ? 0 : 1, background: isOpen ? '#fff' : '#4B465C' }}
            transition={{ duration: 0.1 }}
         />
      </button>
   )
})

export default BurgerButton