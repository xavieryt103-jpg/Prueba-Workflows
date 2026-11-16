const assert = require("assert");
const { calcularIGV, totalConIGV } = require("../src/igv");

// 1. El IGV de 100 es 18
assert.strictEqual(calcularIGV(100), 18);

// 2. El total de 100 con IGV es 118
assert.strictEqual(totalConIGV(100), 118);

// 3. Un monto negativo debe dar error
assert.throws(() => calcularIGV(-10));

console.log("Todas las pruebas pasaron");