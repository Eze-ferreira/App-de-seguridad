export type Propietario = {
  id: string;
  nombre: string;
  apellido?: string;
  documento?: string;
  telefono?: string;
};

export type Vehiculo = {
  id: string;
  patente: string;
  marca?: string;
  modelo?: string;
  tipo?: string;
};

export type Casa = {
  id: string;
  numero: string;
  propietarios: Propietario[];
  vehiculos: Vehiculo[];
  visitas: [];
};
