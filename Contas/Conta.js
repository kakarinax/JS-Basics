import { Cliente } from "./Cliente.js";

// classe abstrata
export class Conta {
	constructor(saldoInicial, cliente, agencia) {
		if (this.constructor == Conta) {
			throw new Error("Objeto do tipo Conta não pode ser instanciado");
		}
		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}

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

	// método abstrato
	sacar(valor) {
		throw new Error("Método abstrato, precisa ser sobreescrito");
	}

	_sacar(valor, taxa) {
		const valorSacado = taxa * valor;
		if (this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}
		return 0;
	}

	depositar(valor) {
		if (valor < 0) return;
		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}
