export class Cliente {
	nome;

	// atributo privado
	_cpf;

	get cpf() {
		return this._cpf;
	}

	constructor(nome, cpf) {
		this.nome = nome;
		this._cpf = cpf;
	}
}
