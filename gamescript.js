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

	{	sentence: `There are serious issues before us, but we address them with ______ decisions`,

		ethos: "judicious",
		pathos: "humane",
		logos: "reasonable",
	}
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

const handleEncounter = function () {
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

	const handleEthosChoice = function () {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("ethos")) {
			adjectiveSpan.classList.remove("ethos");
			dictionChoices.shift();
			if (dictionChoices.length === 0) {
				winScreen.classList.toggle("hidden");
			} else {
				selectionA.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionC.removeEventListener('click', handleLogosChoice);
				protospace.classList.toggle("hidden");
				encounterButton.addEventListener('click', handleEncounter), {once: true};
			}
		} else {
			loseScreen.classList.toggle("hidden");
		}
	}

	const handlePathosChoice = function () {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("pathos")) {
			adjectiveSpan.classList.remove("pathos");
			dictionChoices.shift();
			if (dictionChoices.length === 0) {
				winScreen.classList.toggle("hidden");
			} else {
				selectionA.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionC.removeEventListener('click', handleLogosChoice);
				protospace.classList.toggle("hidden");
				encounterButton.addEventListener('click', handleEncounter), {once: true};
			}
		} else {
			loseScreen.classList.toggle("hidden");
		}
	}

	const handleLogosChoice = function () {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("logos")) {
			adjectiveSpan.classList.remove("logos");
			dictionChoices.shift();
			if (dictionChoices.length === 0) {
				winScreen.classList.toggle("hidden");
			} else {
				selectionA.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionC.removeEventListener('click', handleLogosChoice);
				protospace.classList.toggle("hidden");
				encounterButton.addEventListener('click', handleEncounter), {once: true};
			}
		} else {
			loseScreen.classList.toggle("hidden");
		}
	}

	encounterspace.classList.toggle("hidden");

	selectionA.addEventListener('click', handleEthosChoice), {once: true};
	selectionB.addEventListener('click', handlePathosChoice), {once: true};
	selectionC.addEventListener('click', handleLogosChoice), {once: true};
}

encounterButton.addEventListener('click', handleEncounter), {once: true};