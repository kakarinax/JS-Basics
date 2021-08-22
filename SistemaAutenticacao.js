export class SistemaAutenticacao {
	static login(autenticavel, senha) {
		if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
			return autenticavel.autenticar(senha);
		}
		return false;
	}

    static ehAutenticavel(autenticavel){
        return "autenticar" in Autenticavel && autenticavel.autenticar instanceof Function // verifica se chave esta no objeto e se é uma função, uma maneira de chamar os métodos

    }
}
