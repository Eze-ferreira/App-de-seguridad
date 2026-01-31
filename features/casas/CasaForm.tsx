"use client";

import { useState } from "react";
import { Casa } from "@/types";

type Props = {
  onAddCasa: (casa: Casa) => void;
};

export default function CasaForm({ onAddCasa }: Props) {
  const [numero, setNumero] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!numero.trim()) return;

    const nuevaCasa: Casa = {
      id: crypto.randomUUID(),
      numero,
      propietarios: [],
      vehiculos: [],
      visitas: [],
    };

    onAddCasa(nuevaCasa);
    setNumero("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-2">Agregar Casa</h2>

      <input
        type="text"
        placeholder="Número de casa"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
}
