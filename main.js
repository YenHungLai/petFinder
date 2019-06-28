import { Client } from "@petfinder/petfinder-js";

const animalTypes = document.querySelector("#animal-types");
const results = document.querySelector(".results");

const client = new Client({
	apiKey: "hUqDH8B26YwHadBHYbplwsLg9fyNExrYMZ1fYOXRj7oWh5Fmvq",
	secret: "lgy0f0Emuw68B5EBYOTlLtITpvyl1eIatXqZqnNR"
});

client.animalData.types().then(res => {
	// console.log(res);
	const types = res.data.types.sort((a, b) => a.name.length - b.name.length);
	console.log("types :", types);
	types.forEach(type => {
		// Value for option is equal to text inside???
		animalTypes.innerHTML += `
            <option>${type.name}</option>
        `;
	});
});

animalTypes.addEventListener("change", e => {
	console.log(e.target.value);
	const selectedAnimal = e.target.value;
	client.animal
		.search({ type: e.target.value })
		.then(res => {
			// console.log(res.data.animals);
			listAnimals(res.data.animals);
		})
		.catch(err => {
			console.log(err);
		});
});

const listAnimals = animalsData => {
	results.innerHTML = "";
	console.log(animalsData);
	animalsData.forEach(animal => {
		results.innerHTML += `
            <div class='card'>
                <img src=${
					animal.photos.length > 0 ? animal.photos[0].medium : null
                } alt='Animal photo' class='card-img'>
                <div class='card-content'>
                    <ul>
                        <li><strong>Name:</strong>${animal.name}</li>
                        <li><strong>ID:</strong>${animal.id}</li>
                        <li><strong>Age:</strong>${animal.age}</li>
                        <li><strong>gender:</strong>${animal.gender}</li>   
                    </ul>
                </div>
            </div>
        `;
	});
};

// client.organization.search({state: 'NY', limit: 100}).then(resp => {
// 	console.log(resp);
// });
