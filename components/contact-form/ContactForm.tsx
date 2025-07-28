'use client'
import React, { FC } from 'react'
import cn from 'classnames'
import Input from '../common/Input'
import Textarea from '../common/Textarea'
import Button from '../common/Button'
import { ContactFormSchemaProps, contactFormSchema } from '@/helpers/contact-form-zod-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface Props {
   className?: string
}
const ContactForm: FC<Props> = ({ className }) => {

   const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormSchemaProps>({ resolver: zodResolver(contactFormSchema), mode: 'onTouched' })

   const onSubmit = (data: ContactFormSchemaProps) => {
      console.log(data)
      reset()
   }

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} className={cn(className, 'contact__form')}>
            <Input
               label='Full name'
               placeholder='John Doe'
               className='contact__form-name'
               {...register('name')}
               error={errors.name}
            />
            <Input
               label='Email'
               placeholder='johndoe@gmail.com'
               className='contact__form-email'
               {...register('email')}
               error={errors.email}
            />
            <Textarea
               label='Message'
               placeholder='Your message'
               rows={5}
               className='contact__form-message'
               {...register('message')}
               error={errors.message}
            />
            <Button type='submit' className='contact__form-btn'>Send message</Button>
         </form>
      </>
   )
}

export default ContactForm