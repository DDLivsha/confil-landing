'use client'
import React, { FC } from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from './common/Button'

const Header: FC = () => {

   const menuItems = [
      {
         title: 'Features',
         id: 'features'
      },
      {
         title: 'How it works',
         id: 'how-it-works'
      },
      {
         title: 'Testimonials',
         id: 'testimonials'
      },
      {
         title: 'Pricing',
         id: 'pricing'
      },
      {
         title: 'FAQs',
         id: 'faqs'
      }
   ]

   return (
      <header className='header'>
         <Link href="/" className='header__logo'>
            <Image src={logo} alt="logo" width={40} height={40} priority />
            <p className='header__logo-text'>Confil</p>
         </Link>
         <nav className="header__nav">
            <ul className="header__nav-list">
               {menuItems.map((item) => (
                  <li
                     key={item.id}
                     className="header__nav-item"
                  >
                     {item.title}
                  </li>
               ))}
               <Link href="/contact-us">
                  <li
                     className="header__nav-item"
                  >
                     Contact Us
                  </li>
               </Link>
            </ul>
            <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
               <Button variant='primary'>Get Started</Button>
            </Link>
         </nav>
      </header>
   )
}

export default Header