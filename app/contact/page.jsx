'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import * as zod from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+84) 35 764 0009',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'nguyenmaichitrung1912@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Vinhome Grand Park, Thu Duc City',
  },
];

import { motion } from 'framer-motion';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction, ToastProvider } from '@/components/ui/toast';

const formSchema = zod.object({
  firstname: zod.string().refine((data) => data.trim() !== '', {
    message: 'First Name field is required',
  }),
  lastname: zod.string().refine((data) => data.trim() !== '', {
    message: 'Last Name field is required',
  }),
  email: zod.string().email({ message: 'Invalid Email format' }),
  phone: zod
    .string()
    .regex(/^0\d{9}$/, { message: 'Invalid Phone number format' }),
  description: zod.string().min(10).max(255),
});

const Contact = () => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema), // Directly use the Zod schema as the resolver
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      description: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values, e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: values.email,
          to: 'nguyenmaichitrung1912@gmail.com',
          subject: 'Send mail',
          text: values.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Success toast
      toast({
        variant: 'success',
        title: 'Message Sent Successfully!',
        description: 'Your message has been sent successfully.',
      });
      form.reset();
    } catch (error) {
      console.error(error);
      // Error toast
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  };

  return (
    <ToastProvider>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className='py-6'
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-[30px]'>
            {/* form */}
            <div className='xl:w-[54%] order-2 xl:order-none'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
                >
                  <h3 className='text-4xl text-accent'>Let's work together</h3>
                  {/* <p className='text-white/60'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  consectetur sint ad dolore labore ipsa deserunt suscipit.
                </p> */}
                  {/* input */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='firstname'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Firstname' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lastname'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Lastname' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Email address' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type='phone'
                              placeholder='Phone number'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* select */}
                  {/* <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select a services' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a services</SelectLabel>
                      <SelectItem value='est'>Web Development</SelectItem>
                      <SelectItem value='cst'>Web Development</SelectItem>
                      <SelectItem value='mst'>Web Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
                  {/* textarea */}

                  <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className='h-[200px]'
                            placeholder='Type your message here.'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* button */}
                  <Button size='md' className='max-w-40'>
                    Send message
                  </Button>
                </form>
              </Form>
            </div>
            {/* info */}
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <ul className='flex flex-col gap-10'>
                {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3
                          className='text-xl'
                          style={{ wordBreak: 'break-word' }}
                        >
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </ToastProvider>
  );
};

export default Contact;
