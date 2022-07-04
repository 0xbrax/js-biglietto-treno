alert('Benvenuto, compra ora il tuo biglietto del treno!')

const route = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log('KM da percorrere: ' + route);

const birthYear = parseInt(prompt('In che anno sei nato?'));
console.log('Anno di nascita: ' + birthYear);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log('Data di oggi: ' + currentYear);

let years = parseInt(currentYear - birthYear);
console.log('Età: ' + years + ' anni');

let price = parseInt(0.21 * route);
// price.toFixed(2);
console.log('Prezzo biglietto senza sconto: ' + price + ' €');

if (years < 18) {
    price = price - ((20 / 100) * price);
    alert(`
    Il prezzo del biglietto YOUNG è: ${price} €
    Buon viaggio!
    `);
} else if (years >= 65) {
    price = price - ((40 / 100) * price);
    alert(`
    Il prezzo del biglietto OVER65 è: ${price} €
    Buon viaggio!
    `);
}
else {
    price = price;
    alert(`
    Il prezzo del biglietto è: ${price} €
    Buon viaggio!
    `);
}