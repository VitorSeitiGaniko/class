import {ContaBancaria} from "./Main.js"

const clienteVitor = new ContaBancaria("Vitor Ganiko", "1029-0", "7998");

clienteVitor.cadastrarSenha("teste123")

clienteVitor.autenticarSenha("teste123") ? clienteVitor.depositar(1000) : false;
clienteVitor.autenticarSenha("teste123") ? clienteVitor.sacar(20) : false;

clienteVitor.converterImprimir()