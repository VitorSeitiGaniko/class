import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {Extrato} from "./Extrato.js"

const clienteVitor = new Cliente("Vitor");

const contaCorrenteVitor = new ContaCorrente(clienteVitor, "10290");

clienteVitor.cadastrarSenha("teste123")
clienteVitor.autenticar("teste123")

clienteVitor._ehValido ? contaCorrenteVitor.depositar(1000) : false;

clienteVitor._ehValido ? contaCorrenteVitor.sacar(20) : false;

const extatoVitor = new Extrato();
extatoVitor.imprimir(contaCorrenteVitor)