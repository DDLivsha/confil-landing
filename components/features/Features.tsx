import React, { FC } from 'react'
import cn from 'classnames'
import Title from '../common/Title'
import Image from 'next/image'
import { featuresList } from '@/constants/features-list'

interface Props {
   className?: string
}

const Features: FC<Props> = ({ className }) => {
   return (
      <section id='features' className={cn(className, 'features')}>
         <Title boldText='The complete'>patient documentation solution</Title>
         <p className='max-w-[734px] mt-1 mx-auto'>Simplify your workflow, ensure your practice is audit-ready, and keep sensitive patient data protected—all with no technical expertise required.</p>
         <div className='features__card-wrapper'>
            {featuresList.map((item, key) => (
               <div key={key} className='features__card'>
                  <Image src={item.image} alt={item.title} width={50} height={50} />
                  <h3 className='features__card-title'>{item.title}</h3>
                  <p>{item.description}</p>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Features