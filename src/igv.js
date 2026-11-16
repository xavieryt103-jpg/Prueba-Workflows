const IGV = 0.18;

// Calcula el IGV de un monto
function calcularIGV(monto) {
  if (monto < 0) {
    throw new Error("El monto no puede ser negativo");
  }
  return Number((monto * IGV).toFixed(2));
}

// Calcula el total sumando el IGV
function totalConIGV(monto) {
  return Number((monto + calcularIGV(monto)).toFixed(2));
}

module.exports = { calcularIGV, totalConIGV };