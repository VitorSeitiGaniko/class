import {Cliente} from "./Cliente.js"

export class ContaCorrente{
   
    _saldo = 0;
    _cliente;
    agencia

    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(id){
        if(id instanceof Cliente){
            this._cliente = id;
        }
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor){
        this._saldo >= valor ? this._saldo -= valor : false
    }

    depositar(valor){
        valor > 0 ? this._saldo += valor : false
    }
}