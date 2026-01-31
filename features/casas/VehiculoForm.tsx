"use client";
import { useState } from "react";

type Props = {
  onAdd: (patente: string) => void;
};

export default function VehiculoForm({ onAdd }: Props) {
  const [patente, setPatente] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!patente.trim()) return;
    onAdd(patente);
    setPatente("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={patente}
        onChange={e => setPatente(e.target.value)}
        placeholder="Patente"
        className="border p-2 rounded"
      />
      <button className="bg-green-600 text-white px-3 rounded">
        Agregar
      </button>
    </form>
  );
}
