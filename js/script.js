console.log('Calcolo prezzo del biglietto')

let inputName = document.getElementById ('name')
let inputKm = document.getElementById('km');
let inputAge= document.getElementById('age')

let price= inputKm * 0.21
let underage = price* 0.2
let overage = price * 0.4

const btnGenerate=document.querySelector('.confirm')
const btnReset=document.querySelector('.delete')
const eleTicket = document.querySelector('.ticket')

const outputName=document.getElementById('name-pass')
const outputPrice=document.getElementById('price-pass')

const pricePerKilometer = 0.21;

btnGenerate.addEventListener('click', function() {
    const distance = parseFloat(inputKm.value);
	const age = inputAge.value;

    if(inputName.value != '' && inputAge.value != '' && inputAge.value!='seleziona' ){
        const baseprice= pricePerKilometer * distance;
        let discountRate;

        switch (age){
            case 'minorenne':
                discountRate=20;
                break;
            case 'maggiorenne':
                discountRate=0;
                break;
            case 'over':
                discountRate=40;
                break;
        }
        let finalPrice
        finalPrice= price - (discountRate*price) / 100;

        console.log('il prezzo del biglietto è', finalPrice,'€');

        outputName.innerHTML= inputName.value;
        outputPrice.innerHTML=finalPrice;
        eleTicket.classList.remove('hide')

    } else{
        console.log('Inserire dei valori');
    }

});
console.log('nome', name, 'km', distance, 'età', age)

btnReset.addEventListener('click', function () {
	outputName.innerHTML = '';
	outputPrice.innerHTML = '';
	eleTicket.classList.add('hidden');
});