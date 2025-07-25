'use client'
import React, { FC } from 'react'
import Button from '../common/Button'
import Link from 'next/link'

const Buttons: FC = () => {

   const handleScrollToFeatures = () => {
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
         featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <div className='flex items-center gap-4 my-6 justify-center'>
         <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
            <Button variant='primary'>Start for Free</Button>
         </Link>
         <Button variant='secondary' onClick={handleScrollToFeatures}>Features</Button>
      </div>
   )
}

export default Buttons