'use client'
import React, { FC } from 'react'
import Button from '../common/Button'
import Link from 'next/link'
import { handleScrollToBlock } from '@/helpers/scroll-to-block'

const Buttons: FC = () => {

   return (
      <div className='flex items-center gap-4 my-6 justify-center'>
         <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
            <Button variant='primary'>Start for Free</Button>
         </Link>
         <Button variant='secondary' onClick={() => handleScrollToBlock('features')}>Features</Button>
      </div>
   )
}

export default Buttons