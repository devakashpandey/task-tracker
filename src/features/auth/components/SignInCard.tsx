"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "@/schema/AuthSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const SignInCard = () => {
  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof AuthSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full h-full md:w-[485px] border-none shadow-none">
      <CardHeader className="flex justify-center items-center text-center p-4">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>

      <div className="px-10">
        <p className="border border-dashed"></p>
      </div>

      <CardContent className="p-7 pt-3 pb-3 ">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      className="p-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      className="p-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size={"lg"} className="w-full">
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-10 ">
        <p className="border border-dashed"></p>
      </div>

      <div className="flex flex-col gap-3 px-6 ">
        <Button variant="secondary" className="p-5">
          <FcGoogle />
          Log in with Google
        </Button>
        <Button variant="secondary" className="p-5">
          <FaGithub />
          Log in with Github
        </Button>
      </div>
    </Card>
  );
};

export default SignInCard;
