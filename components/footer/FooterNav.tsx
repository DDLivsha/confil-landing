'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import { navigationMenuItems } from '@/constants/navigation-items'
import { handleScrollToBlock } from '@/helpers/scroll-to-block'
import { useHandleScroll } from '@/hooks/useHandleScroll'

const FooterNav: FC = () => {

   const handleScroll = useHandleScroll()

   return (
      <ul className="footer__list">
         {navigationMenuItems.map((item) => (
            <li
               key={item.id}
               className="footer__list-item"
               onClick={() => handleScroll(item.id)}
            >
               {item.title}
            </li>
         ))}
         <li
            className="footer__list-item"
         >
            <Link href={"/contact-us"}>
               Contact Us
            </Link>
         </li>
      </ul>
   )
}

export default FooterNav