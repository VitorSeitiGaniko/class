export class Extrato{

    converterImprimir(contaCorrente){
        var infos = {
            Cliente: contaCorrente.cliente.nome,
            Agencia: contaCorrente.agencia,
            Conta: contaCorrente.conta,
            Saldo: contaCorrente.saldo
        }
        var objeto = JSON.stringify(infos);
        console.log(objeto);
    }
}