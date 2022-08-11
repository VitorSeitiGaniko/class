export class Cliente{
    nome;
    _senha;

    constructor(nome){
        this.nome = nome;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticarSenha(senha){
        return this._senha == senha ? true : false;
    }
}