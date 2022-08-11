import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {Extrato} from "./Extrato.js"

const clienteVitor = new Cliente("Vitor Ganiko");

const contaCorrenteVitor = new ContaCorrente(clienteVitor, "1029-0", "7998");

clienteVitor.cadastrarSenha("teste123");

clienteVitor.autenticarSenha("teste123") ? contaCorrenteVitor.depositar(1000) : false;

clienteVitor.autenticarSenha("teste123") ? contaCorrenteVitor.sacar(100) : false;

const extratoVitor = new Extrato();
extratoVitor.converterImprimir(contaCorrenteVitor);