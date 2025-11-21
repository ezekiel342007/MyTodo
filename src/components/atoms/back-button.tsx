import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import MaterialSymbolsArrowBackIosRounded from "@/components/icons/arrow-back-ios-rounded";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => { router.back() }} variant={"ghost"} className="hover:bg-none">
      <MaterialSymbolsArrowBackIosRounded size={60} />
    </Button>
  )
}
