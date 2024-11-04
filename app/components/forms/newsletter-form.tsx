"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "../../../hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
});

export function NewsletterForm() {
  // const { mutate } = api.newsletter.subscribe.useMutation({
  //   onSuccess: () => {
  //     form.reset();
  //     toast({
  //       title: "Successfully subscribed!",
  //       description:
  //         "You will receive a monthly email with the latest Tax updates.",
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       variant: "destructive",
  //       title: "Subscription failed. Please try again.",
  //       description: error.message, // Display the actual error message
  //       action: <ToastAction altText="Retry">Retry</ToastAction>,
  //     });
  //   },
  // });
  // const utils = api.useContext();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    try {
      // await mutate(data); // Let mutate handle the error
      form.reset();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 text-center sm:max-w-sm sm:text-left"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our newsletter</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-full px-4"
                  placeholder="janedoe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm" className="px-4" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}
