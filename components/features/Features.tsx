import React, { FC } from 'react'
import cn from 'classnames'
import Title from '../common/Title'
import Image from 'next/image'
import { FeaturesList } from '@/interfaces/features-list'
import * as motion from 'motion/react-client'

interface Props {
   className?: string
   data: FeaturesList[]
}

const Features: FC<Props> = ({ className, data }) => {

   return (
      <div className='container'>
         <section id='features' className={cn(className, 'features')}>
            <Title boldText='The complete'>patient documentation solution</Title>
            <p className='max-w-[734px] mt-1 mx-auto'>Simplify your workflow, ensure your practice is audit-ready, and keep sensitive patient data protected—all with no technical expertise required.</p>
            <div className='features__card-wrapper'>
               {data.map((item, key) => (
                  <motion.div
                     key={key}
                     className='features__card'
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.3, ease: 'easeInOut', when: 'beforeChildren', delay: key * 0.1 }}
                  >
                     <Image src={item.image} alt={item.title} width={50} height={50} />
                     <h3 className='features__card-title'>{item.title}</h3>
                     <p>{item.description}</p>
                  </motion.div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Features