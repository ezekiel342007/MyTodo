"use client";
import { useState } from "react";

import PajamasHamburger from "@/components/icons/pajamas-hamburger";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import LetsIconsDateTodayDuotoneLine from "@/components/icons/lets-icon-date-today-duotone-line";
import MingcuteTimeLine from "@/components/icons/mingcute-time-line";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";


export default function Page() {
  const [dateOpen, setDateOpen] = useState<boolean>(false);
  const [timeOpen, setTimeOpen] = useState<boolean>(false);
  const [important, setImportant] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);

  function submitAction() {

  }

  return (
    <div className="bg-gray-200 h-[100%]">
      <div>
        <div className="bg-blue-900 flex flex-col gap-6 pt-10 h-60 text-gray-100 rounded-br-[170px] p-4 max-w-full">
          <div>
            <PajamasHamburger color="#fff" size={40} />
          </div>
          <div className="mt-5">
            <input
              className="w-50 text-4xl border-none focus:ring-0 focus:outline-none"
              type="text"
              placeholder="New Task"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="p-4 pt-10 text-sm text-gray-600 bg flex flex-col gap-6">
        <textarea className="bg-white h-40 rounded-2xl p-2" placeholder="Add a description..."></textarea>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white p-4 appearance-none rounded-xl"
          id="categoryList"
        >
          <option className="flex justify-between flex-row" value="">
            Category
          </option>
          <option value="Work">Work</option>
          <option value="Fun">Fun</option>
          <option value="Home">Home</option>
        </select>

        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild className="flex justify-between flex-row">
            <div className="bg-white p-4 rounded-xl">
              {date ? date.toLocaleDateString() : "Date"}
              <LetsIconsDateTodayDuotoneLine size={20} color="#000" />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={
                (date) => { setDate(date); setDateOpen(false) }}
            >

            </Calendar>
          </PopoverContent>
        </Popover>

        <Popover open={timeOpen} onOpenChange={setTimeOpen}>
          <PopoverTrigger asChild className="flex justify-between flex-row">
            <div className="bg-white p-4 rounded-xl">
              {time ? time : "Time"}
              <MingcuteTimeLine size={20} color="#000" />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <Input
              type="time"
              id="time-picker"
              placeholder="Time"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              onChange={(e) => { setTime(e.target.value) }}
            />
          </PopoverContent>
        </Popover>

        <div className="bg-white flex flex-row justify-between p-4 rounded-xl" onClick={() => { setImportant(!important) }}>
          Important
          <input checked={important} type="checkbox" size={20} defaultChecked color="#000" />
        </div>

        <div className="flex flex-row justify-center">
          <button onClick={submitAction} className="p-4 rounded-full text-2xl bg-blue-900 text-white w-30">Done</button>
        </div>
      </div>
    </div >
  )
}
