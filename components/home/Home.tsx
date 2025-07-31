import React, { FC } from 'react'
import cn from 'classnames'
import Buttons from './Buttons'
import Image from 'next/image'
import homepage from '@/assets/images/homepage.png'

interface Props {
   className?: string
}
const Home: FC<Props> = ({ className }) => {
   return (
      <div className='container'>
         <section id='home' className={cn('home', className)}>
            <h1 className='home__title'>Digitise Clinic Forms Effortlessly & Securely</h1>
            <p className='home__text'>Simplify your workflow, ensure your practice is audit-ready, and keep sensitive patient data protected—all with no technical expertise required.</p>
            <Buttons />
            <Image src={homepage} alt="homepage" placeholder='blur' width={800} height={653} className='home__image' />
         </section>
      </div>
   )
}

export default Home