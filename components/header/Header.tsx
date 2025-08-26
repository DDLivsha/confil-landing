'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import logo from '@/assets/images/logo.svg'
import logoWhite from '@/assets/images/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button'
import { navigationMenuItems } from '@/constants/navigation-items'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import { useHandleScroll } from '@/hooks/useHandleScroll'
import BurgerButton from './BurgerButton'
import { AnimatePresence, motion } from 'motion/react'

const Header: FC = () => {

   const pathname = usePathname()
   const handleScroll = useHandleScroll()

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

   //================== MOBILE MENU ======================
   const [isOpen, setIsOpen] = useState(false)
   const mobileMenuRef = useRef<HTMLDivElement | null>(null)
   const burgerRef = useRef<HTMLButtonElement | null>(null)
   //================== UNSET SCROLL FOR BODY ======================
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         const timeout = setTimeout(() => {
            document.body.style.overflow = ''
         }, 300)

         return () => clearTimeout(timeout)
      }
   }, [isOpen])

   //================== OUTSIDE CLICK ======================
   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         const target = event.target as Node
         const menuEl = mobileMenuRef.current
         const burgerEl = burgerRef.current

         if (isOpen && menuEl && !menuEl.contains(target) && burgerEl && !burgerEl.contains(target)) {
            setIsOpen(false)
         }
      }

      document.addEventListener('mousedown', handleOutsideClick)

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick)
      }
   }, [isOpen])

   return (
      <div className='container sticky top-4 z-[100]'>
         <BurgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            ref={burgerRef}
         />
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
                        onClick={() => handleScroll(item.id)}
                     >
                        {item.title}
                     </li>
                  ))}
                  <li
                     className={cn("header__nav-item", { '--active': pathname === '/contact-us' })}
                  >
                     <Link href="/contact-us">
                        Contact Us
                     </Link>
                  </li>
               </ul>
               <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
                  <Button variant='primary'>Get Started</Button>
               </Link>
            </nav>
         </header>
         <AnimatePresence mode='wait'>
            {isOpen &&
               <motion.nav
                  className="header__mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  <motion.div
                     ref={mobileMenuRef}
                     className="header__nav-list"
                     initial={{ opacity: 0, x: 100 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 100 }}
                  >
                     <ul className='header__nav-mobile'>
                        {navigationMenuItems.map((item, index) => (
                           <li key={item.id}
                              className={cn("header__nav-item", { '--active': activeBlock === item.id })}
                              onClick={() => { handleScroll(item.id); setIsOpen(false) }}
                           >
                              {item.title}
                           </li>
                        ))}
                        <li
                           className={cn("header__nav-item", { '--active': pathname === '/contact-us' })}
                        >
                           <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                              Contact Us
                           </Link>
                        </li>
                     </ul>
                     <div className='header__mobile-logo'>
                        <Image src={logoWhite} alt="logo" width={40} height={40} />
                        <p className='footer__logo-text'>Confil</p>
                     </div>
                  </motion.div>
               </motion.nav>}
         </AnimatePresence>
      </div>
   )
}

export default Header