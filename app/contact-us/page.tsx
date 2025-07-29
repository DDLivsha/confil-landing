import React from 'react'
import Title from '@/components/common/Title'
import border from '@/assets/images/faq-border.svg'
import contact_us from '@/assets/images/contact-us.jpg'
import Image from 'next/image'
import ContactForm from '@/components/contact-form/ContactForm'

export async function generateMetadata() {
   return {
      title: 'Consentfillers | Contact Us',
      description: 'Any question or remark? just write us a message',
   }
}

export default function ContactUsPage() {
   return (
      <main className='contact container'>
         <Title boldText='Let`s work'>together</Title>
         <p>Any question or remark? just write us a message</p>
         <div className='contact__content'>
            <div className='contact__image'>
               <Image src={contact_us} alt="contact us" placeholder='blur' className='faq__image-pic contact__image-pic' width={434} height={486} />
               <Image src={border} alt="border" width={188} height={156} className='faq__border' />
            </div>
            <div className="contact__form-wrapper">
               <div>
                  <h4 className='contact__form-title'>Send a message</h4>
                  <p className='max-w-[500px]'>If you would like to discuss anything related to payment, account, licensing, partnerships, or have pre-sales questions, you’re at the right place.</p>
               </div>
               <ContactForm />
            </div>
         </div>
      </main>
   )
}
