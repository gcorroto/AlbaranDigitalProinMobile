export const LISTADO_PROP_CLIENTE =
  [
    "numAlbaran",
    "fechaEntrega",
    "radial",
    "m3",
    "progresoDia",
    "planta",
    "viaCarga",
    "cliente.nombre",
    "cliente.id",
    "cliente.cif",
    "obra","direccion",
    "cp",
    "municipio"
  ];

  export const LISTADO_PROP_TRANSPORTE =
  [
    "transporte.empresa",
    "transporte.cif",
    "transporte.camion.matricula",
    "transporte.remolque.matricula",
    "transporte.cargadorContractual"
  ];

  export const LISTADO_PROP_HORMIGON =
  [
    "hormigon.tipo",
    "hormigon.referencia",
    "hormigon.relacion",
    "hormigon.adiciones.tipo",
    "hormigon.adiciones.cantidad",
  ];

  export const LISTADO_PROP_METEOROLOGIA =
  [
    "meteorologia.temperatura",
    "meteorologia.humedad",
    "meteorologia.velocidad",
  ];

  export const LISTADO_PROP_HORARIO =
  [
    "horario.cargaPlanta",
    "horario.llegadaObra",
    "horario.inicioDescarga",
    "horario.finalDescarga",
    "horario.llegadaPlanta",
    "horario.limiteUso",
    "horario.hormigonBombeado",
    "horario.aguaCliente",
  ];

  export const LISTADO_PROP_RECEPCION =
  [
    "recepcion.laboratorio",
    "recepcion.elementoHormigon",
    "recepcion.horaToma",
    "recepcion.cono",
    "recepcion.numProbetas",
  ];

  export class AlbaranMetadataInput {
    entidad: string;
    propiedades: string[];
  }

