import { Cliente } from "./Cliente.js";
export class ContaCorrente {
	agencia;
    static totalContas = 0;

	// atributos privados
	_cliente;
	_saldo = 0;

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			// instanceof operador, condicional que define que a atribuição de novoValor ó será feita se for uma instância
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
		return;
	}
	depositar(valor) {
		if (valor < 0) return;
		this._saldo += valor;
	}

	transferir(valor, conta) {
		conta.cidade = "São Paulo";
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}

    constructor(agencia, cliente) {
        this.agencia;
        this.cliente = cliente;
        ContaCorrente.totalContas += 1;
    }
}
