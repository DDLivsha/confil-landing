import { error } from 'console'
import { z } from 'zod'

export const contactFormSchema = z.object({
   name: z.string().trim().min(2, { error: 'You need to fill this field' }).max(80, { error: 'Maximum 80 characters' }).regex(
         /^(?!.* {2})[a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+(?: [a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+)*$/,
         { error: 'Only letters' }
      ),
   email: z.email({ error: 'Invalid email' }).min(2, { error: 'You need to fill this field' }).max(80, { error: 'Maximum 80 characters' }),
   message: z.string().trim().min(10, { error: 'Minimum 10 characters' }).max(400, { error: 'Maximum 400 characters' }),
})

export type ContactFormSchemaProps = z.infer<typeof contactFormSchema>