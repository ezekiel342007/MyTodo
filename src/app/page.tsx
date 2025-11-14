import TodoSlot from "@/components/atoms/blog-slot";
import PajamasHamburger from "@/components/icons/pajamas-hamburger";
import { Todo } from "@/lib/dummy";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="bg-blue-900 flex flex-col gap-6 pt-10 h-60 text-gray-100 rounded-br-[170px] p-4 max-w-full">
        <div>
          <PajamasHamburger color="#fff" size={40} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Today: 17 October</h1>
          <p>1 of 6 items</p>
        </div>
      </div>
      <div className="mt-5 p-4">
        <Link href="/new_task">
          <TodoSlot addItem={true} important={false} title="" date="" category="" />
        </Link>

        {
          Todo.map(element => {
            return <TodoSlot key={element.title} important={element.important} addItem={false} title={element.title} date={element.date} category={element.category} />
          })
        }
      </div>
    </div>
  );
}
