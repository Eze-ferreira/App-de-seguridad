"use client";

import { useState } from "react";
import { Casa } from "@/types";
import CasaCard from "@/components/CasaCard";
import CasaForm from "@/features/casas/CasaForm";

export default function Home() {
  const [casas, setCasas] = useState<Casa[]>([]);

  function agregarCasa(casa: Casa) {
    setCasas((prev) => [...prev, casa]);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <CasaForm onAddCasa={agregarCasa} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {casas.map((casa) => (
          <CasaCard key={casa.id} casa={casa} />
        ))}
      </div>
    </main>
  );
}
