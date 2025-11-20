"use client";

import Link from "next/link";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-context";
import BackButton from "@/components/atoms/back-button";

async function submitSignUp(email: string, password: string): Promise<User | undefined> {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_SIGN_IN_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      }
    )

    const res = await response;
    if (!res.ok) {
      console.error("Error ------>>>>>>> ", res.json());
    }
    return res.json()
  } catch (error) {
    console.error("Error -------->>>>>>>", error);
  }
}

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasSubmit, setHasSubmit] = useState<boolean>(false);

  const { setUser, setAuthenticated } = useAuth();

  useEffect(
    () => {
      if (hasSubmit) {
        submitSignUp(email, password)
          .then((user: User | undefined) => { setUser(user); setAuthenticated(true) })
      }
    }, [hasSubmit, setAuthenticated, setUser, email, password])

  return (
    <>
      <div className="flex bg-gray-200 w-full justify-center fixed h-full">
        <div className="bg-blue-900 flex justify-end h-[50%] p-10 w-full">
          <BackButton />
        </div>
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
            <Button onClick={() => setHasSubmit(true)}>Submit</Button>
          </form>
          <div className="mt-2">
            Not registered? <Link href={"/sign_up"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}
