import React, { FC } from 'react'
import cn from 'classnames'
import Title from '../common/Title'
import Image from 'next/image'
import first from '@/assets/images/how-it-works/first.jpg'
import second from '@/assets/images/how-it-works/second.jpg'
import third from '@/assets/images/how-it-works/third.jpg'
import fourth from '@/assets/images/how-it-works/fourth.jpg'
import fifth from '@/assets/images/how-it-works/fifth.jpg'
import sixth from '@/assets/images/how-it-works/sixth.jpg'
import bg from '@/assets/images/how-it-works/bg-1.jpg'

interface Props {
   className?: string
}
const HowItWorks: FC<Props> = ({ className }) => {
   return (
      <section id='how-it-works' className={cn(className, 'explain')}>
         <div className='container'>
            <Title boldText='Works' boldTextPosition='end'>How it</Title>
            <p className='max-w-[734px] mt-1 mx-auto'>Streamline your process in minutes</p>
         </div>
         <div className=''>
            <div className='container explain__card --reverse'>
               <Image src={first} alt="Create or Upload a Form" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title --blue">1. Create or Upload a Form</h3>
                  <p className="explain__text">Start with a blank digital form, choose from ready-made templates, upload a PDF or scan paper documents directly into Confil.</p>
               </div>
            </div>
         </div>
         <div className='relative'>
            <div className='container explain__card '>
               <Image src={second} alt="Customize Fields & Design" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title">2. Customize Fields & Design</h3>
                  <p className="explain__text --white">Drag and drop text fields, checkboxes, signatures, and other elements. Adjust the layout and styling to match your needs and branding.</p>
               </div>
            </div>
            <Image src={bg} alt="bg" placeholder='blur' height={560} className='explain__background' />
         </div>

         <div className=''>
            <div className='container explain__card --reverse'>
               <Image src={third} alt="Autofill or Fill Manually" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title --blue">3. Autofill or Fill Manually</h3>
                  <p className="explain__text">Use smart autofill to populate known data instantly or fill out fields manually for full control.</p>
               </div>
            </div>
         </div>

         <div className=''>
            <div className='container explain__card'>
               <Image src={fourth} alt="Send to Patients or Save as Draft" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title --blue">4. Send to Patients or Save as Draft</h3>
                  <p className="explain__text">Share the form securely with patients for completion and signing, or save it internally for future use. Mark favorites for quick access.</p>
               </div>
            </div>
         </div>

         <div className='relative'>
            <div className='container explain__card --reverse'>
               <Image src={fifth} alt="Collect Signatures & Track Progress" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title">5. Collect Signatures & Track Progress</h3>
                  <p className="explain__text --white">Receive secure digital signatures and monitor signing status in real time.</p>
               </div>
            </div>
            <Image src={bg} alt="bg" placeholder='blur' height={560} className='explain__background' />
         </div>

         <div className=''>
            <div className='container explain__card'>
               <Image src={sixth} alt="Archive, Export, or Print" width={520} height={348} className='explain__image' />
               <div className='flex flex-col gap-1.5'>
                  <h3 className="explain__title --blue">6. Archive, Export, or Print</h3>
                  <p className="explain__text">Archive signed forms, export as PDF, or print copies when needed. All documents are safely stored and easy to manage.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HowItWorks