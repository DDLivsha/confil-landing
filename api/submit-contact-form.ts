import { ContactFormSchemaProps, contactFormSchema } from '@/helpers/contact-form-zod-schema'
import toast from 'react-hot-toast';

export const handleSubmitForm = async (data: ContactFormSchemaProps, reset: () => void) => {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         }
      );

      if (!res.ok) {
         const err = await res.json();
         toast.error('Something went wrong: ' + err.message || 'Something went wrong. Please try again.');
         throw new Error(err.message ?? "Failed to send contact");
      } else {
         toast.success('Message sent successfully');
         reset()
      }
   } catch (error) {
      console.error("Failed to send contact:", error);
      toast.error('Something went wrong. Please try again.');
   }
}