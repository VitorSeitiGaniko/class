export class ContaBancaria{        
    cliente;
    agencia;
    conta;
    _saldo = 0;
    _senha;

    get saldo(){
        return this._saldo;
    }

    get _senha(){
        return this._senha;
    }

    get _ehValido(){
        return this._ehValido;
    }

    constructor(cliente, agencia, conta){
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
    }

    sacar(valor){
        this._saldo >= valor ? this._saldo -= valor : false
    }

    depositar(valor){
        valor > 0 ? this._saldo += valor : false
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticarSenha(senha){
        return this._senha == senha ? true : false;
    }

    converterImprimir(){
        var infos = {
            Cliente: this.cliente,
            Agencia: this.agencia,
            Conta: this.conta,
            Saldo: this.saldo
        }
        var objeto = JSON.stringify(infos)
        console.log(objeto);
    }
}