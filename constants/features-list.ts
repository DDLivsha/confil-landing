import centralized from '@/assets/images/features/centralized.svg'
import create_forms from '@/assets/images/features/create-forms.svg'
import digital_signature from '@/assets/images/features/digital-signature.svg'
import enterprise from '@/assets/images/features/enterprise.svg'
import seamless from '@/assets/images/features/seamless.svg'
import smart_patient from '@/assets/images/features/smart-patient.svg'
import { StaticImageData } from 'next/image'

export interface FeaturesList {
   title: string
   description: string
   image: StaticImageData
}

export const featuresList: FeaturesList[] = [

   {
      title: 'Centralized Form Repository',
      description: 'Easily manage all your patient forms, documents, and templates in one secure place.',
      image: centralized
   },
   {
      title: 'Create Forms from Anywhere',
      description: 'Generate digital forms from templates, photos, scans, or start from scratch — your workflow, your choice.',
      image: create_forms
   },
   {
      title: 'Digital Signature & Tracking',
      description: 'Send forms for legally valid eSignatures and track their status in real time.',
      image: digital_signature
   },
   {
      title: 'Smart Patient Management',
      description: 'Save patients to favorites, view form history, and streamline your communication.',
      image: smart_patient
   },
   {
      title: 'Enterprise & Team Access',
      description: 'Collaborate with teams or manage multiple practices with powerful enterprise tools.',
      image: enterprise
   },
   {
      title: 'Seamless Form Automation',
      description: 'Pre-fill, duplicate, and reuse forms to save time and reduce manual work.',
      image: seamless
   },
]