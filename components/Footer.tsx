import React, { FC } from 'react'
import logoWhite from '@/assets/images/logo-white.svg'
import facebook from '@/assets/images/icons/facebook.svg'
import twitter from '@/assets/images/icons/twitter.svg'
import google from '@/assets/images/icons/google.svg'
import Image from 'next/image'
import Link from 'next/link'
import { navigationMenuItems } from '@/constants/navigation-items'
import { format } from 'date-fns'

const Footer: FC = () => {
   return (
      <footer className='footer'>
         <div className='footer__content-wrapper'>
            <div className='container footer__content'>
               <div className='flex flex-col gap-4'>
                  <div className='footer__logo'>
                     <Image src={logoWhite} alt="logo" width={40} height={40} />
                     <p className='footer__logo-text'>Confil</p>
                  </div>
                  <p className='footer__text'>Platform for medical legal documentation management and filling</p>
               </div>
               <div className='flex flex-col gap-[26px]'>
                  <p className="footer__title">Navigation</p>
                  <ul className="footer__list">
                     {navigationMenuItems.map((item) => (
                        <li
                           key={item.id}
                           className="footer__list-item"
                        >
                           {item.title}
                        </li>
                     ))}
                     <Link href={"/contact-us"}>
                        <li
                           className="footer__list-item"
                        >
                           Contact Us
                        </li>
                     </Link>
                  </ul>
               </div>
            </div>
         </div>
         <div className="container flex items-center justify-between gap-4">
            <p className="footer__copyright">© {format(new Date(), 'yyyy')} <span>Confil</span></p>
            <div className='flex gap-6 items-center'>
               <Link href="https://www.facebook.com/"><Image src={facebook} alt="facebook" width={12} height={12} /></Link>
               <Link href="https://twitter.com/"><Image src={twitter} alt="twitter" width={24} height={24} /></Link>
               <Link href="https://www.google.com/"><Image src={google} alt="google" width={24} height={24} /></Link>
            </div>
         </div>
      </footer>
   )
}

export default Footer