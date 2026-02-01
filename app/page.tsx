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
  <main className="min-h-screen bg-zinc-100 p-6">
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-800">
          Gestión de Casas
        </h1>
        <p className="text-zinc-500">
          Panel de administración del barrio
        </p>
      </header>

      {/* Formulario */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-zinc-700 mb-4">
          Agregar nueva casa
        </h2>
        <CasaForm onAddCasa={agregarCasa} />
      </section>

      {/* Listado */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-700 mb-4">
          Casas registradas
        </h2>

        {casas.length === 0 ? (
          <p className="text-zinc-400">
            No hay casas cargadas todavía
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casas.map((casa) => (
              <CasaCard key={casa.id} casa={casa} />
            ))}
          </div>
        )}
      </section>
    </div>
  </main>
);

}
