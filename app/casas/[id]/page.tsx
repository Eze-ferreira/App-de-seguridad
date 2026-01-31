"use client";

import { useState } from "react";
import { Casa } from "@/types";
import PropietarioForm from "@/features/casas/PropietarioForm";
import VehiculoForm from "@/features/casas/VehiculoForm";

export default function CasaPage() {
  const [casa, setCasa] = useState<Casa>({
    id: crypto.randomUUID(),
    numero: "123",
    propietarios: [],
    vehiculos: [],
    visitas: [],
  });

  function addPropietario(nombre: string) {
    setCasa(prev => ({
      ...prev,
      propietarios: [
        ...prev.propietarios,
        { id: crypto.randomUUID(), nombre },
      ],
    }));
  }

  function addVehiculo(patente: string) {
    setCasa(prev => ({
      ...prev,
      vehiculos: [
        ...prev.vehiculos,
        { id: crypto.randomUUID(), patente },
      ],
    }));
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Casa {casa.numero}</h1>

      <PropietarioForm onAdd={addPropietario} />
      <VehiculoForm onAdd={addVehiculo} />

      {/* LISTADOS */}
      <div>
        <h2>Propietarios</h2>
        {casa.propietarios.map(p => (
          <p key={p.id}>• {p.nombre}</p>
        ))}
      </div>

      <div>
        <h2>Vehículos</h2>
        {casa.vehiculos.map(v => (
          <p key={v.id}>• {v.patente}</p>
        ))}
      </div>
    </div>
  );
}
