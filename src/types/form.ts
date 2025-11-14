export type CargoOption =
  | "Sócio(a) / CEO / Proprietário(a)"
  | "Diretor(a) de Vendas"
  | "Diretor(a) de Marketing"
  | "Diretor(a) Outras Áreas"
  | "Gerente de Marketing"
  | "Gerente de Vendas"
  | "Coordenador(a)/Supervisor(a) de Marketing"
  | "Coordenador(a)/Supervisor(a) de Vendas"
  | "Analista/Assistente de Marketing"
  | "Analista/Assistente de Vendas"
  | "Vendedor(a) / Executivo(a) de Contas"
  | "Estudante"
  | "Outros Cargos";

export interface FormData {
  telefone: string;
  email: string;
  cargo: CargoOption | "";
  mensagem: string;
  aceitaPolitica: boolean;
}

export interface ZapierWebhookPayload {
  nome: string;
  whatsapp: string;
  cargo: string;
  mensagem?: string;
  origem: string;
}

export interface ZapierPayload {
  telefone: string;
  email: string;
  cargo: string;
  mensagem?: string;
}

