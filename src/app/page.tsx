import TrackSlot from "@/components/molecules/track-slot";
import PajamasHamburger from "@/components/icons/pajamas-hamburger";
import { Tracks } from "@/lib/dummy";
import IconParkOutlineAdd from "@/components/icons/icon-park-outline-add";

export default function Home() {
  return (
    <div className="bg-gray-200 h-full flex flex-col gap-6">
      <div>
        <div className="bg-blue-900 flex flex-col gap-6 pt-10 h-60 text-gray-100 rounded-br-[170px] p-4 max-w-full">
          <div className="flex flex-row gap-6">
            <PajamasHamburger color="#fff" size={40} />
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-semibold">My Todo</h1>
          </div>
        </div>
      </div>
      <div className="mt-3 p-4">
        <h2 className="text-2xl font-semibold">Tracks</h2>

        <div className="bg-white flex mt-4 flex-row justify-between rounded-2xl px-4 p-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-gray-400">Add a new list...</h2>
          </div>

          <div className="flex flex-col justify-center">
            <IconParkOutlineAdd size={50} color="#99a1af" />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {
            Tracks.map((track) => {
              return <TrackSlot title={track.title} itemCount={track.itemCount} color={track.color} key={track.title} />
            }
            )
          }
        </div>

      </div>
    </div>
  )
}
