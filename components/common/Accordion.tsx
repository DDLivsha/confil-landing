'use client'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, useState } from 'react'
import cn from 'classnames'
import { AnimatePresence, motion } from 'motion/react'
import arrow from '@/assets/images/icons/arrow-right.svg'
import Image from 'next/image'

interface Props extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'ref'> {
   className?: string
   title: string
   text: string
}

const Accordion: FC<Props> = ({ text, title, className, ...props }) => {

   const [isOpen, setIsOpen] = useState(false)

   return (
      <motion.div
         {...props}
         className={cn('accordion', className)}
         onClick={() => setIsOpen(!isOpen)}
         initial={{ gap: 0 }}
         animate={{ gap: isOpen ? '13px' : 0 }}
         transition={{ duration: 0.3, ease: 'easeInOut', when: 'beforeChildren' }}
      >
         <div className="accordion__title">
            {title}
            <Image
               src={arrow}
               alt="arrow"
               width={20}
               height={20}
               className={cn('accordion__arrow', { '--open': isOpen })}
            />
         </div>

         <AnimatePresence initial={false}>
            {isOpen && (
               <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                  animate={{ height: 'auto', opacity: 1, overflow: 'visible' }}
                  exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
               >
                  <p className="accordion__text">{text}</p>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   )
}

export default Accordion