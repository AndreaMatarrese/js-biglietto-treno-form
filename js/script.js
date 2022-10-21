console.log('Calcolo prezzo del biglietto')

const name = document.querySelector('nome')
const distance=document.querySelector('km')
const age= document.querySelector('eta')
const conferme=document.querySelector('confirm')
const deconste=document.querySelector('delete')

conferme.addEventListener('click', function() {
    const distance = parseFloat(distance.value);

});
console.log('nome', name, 'km', distance, 'età', age)