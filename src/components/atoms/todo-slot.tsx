import { categoryMap } from "@/lib/types";
import IconParkOutlineAdd from "../icons/icon-park-outline-add"

interface TodoSlotProps {
  title: string;
  date: string;
  category: string;
  addItem: boolean;
  important: boolean;
}

export default function TodoSlot({ title, date, category, addItem, important }: TodoSlotProps) {
  const categoryColor: string = categoryMap[category];

  if (addItem)
    return (
      <div className="p-2 flex flex-row justify-between w-full">
        <div className="text-sm text-gray-400">
          <h2 className="font-semibold text-lg">Add a new item...</h2>
          <p>Date and time</p>
          <p>Category</p>
        </div>
        <div className="flex flex-col justify-center"><IconParkOutlineAdd color="#99a1af" size={50} /></div>
      </div>
    )

  return (
    <div className="p-2 flex flex-row justify-between w-full">
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
        <input type="checkbox" className="h-6 border-blue-600 border-8 w-6 text-8xl" />
      </div>
    </div >
  )
}
