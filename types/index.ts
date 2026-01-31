export type Propietario = {
  id: string;
  nombre: string;
};

export type Vehiculo = {
  id: string;
  patente: string;
};

export type Casa = {
  id: string;
  numero: string;
  propietarios: Propietario[];
  vehiculos: Vehiculo[];
  visitas: [];
};
