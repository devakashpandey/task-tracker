"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[485px] border-none shadow-none">
      <CardHeader className="flex justify-center flex-col items-center text-center p-4">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription className="px-10">
          By signing up you agree to our {""}
          <Link href="/privacy-policy">
            <span className="text-blue-600">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy">
            <span className="text-blue-600">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>

      <div className="px-10">
        <p className="border border-dashed"></p>
      </div>

      <CardContent className="p-7 pt-3 pb-3 ">
        <form className="space-y-4">
          <Input
            required
            type="text"
            placeholder="Enter Your Name"
            autoComplete="email"
            disabled={false}
            className="p-5"
          />
          <Input
            required
            type="email"
            placeholder="Enter Email"
            autoComplete="email"
            disabled={false}
            className="p-5"
          />
          <Input
            required
            type="password"
            placeholder="Enter Password"
            autoComplete="password"
            min={8}
            max={100}
            disabled={false}
            className="p-5"
          />
          <Button size={"lg"} className="w-full">
            Log in
          </Button>
        </form>
      </CardContent>

      <div className="px-10 ">
        <p className="border border-dashed"></p>
      </div>

      <div className="flex flex-col gap-3 px-6 ">
        <Button variant="secondary" className="p-5">
          <FcGoogle />
          Log in with Google{" "}
        </Button>
        <Button variant="secondary" className="p-5">
          <FaGithub />
          Log in with Github
        </Button>
      </div>
    </Card>
  );
};

export default SignUpCard;
