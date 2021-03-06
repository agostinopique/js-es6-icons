const iconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},


	{
		name: 'display',
		prefix: 'fa-',
		type: 'computer',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'computer',
		prefix: 'fa-',
		type: 'computer',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'heart',
		prefix: 'fa-',
		type: 'love',
		family: 'fa-regular',
		color: 'blue'
	},
	{
		name: 'bitcoin-sign',
		prefix: 'fa-',
		type: 'crypto',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'terminal',
		prefix: 'fa-',
		type: 'computer',
		family: 'fa-solid',
		color: 'blue'
	}
];

/* 
	**Milestone 1**
	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui ?? presente il nome dell???icona e l???icona stessa.

	**Milestone 2**
	Ciascuna icona ha una propriet?? ???color???: utilizzare questa propriet?? per visualizzare le icone del colore corrispondente.

	**Milestone 3**
	Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l???utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

	**BONUS**
	1- modificare la struttura dati fornita e valorizzare la propriet?? ???color??? in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale ?? formata dal simbolo ???#??? seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
	2- popolare le options della select della milestone 3 dinamicamente.


	MILESTONE 1:
	1. Crea una funzione che va a creare dei box con le classi boostrap e non che andranno poi stampate all'interno della row di bootstrap;
	2. Creare una funzione che va a stampare il nome e il codice dell'icona all'interno del box creato al punto sopra.

	MILESTONE 2:
	1. Creare una funzione che va a leggere la propriet?? color di ogni oggetto e ad aggiungerla come style all'icona corrispondente;

	MILESTONE 3:
	1. Creare una funzione con il quale vado a leggere il value dell'option selezionato dell'user.
	2. Creo delle funzioni che filtrano gli oggetti in base al type;
	3. Stampo a schermo l'array che corrisponde al type selezionato dall'utente;
*/

// Seleziono il contenitore all'interno del quale stampare;
const iconSection = document.getElementById('icon_section');


// Eseguo il sort degli elementi dell'array principale a seconda del type;
/* 
const animalArray = iconList.filter((icon) => icon.type === 'animal');
const vegetableArray = iconList.filter((icon) => icon.type === 'vegetable');
const userArray = iconList.filter((icon) => icon.type === 'user');
 */
// console.log(animalArray)
// console.log(vegetableArray)
// console.log(userArray)



// Triggero, con il cambio del value tramite il select, la stampa delle schede a seconda del value selezionato dall'utente
/* 
document.getElementById('select-type').addEventListener('change',function(){
	switch (this.value) {
		case 'animal':
			iconSection.innerHTML = '';
			iconBox(animalArray);
			break;

		case 'user':
			iconSection.innerHTML = '';
			iconBox(userArray);
			break;

		case 'vegetable':
			iconSection.innerHTML = '';
			iconBox(vegetableArray);
			break;

		case 'all':
			iconSection.innerHTML = '';
			iconBox(iconList);
			break;

		default:
			break;
	}
});
 */

/**
 * Stampa l'array selezionato tramite il select a schermo 
 * @param {array} array 
 */
const iconBox = (array) => {
	
	array.forEach((icon) => {
		
		// Randomizza il colore di ogni singola icona;
		icon.color = randomizeColor();

		const cell = document.createElement('div');

		cell.className = 'box';
		cell.classList.add('m-3', 'text-center');

		iconSection.append(cell);
		
		const {name, family, prefix, color} = icon;
		// console.log(icon)

		
		cell.innerHTML = `
			<i class='${family} ${prefix}${name} fa-2x' style='color: ${color}'></i>
			<span>${name}</span>`
	})

}

/* 

	**BONUS**
	1- modificare la struttura dati fornita e valorizzare la propriet?? ???color??? in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale ?? formata dal simbolo ???#??? seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
	2- popolare le options della select della milestone 3 dinamicamente.


	BONUS 1
	1. Creare un estrattore casualedi numeri da 0 a 9 e di lettere da A a F;
	2. Il return della funzione deve andare a sovrascrivere i valori della propriet?? color;

	BONUS 2
	1. Destruttura gli oggeti per ottenere il type;
	2. Sovrascrivi il value con la propriet?? ottenuta dal punto sopra;
*/

function randomizeColor(){
	const lettersNumbers = 'ABCDEF0123456789';
	let finalColor = '#';

	for(let i= 0; i < 6; i++){
		finalColor += lettersNumbers[Math.floor(Math.random() * 16)];
		// console.log(finalColor)
	}

	return finalColor;
}


const dinamicType = (array) => { 
	
	let arrayType = ['all'];

	array.forEach((icon) => {
		const {type} = icon;
		
		if(!arrayType.includes(type)){
			arrayType.push(type);
			// console.log(type)
		}
	});

	arrayType.forEach((el) => {

		document.getElementById('select-type').innerHTML += `<option value=${el}>${el}</option>`;

		const elArray = iconList.filter((icon) => icon.type === el);

		// console.log(elArray);
		// console.log(el);

		document.getElementById('select-type').addEventListener('change', function(){
			switch (this.value) {
				case el:
					iconSection.innerHTML = '';
					iconBox(elArray);
					break;
				
				case 'all':
					iconSection.innerHTML = '';
					iconBox(iconList);
					break;

				default:
					break;
			}

		})
	})

}

// Stampa sempre prima tutte le icone al caricamento della pagina;
iconBox(iconList);

// Cambia dinaicamente le option in base ai type presenti nell'array degli oggetti
dinamicType(iconList);
