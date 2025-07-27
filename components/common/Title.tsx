import React, { FC } from 'react'
import cn from 'classnames'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
   className?: string
   boldText: string
   children: React.ReactNode
   boldTextPosition?: 'start' | 'end'
}
const Title: FC<Props> = ({ className, boldText, boldTextPosition = 'start', children, ...props }) => {
   return (
      <h2 {...props} className={cn('title', className)}>
         {boldTextPosition === 'start' && boldText} <span className='title__text'>{children}</span> {boldTextPosition === 'end' && boldText}
      </h2>
   )
}

export default Title