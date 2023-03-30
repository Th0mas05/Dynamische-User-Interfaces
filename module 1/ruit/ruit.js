// Vraag de gebruiker om een getal in te voeren
const getal = prompt('Voer een getal in:')
// Converteer het ingevoerde getal naar een integer
const size = parseInt(getal)
// Bouw de ruitvormige string op
let ruit = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size - i; j++) {
    ruit += '&nbsp;';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    ruit += '*';
  }
  ruit += '<br>';
}
for (let i = size - 2; i >= 0; i--) {
  for (let j = 0; j < size - i; j++) {
    ruit += '&nbsp;';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    ruit += '*';
  }
  ruit += '<br>';
}
// Toon de ruitvormige string op de webpagina
    document.write(ruit)