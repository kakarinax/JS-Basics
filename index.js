import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca } from "./ContaPoupanca.js"


const cliente1 = new Cliente("Karina", 52678941265); // construtor criado.
// cliente1.nome = "Karina";
// cliente1.cpf = 52678941265;

console.log(cliente1);

const cliente2 = new Cliente("Aline",35241269852);
// cliente2.nome = "Aline";
// cliente2.cpf = 352412698752;

console.log(cliente2);

const cc1 = new ContaCorrente(cliente1, 1001);
// cc1.cliente = cliente1;
// cc1.agencia = 1001;
cc1.depositar(300);
cc1.sacar(100);
console.log(cc1);

const cp1 = new ContaPoupanca(220, cliente2, 1002);
// cc2.cliente = cliente2;
// cc2.agencia = 1002;
console.log(cp1);
