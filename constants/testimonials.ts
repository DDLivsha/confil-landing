import { StaticImageData } from "next/image"
import avatar from '@/assets/images/avatar.jpg'
import Image from "next/image"

export interface TestimonialsProps {
   text: string
   avatar: StaticImageData
   name: string
   clinic: string
}

export const testimonialsList: TestimonialsProps[] = [
   {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus viverra ante vitae fermentum. Ut venenatis massa dapibus dui malesuada, id congue erat suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus viverra ante vitae fermentum. Ut venenatis massa dapibus dui malesuada, id congue erat suscipit."',
      avatar,
      name: 'Dr. Leonid Kuchma',
      clinic: 'Riyadh Clinic 1'
   },
   {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus viverra ante vitae fermentum. Ut venenatis massa dapibus dui malesuada, id congue erat suscipit."',
      avatar,
      name: 'Dr. Pes Patron',
      clinic: 'Riyadh Clinic 2'
   },
   {
      text: '"Lorem ipsum dolor "',
      avatar,
      name: 'Dr. Sarah Ahmed',
      clinic: 'Riyadh Clinic 3'
   }
]