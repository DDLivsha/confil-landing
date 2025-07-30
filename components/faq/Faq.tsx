import React, { FC } from 'react'
import cn from 'classnames'
import Title from '../common/Title'
import border from '@/assets/images/faq-border.svg'
import faq from '@/assets/images/faq-pic.jpg'
import Image from 'next/image'
import Accordion from '../common/Accordion'
import { FaqProps } from '@/interfaces/accordions'

interface Props {
   className?: string
   data: FaqProps[]
}
const Faq: FC<Props> = ({ className, data }) => {
   return (
      <section id='faqs' className={cn(className, 'faq')}>
         <div className='container'>
            <Title boldText='questions' boldTextPosition='end'>Frequently asked</Title>
            <p className='max-w-[734px] mt-1 mx-auto'>Browse through these FAQs to find answers to commonly asked questions.</p>
            <div className='faq__wrapper'>
               <div className="faq__image">
                  <Image src={faq} alt="faq" placeholder='blur' className='faq__image-pic' width={397} height={265} />
                  <Image src={border} alt="border" width={188} height={156} className='faq__border --faq' />
               </div>
               <div className='faq__accordion'>
                  {data.map((item, key) => (
                     <Accordion key={key} title={item.title} text={item.text} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq