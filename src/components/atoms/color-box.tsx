
interface ColorBoxProps {
  fill: string;
}

export default function ColorBox({ fill }: ColorBoxProps) {
  return (
    <div className="w-8 h-8 rounded" style={{ backgroundColor: fill }}></div>
  )
}
