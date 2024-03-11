import { z } from 'zod';

export const UserSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required'
    })
    .min(3, {
      message: 'Name must be at least 3 characters.'
    }),
  email: z.string().email({
    message: 'Invalid email format'
  }),
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.'
  }),
  address: z.string(),
  company: z.object({
    name: z.string({
      required_error: 'Company is required'
    }),
    bs: z.string({
      required_error: 'Industry is required'
    }),
    catchPhrase: z.string({
      required_error: 'Catch Phrase is required'
    })
  })
});

export type UserSchemaType = z.infer<typeof UserSchema>;
