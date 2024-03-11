import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { getInitials } from '@/lib/utils';
import type { IUser } from '@/shared/interfaces/IUser';
import type { UserSchemaType } from '@/shared/zod/schema';
import { UserSchema } from '@/shared/zod/schema';

import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';

interface Props {
  singleDataMemo?: IUser;
  id: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const User = ({ singleDataMemo, id }: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const formatAddress = (address: Address) => {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  };

  const sessionUsers: any[] = JSON.parse(sessionStorage.getItem('users') || '[]');

  let userDataFromSession: any = null;
  if (singleDataMemo && singleDataMemo.id) {
    userDataFromSession = sessionUsers.find((user) => user[singleDataMemo.id]);
  }

  const formattedAddress: string = singleDataMemo?.address ? formatAddress(singleDataMemo.address) : '';

  const form = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      address: userDataFromSession?.[singleDataMemo?.id!]?.address || formattedAddress,
      company: userDataFromSession?.[singleDataMemo?.id!]?.company || singleDataMemo?.company,
      email: userDataFromSession?.[singleDataMemo?.id!]?.email || singleDataMemo?.email,
      name: userDataFromSession?.[singleDataMemo?.id!]?.name || singleDataMemo?.name,
      username: userDataFromSession?.[singleDataMemo?.id!]?.username || singleDataMemo?.username
    }
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { ...userData } = data;

    // Retrieve existing data from sessionStorage
    const existingData = sessionStorage.getItem('users');

    let usersData = [];

    // If there's existing data, parse it into an array
    if (existingData) {
      usersData = JSON.parse(existingData);
    }

    // Find index of the user data in the array
    const userIndex = usersData.findIndex((user: any) => user[id]);

    // Update or add new user data
    if (userIndex !== -1) {
      // If user already exists, update their data
      usersData[userIndex][id] = userData;
    } else {
      // If user doesn't exist, add new user data
      usersData.push({ [id]: userData });
    }

    // Save updated data to sessionStorage
    sessionStorage.setItem('users', JSON.stringify(usersData));

    toast({
      className: 'bg-gradient-to-r from-blue-500 to-pink-400 text-white',
      description: 'User Updated!'
    });
    setTimeout(() => router.push('/'), 1500);
  });

  return (
    <div>
      <p className="text-xl font-semibold">User Details for @{singleDataMemo?.username}</p>
      <div className="mt-8 flex">
        <p className="flex size-32 items-center justify-center bg-[#5172e9] text-4xl text-white">
          {getInitials(singleDataMemo?.name!)}
        </p>
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full space-y-4 px-5">
            <div className="grid w-full grid-cols-2 items-center gap-4 px-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Name</FormLabel>
                    <FormControl>
                      <Input id="name" placeholder="Enter Name" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Company</FormLabel>
                    <FormControl>
                      <Input id="company.name" placeholder="Enter Company" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input id="email" placeholder="Enter Email" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company.bs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Industry</FormLabel>
                    <FormControl>
                      <Input id="company.bs" placeholder="Enter Industry" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl>
                      <Input id="username" placeholder="Enter Username" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company.catchPhrase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Catch Phrase</FormLabel>
                    <FormControl>
                      <Input
                        id="company.catchPhrase"
                        placeholder="Enter Catch Phrase"
                        className="bg-[#ececec]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Address</FormLabel>
                    <FormControl>
                      <Input id="address" placeholder="Enter Address" className="bg-[#ececec]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-7 w-full rounded-full bg-[#7386c6] hover:bg-[#7386c6]">Update</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default User;
