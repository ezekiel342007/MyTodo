"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="flex bg-gray-200 w-full justify-center fixed h-full">
        <div className="bg-blue-900 h-[50%] p-10 w-full"></div>
        <div className="rounded-2xl top-50 absolute bg-white p-4">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div className="mt-2">
            Not registered? <Link href={"/sign_up"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}
