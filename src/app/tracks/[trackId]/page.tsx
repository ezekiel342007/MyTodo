"use client";

import { use } from "react";
import Link from "next/link";
import { Todo } from "@/lib/dummy";
import TodoSlot from "@/components/atoms/todo-slot";
import { useAuth } from "@/components/auth-context";
import IxUserProfile from "@/components/icons/ix-user-profile";
import PajamasHamburger from "@/components/icons/pajamas-hamburger";

export default function Page({ params }: { params: { trackId: string } }) {
  const pageParams = use(params);
  const { isAuthenticated } = useAuth();


  return (
    <div className="bg-gray-200 h-[100%]">
      <div className="bg-blue-900 flex flex-col gap-6 pt-10 h-60 text-gray-100 rounded-br-[170px] p-4 max-w-full">
        <div className="w-full flex flex-row justify-between">
          <Link href={"/"}>
            <PajamasHamburger color="#fff" size={40} />
          </Link>
          <div className="mr-5">
            {
              (isAuthenticated) ?
                <IxUserProfile color="#fff" size={40} />
                :
                <Link href={"/login"}>
                  <IxUserProfile color="#fff" size={40} />
                </Link>
            }
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Today: 17 October</h1>
          <p>1 of 6 items</p>
        </div>
      </div>
      <div className="mt-5 p-4">
        <Link href={`${pageParams.trackId}/new_task`}>
          <TodoSlot addItem={true} done={false} important={false} title="" date="" category="" />
        </Link>
        {
          Todo.map(element => {
            return <TodoSlot key={element.title} done={element.done} important={element.important} addItem={false} title={element.title} date={element.date} category={element.category} />
          })
        }
      </div>
    </div >
  );
}
