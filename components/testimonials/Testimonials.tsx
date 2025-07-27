'use client'
import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import cn from 'classnames'
import avatar from '@/assets/images/avatar.jpg'
import btn from '@/assets/images/icons/testimonials-btn.svg'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { testimonialsList } from '@/constants/testimonials'

interface Props {
   className?: string
}

const Testimonials: FC<Props> = ({ className }) => {

   //============== SLIDER LOGIC ===================
   const [[page, direction], setPage] = useState<[number, number]>([0, 0])
   const testimonial = testimonialsList[page]

   const paginate = (newDirection: number) => {
      const newPage =
         (page + newDirection + testimonialsList.length) % testimonialsList.length
      setPage([newPage, newDirection])
   }

   const handleNext = () => paginate(1)
   const handlePrev = () => paginate(-1)

   //============== SLIDER HEIGHT ===================
   const sliderRef = useRef<HTMLDivElement>(null)
   const [maxHeight, setMaxHeight] = useState(0)

   useLayoutEffect(() => {
      if (!sliderRef.current) return

      const children = Array.from(sliderRef.current.children)
      const heights = children.map(child => (child as HTMLElement).offsetHeight)
      const max = Math.max(...heights)

      setMaxHeight(max)
   }, [testimonialsList])

   //============== AUTOMATICAL SLIDER ===================
   useLayoutEffect(() => {
      const interval = setInterval(() => {
         handleNext()
      }, 3000)
      return () => clearInterval(interval)
   }, [page])

   return (
      <section id='testimonials' className={cn(className, 'testimonials')}>
         <div
            className='testimonials__slider'
            style={{ height: `${maxHeight}px` }}
            ref={sliderRef}
         >
            <AnimatePresence mode="wait" custom={direction}>
               <motion.div
                  key={page}
                  className="testimonials__card"
                  custom={direction}
                  variants={{
                     enter: (dir: number) => ({ opacity: 0, x: dir * 100 }),
                     center: { opacity: 1, x: 0 },
                     exit: (dir: number) => ({ opacity: 0, x: dir * -100 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(event, info) => {
                     if (info.offset.x > 50) {
                        paginate(-1)
                     } else if (info.offset.x < -50) {
                        paginate(1)
                     }
                  }}
                  whileTap={{ cursor: 'grabbing' }}
               >
                  <h2 className='testimonials__title'>{testimonial.text}</h2>
                  <Image src={avatar} alt="avatar" width={40} height={40} className='testimonials__avatar' quality={100} />
                  <p className='testimonials__name'>{testimonial.name}</p>
                  <p className='testimonials__clinic'>{testimonial.clinic}</p>
               </motion.div>
            </AnimatePresence>
         </div>
         <div className='flex items-center gap-4'>
            <Image
               src={btn}
               alt="btn-left"
               width={38}
               height={38}
               className='testimonials__btn'
               onClick={handlePrev}
            />
            <Image
               src={btn}
               alt="btn-left"
               width={38}
               height={38}
               className='testimonials__btn rotate-180'
               onClick={handleNext}
            />
         </div>
      </section>
   )
}

export default Testimonials