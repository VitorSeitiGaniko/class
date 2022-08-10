import {Main} from "./Main.js"

const clienteVitor = new Main("Vitor", "10290");

clienteVitor.cadastrarSenha("teste123")
clienteVitor.autenticar("teste123")

clienteVitor._ehValido ? clienteVitor.depositar(1000) : false;

clienteVitor._ehValido ? clienteVitor.sacar(20) : false;

clienteVitor.imprimir()