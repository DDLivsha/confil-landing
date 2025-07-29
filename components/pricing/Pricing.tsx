'use client'
import React, { FC } from 'react'
import cn from 'classnames'
import Title from '../common/Title'
import Switch from '../common/Switch'
import save_up from '@/assets/images/save-up.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button'
import { pricingPlans } from '@/constants/pricing-plans'

interface Props {
   className?: string
}
const Pricing: FC<Props> = ({ className }) => {

   const [subscriptionPeriod, setSubscriptionPeriod] = React.useState<'year' | 'month'>('month')

   return (
      <section id='pricing' className={cn(className, 'pricing')}>
         <div className='container'>
            <Title boldText='Simple'>Pricing, Built for Clinics of All Sizes</Title>
            <p className='max-w-[734px] mt-1 mx-auto text-center'>Whether you're a solo practitioner or managing a multi-site healthcare network, Confil offers flexible plans to match your needs — no hidden fees, no IT setup required.</p>
         </div>
         <div className='container flex items-center justify-center'>
            <div className='flex items-center justify-center mt-[42px] gap-[10px] relative w-fit'>Monthly
               <Switch
                  checked={subscriptionPeriod === 'year'}
                  onChange={() => setSubscriptionPeriod(subscriptionPeriod === 'month' ? 'year' : 'month')}
                  id='switch'
               />
               Yearly
               <Image src={save_up} alt="save-up" width={145} height={28} className='absolute right-[-65px] top-[-30px]' />
            </div>
         </div>
         <div className="pricing__card-wrapper">
            {pricingPlans.map((item, key) => (
               <div key={key} className="pricing__card">
                  <div>
                     <h3 className="pricing__card-title">{item.name}</h3>
                     <p>{item.description}</p>
                  </div>
                  <div className='pricing__card-price'><p>$</p>{subscriptionPeriod === 'year' ? item.price_yearly : item.price_monthly}<span>/{subscriptionPeriod}</span></div>
                  <ul className="pricing__card-list">
                     {item.features.map((item, key) => (
                        <li key={key}>{item}</li>
                     ))}
                  </ul>
                  <Link className='w-full' href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
                     <Button variant='primary' className='w-full'>Try this Plan</Button>
                  </Link>
               </div>
            ))}
            <div className="pricing__card">
               <h3 className="pricing__card-title">Enterprise</h3>
               <p className="pricing__card-text">Tailored for clinic networks</p>
               <div className='pricing__card-price --enterprise'>Custom</div>
               <ul className="pricing__card-list">
                  <li>Unlimited users</li>
                  <li>50,000+ forms/month</li>
                  <li>Custom data compliance, integrations, private cloud hosting</li>
               </ul>
               <Link href='/contact-us' className='w-full'>
                  <Button variant='primary' className='w-full'>Contact Us</Button>
               </Link>
            </div>
         </div>
         <h4 className='pricing__text'>Or try it out with our <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>Free Plan</Link></h4>
      </section>
   )
}

export default Pricing