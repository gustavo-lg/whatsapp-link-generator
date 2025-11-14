// Arquivo de teste (opcional) - pode ser removido se não for usar testes
import { cleanPhone, formatPhone, isValidPhone, formatPhoneToWa } from "./formatPhone";

// Testes básicos
console.assert(cleanPhone("(11) 98765-4321") === "11987654321", "cleanPhone falhou");
console.assert(formatPhone("11987654321") === "(11) 98765-4321", "formatPhone falhou");
console.assert(isValidPhone("(11) 98765-4321") === true, "isValidPhone falhou");
console.assert(formatPhoneToWa("(11) 98765-4321") === "5511987654321", "formatPhoneToWa falhou");

