import React, { FC } from 'react'
import cn from 'classnames'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
   className?: string
   boldText: string
   children: React.ReactNode
}
const Title: FC<Props> = ({ className, boldText, children, ...props }) => {
   return (
      <h2 {...props} className={cn('title', className)}>
         {boldText} <span className='title__text'>{children}</span>
      </h2>
   )
}

export default Title