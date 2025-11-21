import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface NewTrackProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

async function submitNewTrack(trackName: string) {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_NEW_TRACK_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ trackName })
      }
    );

    const res = await response;
    if (!res.ok) {
      console.error("Error ------->>>>>>>>>> ", res.json());
    }
  } catch (error) {
    console.error("Error ------->>>>>>>>>> ", error);
  }
}

export default function NewTrack({ setOpen }: NewTrackProps) {
  const [trackName, setTrackName] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  useEffect(
    () => {
      if (hasSubmitted) {
        submitNewTrack(trackName);
        setOpen(false);
      }
    }
  )

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="w-[100%] h-full flex justify-center items-center bg-black/50 fixed top-0 right-0"
      >
        <form onClick={(e) => e.stopPropagation()}>
          <div className="m-4 p-4 flex z-10 flex-col bg-white rounded-2xl gap-4">
            <div>
              <Label className="mb-2" htmlFor="trackName">Track Name</Label>
              <Input value={trackName} onChange={(e) => setTrackName(e.target.value)} name="trackName" type="text" required />
            </div>
            <Button onClick={() => setHasSubmitted(true)}>Create</Button>
          </div>
        </form>
      </div >
    </>
  )
}
