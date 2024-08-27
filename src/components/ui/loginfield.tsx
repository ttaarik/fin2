"use client"
import React, { useState } from 'react';
import axios from "axios";
// import Link from "next/link"
import { Spinner } from "@nextui-org/spinner";
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { LoginField } from './registerfield';

// const LoginField: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);


//   const handleLogin = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5024/login", { email, password });
//       const token = response.data;
//       localStorage.setItem("token", token);

//       // document.getElementById("btn").innerHTML = '<h1>HI</h1>';

//       window.location.replace("/dashboard");
//     } catch (error) {
//       setIsLoading(false);
//     }

//   };
//   return (
//     <Card className="mx-auto mt-[7em] max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-xl">Login</CardTitle>
//         <CardDescription>
//           Enter your information to log in
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           {/* <div className="grid grid-cols-2 gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="first-name">First name</Label>
//               <Input id="first-name" placeholder="Max" required />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="last-name">Last name</Label>
//               <Input id="last-name" placeholder="Robinson" required />
//             </div>
//           </div> */}
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>


//           <div>
//             {isLoading ? (
//               <Button className="w-full h-full">
//                 <Spinner size='sm' label="Loading..." labelColor="success" color="success" />
//               </Button>

//             ) : (
//               <Button type="submit" id='btn' onClick={handleLogin} className="w-full">
//                 Log in
//               </Button>
//             )}
//           </div>

//           <Button variant="outline" className="w-full">
//             Log in with Google
//           </Button>
//         </div>
//         <div className="mt-4 text-center text-sm">
//           Don´t have an account?{" "}
//           <Link href="#" className="underline">
//             Sign up
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export { LoginField };



import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import pathimg from "@/app/logo-white.png";

export function LoginField() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5024/login", { email, password });
      const token = response.data;
      localStorage.setItem("token", token);
      window.location.replace("/https://fin2-git-master-ttaariks-projects.vercel.app/dashboard");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password"
                type="password"
                value={password}
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)} />

            </div>

            <div>
              {isLoading ? (
                <Button className="w-full h-full">
                  <Spinner size="sm" label="Loading..." labelColor="success" color="success" />
                </Button>
              ) : (
                <Button type="submit" id="btn" onClick={handleLogin} className="w-full">
                  Log in
                </Button>
              )}
            </div>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={pathimg}
          alt="Image"
          className="h-full w-full object-cover object-center"
          style={{ maxHeight: "100vh" }} // ensures the image doesn't overflow
        />
      </div>
    </div>
  );
}