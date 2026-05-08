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
const buttons = document.querySelectorAll('button');
const intro = document.getElementById('introduction');
const startButton = document.getElementById('startGame');
const protospace = document.getElementById('protospaceArea');
const encounterButton = document.getElementById('startEncounter');

buttons.forEach(button => {
	button.addEventListener('mouseover', () => {
		button.classList.toggle("highlitButton");
	});
	
	button.addEventListener('mouseout', () => {
		button.classList.toggle("highlitButton");
	});
});

startButton.addEventListener('click', () => {
	intro.classList.toggle("hidden");
	protospace.classList.toggle("hidden");
});


encounterButton.addEventListener('click', () => {
	protospace.classList.toggle("hidden");
});