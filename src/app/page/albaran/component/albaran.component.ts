import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Application } from "@nativescript/core";
import { Albaran, AlbaranMeta } from '../../../core/dto/albaran.model';

@Component({
  selector: 'Albaran',
  templateUrl: './albaran.component.html',
})
export class AlbaranComponent implements OnInit {

  // real model
  private _albaran: Albaran;
  private _cliente: any;
  private _albaranMetadataSingle;
  private _albaranMetadataGroups;

  private _groupingEnabled: boolean;

  constructor(
    private readonly route: ActivatedRoute
  )
    {
    this._groupingEnabled = true;
    }


  ngOnInit() {

    const resolvedData: AlbaranMeta = this.route.snapshot.data['albaran'];
    this._albaran = resolvedData.data;
    this._cliente = this.buildAlbaranForm();

    // .map(r => {
    //   delete r.groupName;
    //   return r;
    // });

    this._albaranMetadataSingle = this.buildTemplateForm(resolvedData.metadata);
    this._albaranMetadataGroups = this.buildTemplateForm(resolvedData.metadata);
  }


  // REAL

  get cliente(): any {
    return this._cliente;
  }
  get clienteMetadata() {
    return this._groupingEnabled ? this._albaranMetadataSingle : this._albaranMetadataGroups;
}


  get btnText() {
      return this._groupingEnabled ? "Disable Grouping" : "Enable Grouping";
  }

  public onGroupUpdate(args) {
      if (Application.ios) {
          let nativeGroup: any = args.group;
          nativeGroup.collapsible = this._groupingEnabled;
      } else {
          let nativeGroup: any = args.group;
          nativeGroup.setExpandable(this._groupingEnabled);
      }
  }

  public onTap(args) {
      this._groupingEnabled = !this._groupingEnabled;
  }

  private buildTemplateForm(metadata){
    return {
      "isReadOnly": false,
      "commitMode": "Immediate",
      "validationMode": "Immediate",
      "propertyAnnotations": metadata
    };
  }

  private buildItemCliente() {
    return this._albaran ? {
      numAlbaran: this._albaran.numAlbaran,
      fechaEntrega: this._albaran.fechaEntrega,
      radial: this._albaran.radial,
      m3: this._albaran.m3,
      progresoDia: this._albaran.progresoDia,
      planta: this._albaran.planta,
      viaCarga: this._albaran.viaCarga,
      'cliente.nombre': this._albaran.cliente.nombre,
      'cliente.id': this._albaran.cliente.id,
      'cliente.cif': this._albaran.cliente.cif,
      obra: this._albaran.obra,
      direccion: this._albaran.direccion,
      cp: this._albaran.cp,
      municipio: this._albaran.municipio
    } : undefined;
  }

  private buildAlbaranForm() {
    return this._albaran ? {
      numAlbaran: this._albaran.numAlbaran,
      fechaEntrega: this._albaran.fechaEntrega,
      radial: this._albaran.radial,
      m3: this._albaran.m3,
      progresoDia: this._albaran.progresoDia,
      planta: this._albaran.planta,
      viaCarga: this._albaran.viaCarga,
      'cliente.nombre': this._albaran.cliente.nombre,
      'cliente.id': this._albaran.cliente.id,
      'cliente.cif': this._albaran.cliente.cif,
      obra: this._albaran.obra,
      direccion: this._albaran.direccion,
      cp: this._albaran.cp,
      municipio: this._albaran.municipio,
      'transporte.empresa': this._albaran.transporte.empresa,
      'transporte.cif': this._albaran.transporte.cif,
      'transporte.camion': this._albaran.transporte.camion.matricula,
      'transporte.remolque': this._albaran.transporte.remolque.matricula,
      'transporte.cargadorContractual': this._albaran.transporte.cargadorContractual,
      'hormigon.tipo': this._albaran.hormigon.tipo,
      'hormigon.referencia': this._albaran.hormigon.referencia,
      'hormigon.relacion': this._albaran.hormigon.relacion,
      // 'hormigon.contenido.cementos': this._albaran.hormigon.contenido.cementos,
      // 'hormigon.contenido.aditivos': this._albaran.hormigon.contenido.aditivos,
      // 'hormigon.contenido.adiciones': this._albaran.hormigon.contenido.adiciones,
      // 'hormigon.adiciones.tipo': '',
      // 'hormigon.adiciones.cantidad': '',
      'meteorologia.temperatura': 100,
      'meteorologia.humedad': 40,
      'meteorologia.velocidad': 60,
      'horario.cargaPlanta': '11:30',
      'horario.llegadaObra': '',
      'horario.inicioDescarga': '',
      'horario.finalDescarga': '',
      'horario.llegadaPlanta': '',
      'horario.limiteUso': '13:00',
      'horario.hormigonBombeado': false,
      'horario.aguaCliente': '',
      'recepcion.laboratorio': '',
      'recepcion.elementoHormigon': '',
      'recepcion.horaToma': '',
      'recepcion.cono': '',
      'recepcion.numProbetas': '',
      // 'firma': this._albaran.firma,

    } : undefined;
  }

}

