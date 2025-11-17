import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Button } from "../ui/button";

interface NewTrackProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NewTrack({ setOpen }: NewTrackProps) {
  function submitNewTrack(e: FormEvent) {
    setOpen(false);
    e.preventDefault();
  }
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="w-[100%] h-full flex justify-center items-center bg-black/50 fixed top-0 right-0"
      >
        <form onSubmit={(e) => submitNewTrack(e)} onClick={(e) => e.stopPropagation()}>
          <div className="m-4 p-4 flex z-10 flex-col bg-white rounded-2xl gap-4">
            <div>
              <Label className="mb-2" htmlFor="trackName">Track Name</Label>
              <Input name="trackName" type="text" />
            </div>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div >
    </>
  )
}
