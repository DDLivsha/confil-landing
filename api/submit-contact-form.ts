import { ContactFormSchemaProps, contactFormSchema } from '@/helpers/contact-form-zod-schema'


export const handleSubmitForm = async (data: ContactFormSchemaProps, reset: () => void) => {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/rest/v1/contacts`,
         {
            method: "POST",
            headers: {
               apikey: process.env.NEXT_PUBLIC_API_KEY!,
               Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         }
      );

      if (!res.ok) {
         const err = await res.json();
         throw new Error(err.message ?? "Failed to send contact");
      } else {
         alert('Message sent successfully')
         reset()
      }
   } catch (error) {
      console.error("Failed to send contact:", error);
   }
}