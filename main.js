// import { Client } from "@petfinder/petfinder-js";

// let selectedAnimal;
// let animalsData;

// const client = new Client({
// 	apiKey: "hUqDH8B26YwHadBHYbplwsLg9fyNExrYMZ1fYOXRj7oWh5Fmvq",
// 	secret: "lgy0f0Emuw68B5EBYOTlLtITpvyl1eIatXqZqnNR"
// });

// client.animalData.types().then(res => {
// 	console.log(res);
// 	selectAnimals(res.data.types);
// });

// client.animal
// 	.search({type: 'Bird'})
// 	.then(res => {
// 		console.log(res.data.animals);
// 		animalsData = res.data.animals;
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// const animalTypes = document.querySelector("#animal-types");
// animalTypes.addEventListener("change", e => {
// 	console.log(e.target.value);
// 	const selectedAnimal = e.target.value;
// 	listAnimals(animalsData, selectedAnimal);
// });

// const selectAnimals = types => {
// 	types.forEach(item => {
// 		// let opt = document.createElement("option");
// 		// opt.value = item.name;
// 		// opt.innerText = item.name;
// 		// animalTypes.appendChild(opt);

// 		// Value for option is equal to text inside???
// 		animalTypes.innerHTML += `
//             <option>${item.name}</option>
//         `;
// 	});
// };

// const results = document.querySelector(".results");
// const listAnimals = (animals, selectedAnimal) => {
// 	results.innerHTML = "";
// 	const selected = animals.filter(animal => animal.type == selectedAnimal);
// 	console.log(selected);
// 	selected.forEach(item => {
// 		results.innerHTML += `
//             <div class='card'>
//                 <div>${item.name}</div>
//                 <div>${item.id}</div>
//                 <div>${item.age}</div>
//                 <div>${item.gender}</div>
//             </div>
//         `;
// 	});
// };

// client.organization.search({state: 'NY', limit: 100}).then(resp => {
// 	console.log(resp);
// });
