"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters." }),
  phone: z
    .string()
    .regex(/^[6789]\d{9}$/, { message: "Invalid phone number format." }),
  name: z.string(),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      phone: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("onSubmit", data);
  }

  return (
    <main className="flex justify-end items-center min-h-screen bg-[url('/undraw_best_place_re_lne9.svg')] bg-cover bg-no-repeat">
      <section className="flex flex-col gap-y-1 w-1/3 p-6 border border-gray-300 bg-white rounded-lg mr-4">
        <section className="flex flex-col items-center mt-4 mb-3 text-slate-500">
          <h1 className="text-xl font-semibold">SIGN UP</h1>
        </section>
        <section className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Username"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter Full Name" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <section className="flex justify-center mt-4">
                <Button type="submit">Submit</Button>
              </section>
            </form>
          </Form>
        </section>
        <section className="flex flex-row justify-center items-center mt-4 gap-0.5">
          <p>Have an account?</p>
          <Link href="/signin">
            <span className="text-blue-700">Sign-In</span>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default SignUp;
