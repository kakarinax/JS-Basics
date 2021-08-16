import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
	static totalContas = 0;

	constructor(cliente, agencia) {
		super(0, cliente, agencia);
		ContaCorrente.totalContas += 1;
	}

	sacar(valor) {
		// sobreescrevendo o método da classe mãe, não chama o super.
		const taxa = 1.1;
		return this._sacar(valor, taxa);
	}
}
