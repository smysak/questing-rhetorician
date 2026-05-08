function generateTrait() {
	const trait = Math.random();
	console.log(trait);

	if (trait <=0.333) {
		return `gullible`;
	} else if (trait >=0.667) {
		return `soft-hearted`;
	} else return `well-schooled`;
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
const encounterspace = document.getElementById('encounterArea');
const winScreen = document.getElementById('winScreen');
const loseScreen = document.getElementById('loseScreen');

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

const adjectiveSpan = document.getElementById('adjective');
const sentenceSpan = document.getElementById('sentenceBody');
const selectionA = document.getElementById('a');
const selectionB = document.getElementById('b');
const selectionC = document.getElementById('c');

encounterButton.addEventListener('click', () => {
	protospace.classList.toggle("hidden");

	let adjective = generateTrait();
	adjectiveSpan.innerText = adjective;
	
	if (adjective === "gullible") {
		adjectiveSpan.classList.add("ethos");
	};
	if (adjective === "soft-hearted") {
		adjectiveSpan.classList.add("pathos");
	};
	if (adjective === "well-schooled") {
		adjectiveSpan.classList.add("logos");
	};

	sentenceSpan.innerText = dictionChoices[0].sentence;

	selectionA.innerText = dictionChoices[0].ethos;
	selectionB.innerText = dictionChoices[0].pathos;
	selectionC.innerText = dictionChoices[0].logos;

	encounterspace.classList.toggle("hidden");

	selectionA.addEventListener('click', () => {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("ethos")) {
			winScreen.classList.toggle("hidden");
		} else {
			loseScreen.classList.toggle("hidden");
		}
	});

	selectionB.addEventListener('click', () => {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("pathos")) {
			winScreen.classList.toggle("hidden");
		} else {
			loseScreen.classList.toggle("hidden");
		}
	});

	selectionC.addEventListener('click', () => {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("logos")) {
			winScreen.classList.toggle("hidden");
		} else {
			loseScreen.classList.toggle("hidden");
		}
	});
	
});