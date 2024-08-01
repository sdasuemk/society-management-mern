"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const registrationSchema = z.object({
    name: z.string().min(1, "Society Name is required"),
    plotNo: z.string().min(1, "Plot No is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pinCode: z
      .string()
      .min(1, "PIN Code is required")
      .length(6, "PIN Code must be 6 digits"),
    landMark: z.string().min(1, "Land Mark is required"),
    phone: z
      .string()
      .min(1, "Phone is required")
      .regex(/^\d{10}$/, "Phone must be 10 digits"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      plotNo: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
      landMark: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof registrationSchema>) => {
    console.log("onSubmit", data);
  };
  return (
    <main className="">
      <section className="">
        <p className="">Register Your Society</p>
      </section>
      <section className="">
        <section className="">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Register Society</SheetTitle>
                <SheetDescription>
                  Provide all the required details of your society. Click save
                  when you are done.
                </SheetDescription>
              </SheetHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  // className="w-full space-y-3"
                >
                  <div className="flex flex-col gap-y-1.5 pt-2">
                    <div className="flex flex-col gap-y-1.5">
                      <div className="">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Society Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Society Name"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription></FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <Label htmlFor="name" className="text-left">
                      Society Name
                    </Label>
                    <Input id="name" value="ABC Apartment" className="" /> */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <div className="">
                        <Label htmlFor="address" className="text-left">
                          - Address
                        </Label>
                      </div>
                    </div>
                    <div className="flex flex-row gap-y-1.5 gap-x-1">
                      <div className="flex flex-col gap-y-1.5 flex-[1]">
                        <div className="">
                          <FormField
                            control={form.control}
                            name="plotNo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Plot No</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter Plot Number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="plot-no" className="text-left">
                        Plot No
                      </Label>
                      <Input id="plot-no" value="23" className="" /> */}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-1.5 flex-[3]">
                        <div className="">
                          <FormField
                            control={form.control}
                            name="street"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Street Name</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter Street Name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="street" className="text-left">
                        Street
                      </Label>
                      <Input id="street" value="ABC road" className="" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-y-1.5 gap-x-1">
                      <div className="flex flex-col gap-y-1.5">
                        <div className="">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter City"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="city" className="text-left">
                            City
                          </Label>
                          <Input id="city" value="Howrah" className="" /> */}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-1.5">
                        <div className="">
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter State"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="state" className="text-left">
                            State
                          </Label>
                          <Input id="state" value="West Bengal" className="" /> */}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-1.5">
                        <div className="">
                          <FormField
                            control={form.control}
                            name="pinCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>PIN</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter PIN"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="pin-code" className="text-left">
                            PIN Code
                          </Label>
                          <Input id="pin-code" value="711315" className="" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <div className="">
                        <FormField
                          control={form.control}
                          name="landMark"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Land Mark</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Land Mark"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription></FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <Label htmlFor="land-mark" className="text-left">
                          Land Mark
                        </Label>
                        <Input
                          id="land-mark"
                          value="Beside XYZ club"
                          className=""
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-1.5 pt-1">
                    <div className="">
                      <Label htmlFor="contact-info" className="text-left">
                        - Contact Information
                      </Label>
                    </div>
                  </div>
                  <div className="flex flex-row gap-y-1.5 gap-x-1">
                    <div className="flex-[1] flex-col gap-y-1.5">
                      <div className="">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Phone"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription></FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <Label htmlFor="phone" className="text-left">
                          Phone
                        </Label>
                        <Input id="phone" value="9800322589" className="" /> */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <div className="">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Email"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription></FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <Label htmlFor="email" className="text-left">
                          Email
                        </Label>
                        <Input
                          id="email"
                          value="ab.society@mail.com"
                          className=""
                        /> */}
                      </div>
                    </div>
                  </div>
                  <SheetFooter className="pt-2">
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                    <Button type="submit">Save</Button>
                  </SheetFooter>
                </form>
              </Form>
            </SheetContent>
          </Sheet>
        </section>
      </section>
    </main>
  );
};

export default RegistrationForm;
