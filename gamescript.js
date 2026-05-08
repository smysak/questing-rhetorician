function generateTrait() {
	const trait = Math.random();
	console.log(trait);

	if (trait <=0.333) {
		return `easily-impressed`;
	} else if (trait >=0.667) {
		return `soft-hearted`;
	} else return `academic`;
}

const dictionChoices = [
	{	sentence: `We must come together, and work as part of a collective ______`,
	
		ethos: "enterprise",
		pathos: "concern",
		logos: "action",
	},
	
	{	sentence: `I understand that your life is difficult, and your days are filled with  ______`,
		
		ethos: "struggle",
		pathos: "suffering",
		logos: "exertion",
	},
]

const gamespace = document.getElementById('gamespaceArea');
const intro = document.getElementById('introduction');
const startButton = document.getElementById('startGame');
const protospace = document.getElementById('protospaceArea');
const encounterButton = document.getElementById('startEncounter');

startButton.addEventListener('click', function() {
	intro.classList.toggle("hidden");
	protospace.classList.toggle("hidden");
});


encounterButton.addEventListener('click', function() {
	protospace.classList.toggle("hidden");
});