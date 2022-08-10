export class Cliente{
    usuario;
    _senha;
    _ehValido;

    get senha(){
        return this._senha;
    }

    constructor(usuario){
        this.usuario = usuario;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        this._ehValido = this._senha == senha ? true : false;
    }
}