"use client";

import { useEffect, useState } from "react";
import { categoryMap, TodoSlotProps } from "@/lib/types";
import IconParkOutlineAdd from "../icons/icon-park-outline-add"
import { useRouter } from "next/navigation";

async function tickTodo(title: string, date: string, category: string, important: boolean, done: boolean) {
  done = true;
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_TASKS_ENDPOINT}`,
      {
        method: "PUSH",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ title, date, category, important, done })
      }
    );

    const res = await response;

    if (!res.ok) {
      console.error("Error --------->>>>>>>>>>> ", res.json());
    }

  } catch (error) {
    console.error("Error --------->>>>>>>>>>> ", error);
  }
}

export default function TodoSlot({ title, date, done, category, addItem, important }: TodoSlotProps) {
  const categoryColor: string = categoryMap[category];
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(done);
  const router = useRouter();

  useEffect(
    () => {
      if (hasSubmitted) {
        tickTodo(title, date, category, important, done).then(() => router.refresh())
      }
    }, [title, date, category, important, done, hasSubmitted, router]
  )

  if (addItem)
    return (
      <div className="p-2 flex flex-row justify-between w-full" >
        <div className="text-sm text-gray-400">
          <h2 className="font-semibold text-lg">Add a new item...</h2>
          <p>Date and time</p>
          <p>Category</p>
        </div>
        <div className="flex flex-col justify-center"><IconParkOutlineAdd color="#99a1af" size={50} /></div>
      </div >
    )

  return (
    <div onClick={() => { setIsDone(true); setHasSubmitted(true) }} className="p-2 flex flex-row justify-between w-full">
      <div className="text-sm text-gray-600">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <p>{date}</p>
        <div className="flex flex-row gap-2">
          <p style={{ "color": categoryColor }}>{category}</p>
          {
            (important) ? <p className="text-red-400">Important</p> : ""
          }
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <input type="checkbox" checked={isDone} className="h-6 border-blue-600 border-8 w-6 text-8xl" />
      </div>
    </div >
  )
}
