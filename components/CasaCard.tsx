import Link from "next/link";
import { Casa } from "@/types";

type Props = {
  casa: Casa;
};

export default function CasaCard({ casa }: Props) {
  return (
    <Link href={`/casas/${casa.id}`}>
      <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{casa.numero}</h2>
        <p className="text-gray-500">ID: {casa.id}</p>
      </div>
    </Link>
  );
}
