export class Main{        
    cliente;
    agencia
    _saldo = 0;
    _senha;
    _ehValido;

    get saldo(){
        return this._saldo;
    }

    get _senha(){
        return this._senha;
    }

    get _ehValido(){
        return this._ehValido;
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

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        this._ehValido = this._senha == senha ? true : false;
    }

    imprimir(){
        var objeto = JSON.stringify(this)
        console.log(objeto);
    }

}