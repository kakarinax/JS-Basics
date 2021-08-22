import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Karina", 10000, 1345678901);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Aline", 5000, 32165498710);
gerente.cadastrarSenha("123456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado);
