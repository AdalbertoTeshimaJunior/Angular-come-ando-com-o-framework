import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencia: any[];

  constructor() {
    this.listaDeTransferencia = [];
  }

  get transferencias() {
    return this.listaDeTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);


    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date;
  }

}
