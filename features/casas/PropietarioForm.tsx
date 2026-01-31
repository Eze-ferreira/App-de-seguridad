"use client";
import { useState } from "react";

type Props = {
  onAdd: (nombre: string) => void;
};

export default function PropietarioForm({ onAdd }: Props) {
  const [nombre, setNombre] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim()) return;
    onAdd(nombre);
    setNombre("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre del propietario"
        className="border p-2 rounded"
      />
      <button className="bg-blue-600 text-white px-3 rounded">
        Agregar
      </button>
    </form>
  );
}
