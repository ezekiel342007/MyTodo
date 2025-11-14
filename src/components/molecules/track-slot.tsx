import ColorBox from "../atoms/color-box";

interface TrackSlotProps {
  title: string;
  itemCount: number;
  color: string
}

export default function TrackSlot({ title, itemCount, color }: TrackSlotProps) {
  return (
    <div className="bg-white flex flex-row justify-between rounded-2xl px-4 p-2">
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm font-light">{itemCount} Items</p>
      </div>

      <div className="flex flex-col justify-center">
        <ColorBox fill={color} />
      </div>
    </div>
  )
}
