import Image from "next/image";
import Latus from "@/public/images/Lotus-Outline.webp"

export default function LotusIcon({ className }: { className?: string }) {
  return (
    <Image src={Latus} alt="Latus" className="w-16 h-16"/>
  );
}
