/**
 * Remove todos os caracteres não numéricos do telefone
 */
export function cleanPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Aplica máscara de telefone brasileiro: (99) 99999-9999 ou (99) 9999-9999
 */
export function formatPhone(phone: string): string {
  const cleaned = cleanPhone(phone);
  
  if (cleaned.length <= 2) {
    return cleaned;
  }
  
  if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  
  if (cleaned.length <= 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  // Com nono dígito (11 dígitos)
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
}

/**
 * Valida se o telefone tem formato válido (10 ou 11 dígitos após limpeza)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = cleanPhone(phone);
  return cleaned.length === 10 || cleaned.length === 11;
}

/**
 * Formata o telefone para o formato do WhatsApp (55XXXXXXXXXX)
 * Remove o zero inicial se houver e adiciona o código do país 55
 */
export function formatPhoneToWa(phone: string): string {
  const cleaned = cleanPhone(phone);
  
  // Remove o zero inicial se houver (formato brasileiro)
  const withoutLeadingZero = cleaned.startsWith("0") ? cleaned.slice(1) : cleaned;
  
  // Adiciona código do país 55
  return `55${withoutLeadingZero}`;
}

