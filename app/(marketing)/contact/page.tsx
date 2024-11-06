"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header1 from "@/app/components/headers/header-contact-us/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function Contact1() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      country: "",
      companySize: "",
      referral: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <Header1 />

      <section className="relative py-32">
        <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
        <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
        <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]"></div>
        <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
          <div className="w-full pb-10 md:space-y-10 md:pb-0">
            <div className="space-y-4 md:max-w-[40rem]">
              <h1 className="text-4xl font-medium lg:text-5xl">
                Book free demo now
              </h1>
              <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
                In non libero bibendum odio pellentesque ullamcorper. Aenean
                condimentum, dolor commodo pulvinar bibendum.
              </div>
            </div>
            <div className="hidden md:block">
              <div className="space-y-16 pb-20 lg:pb-0">
                <div className="space-y-6">
                  <div className="mt-16 flex overflow-hidden">
                    <span className="relative flex size-11 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        SB
                      </span>
                    </span>
                    <span className="relative -ml-4 flex size-11 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        RA
                      </span>
                    </span>
                    <span className="relative -ml-4 flex size-11 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        JS
                      </span>
                    </span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold">
                      What you can expect:
                    </p>
                    <div className="flex items-center space-x-2.5">
                      <Check className="size-5 shrink-0 text-muted-foreground" />
                      <p className="text-sm">
                        Detailed product presentation tailored to you
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Check className="size-5 shrink-0 text-muted-foreground" />
                      <p className="text-sm">
                        Consulting on your messaging strategy
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Check className="size-5 shrink-0 text-muted-foreground" />
                      <p className="text-sm">
                        Answers to all the questions you have
                      </p>
                    </div>

                    <div>
                      <p>
                        Searchplex is committed to protecting and respecting
                        your privacy. We will only use your personal information
                        to administer your account and to provide the products
                        and services you requested from us.
                        <br /> <br />
                        From time to time, we would like to contact you about
                        our products and services, as well as other content that
                        may be of interest to you. If you consent to us
                        contacting you for this purpose, please tick the box
                        below so we know you would like us to contact you.
                        <br /> <br />I agree to receive other communications
                        from Searchplex. You can unsubscribe from these
                        communications at any time. For more information on how
                        to unsubscribe, our privacy practices, and how we are
                        committed to protecting and respecting your privacy,
                        please review our Privacy Policy. By clicking submit
                        below, you consent to allow Searchplex to store and
                        process your personal information in accordance with our
                        Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-12">
                  <img
                    src="/placeholder.svg?height=24&width=100"
                    alt="Company logo"
                    className="h-6"
                  />
                  <img
                    src="/placeholder.svg?height=24&width=100"
                    alt="Company logo"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center lg:mt-2.5">
            <Card className="relative flex w-full min-w-80 max-w-[30rem] flex-col items-center overflow-visible md:min-w-96">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-8"
                >
                  <div className="space-y-6 rounded-xl bg-background p-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Joe Average" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone number</FormLabel>
                          <FormControl>
                            <Input placeholder="12 3456 7890" {...field} />
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
                          <FormLabel>Email (business)</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="name@company.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="de">Germany</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="jp">Japan</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company size</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">
                                1-10 employees
                              </SelectItem>
                              <SelectItem value="11-50">
                                11-50 employees
                              </SelectItem>
                              <SelectItem value="51-200">
                                51-200 employees
                              </SelectItem>
                              <SelectItem value="201-500">
                                201-500 employees
                              </SelectItem>
                              <SelectItem value="501-1000">
                                501-1000 employees
                              </SelectItem>
                              <SelectItem value="1000+">
                                1000+ employees
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="referral"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            How did you hear about us?{" "}
                            <span className="text-muted-foreground">
                              (Optional)
                            </span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="search">
                                Search Engine
                              </SelectItem>
                              <SelectItem value="social">
                                Social Media
                              </SelectItem>
                              <SelectItem value="friend">
                                Friend/Colleague
                              </SelectItem>
                              <SelectItem value="conference">
                                Conference/Event
                              </SelectItem>
                              <SelectItem value="advertisement">
                                Advertisement
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                      <Button type="submit">Book demo</Button>
                      <div className="text-xs text-muted-foreground">
                        For more information about how we handle your personal
                        information, please visit our{" "}
                        <a href="#" className="underline">
                          privacy policy
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}
