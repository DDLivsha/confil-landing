'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button'
import { navigationMenuItems } from '@/constants/navigation-items'
import { handleScrollToBlock } from '@/helpers/scroll-to-block'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

const Header: FC = () => {

   const pathname = usePathname()

   //================= SCROLL FOR NAV ======================
   const [activeBlock, setActiveBlock] = useState<string | null>(null)
   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.2
      }
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setActiveBlock(entry.target.id)
            }
         })
      }, options)

      if (pathname === '/') {
         navigationMenuItems.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
            sectionRefs.current[item.id] = el;
         });
      }

      const handleScroll = () => {
         if (window.scrollY < 50) {
            setActiveBlock(null)
         }
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
         observer.disconnect();
         window.removeEventListener('scroll', handleScroll);
      };

   }, [pathname])

   return (
      <div className='container sticky top-4 z-[100]'>
         <header className='header'>
            <Link href="/" className='header__logo'>
               <Image src={logo} alt="logo" width={40} height={40} />
               <p className='header__logo-text'>Confil</p>
            </Link>
            <nav className="header__nav">
               <ul className="header__nav-list">
                  {navigationMenuItems.map((item) => (
                     <li
                        key={item.id}
                        className={cn("header__nav-item", { '--active': activeBlock === item.id })}
                        onClick={() => handleScrollToBlock(item.id)}
                     >
                        {item.title}
                     </li>
                  ))}
                  <Link href="/contact-us">
                     <li
                        className={cn("header__nav-item", { '--active': pathname === '/contact-us' })}
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
      </div>
   )
}

export default Header