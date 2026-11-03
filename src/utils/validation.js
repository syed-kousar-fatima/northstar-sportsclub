export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function validateRequiredFields(formData, fields) {
  return fields.every((field) => String(formData.get(field) ?? '').trim().length > 0);
}
