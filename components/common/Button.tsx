'use client'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cn from 'classnames'
import { motion } from 'motion/react'

interface Props extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'ref'> {
   children: React.ReactNode,
   className?: string
   variant?: 'primary' | 'secondary'
}

const Button: FC<Props> = ({ children, variant = 'secondary', className, ...props }) => {
   return (
      <motion.button
         {...props}
         className={cn('button', className, {
            '--primary': variant === 'primary',
            '--secondary': variant === 'secondary',
         })}
         initial={{ scale: 1 }}
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         transition={{ duration: 0.2, ease: 'easeInOut', type: 'spring' }}
      >
         {children}
      </motion.button>
   )
}

export default Button