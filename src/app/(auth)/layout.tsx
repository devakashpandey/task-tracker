import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className=" min-h-screen  bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <Button variant="secondary">Sign Up</Button>
        </nav>

        <div className="flex items-center justify-center flex-col md:pt-14">
          {" "}
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
