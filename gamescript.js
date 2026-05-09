function generateTrait() {
	const trait = Math.random();

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

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

shuffle(dictionChoices);

const gamespace = document.getElementById('gamespaceArea');
const buttons = document.querySelectorAll('button');
const sound = document.getElementById('hoverSound');
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
		sound.currentTime = 0.45;
		sound.volume = 0.05;
		sound.play();
	});
	
	button.addEventListener('mouseout', () => {
		button.classList.toggle("highlitButton");
		sound.pause();
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

	const handleEthosChoice = function () {
		encounterspace.classList.toggle("hidden");
		if (adjectiveSpan.classList.contains("ethos")) {
			adjectiveSpan.classList.remove("ethos");
			dictionChoices.shift();
			if (dictionChoices.length === 0) {
				winScreen.classList.toggle("hidden");
			} else {
				selectionA.removeEventListener('click', handleEthosChoice);
				selectionA.removeEventListener('click', handlePathosChoice);
				selectionA.removeEventListener('click', handleLogosChoice);
				selectionB.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionB.removeEventListener('click', handleLogosChoice);
				selectionC.removeEventListener('click', handleEthosChoice);
				selectionC.removeEventListener('click', handlePathosChoice);
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
				selectionA.removeEventListener('click', handlePathosChoice);
				selectionA.removeEventListener('click', handleLogosChoice);
				selectionB.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionB.removeEventListener('click', handleLogosChoice);
				selectionC.removeEventListener('click', handleEthosChoice);
				selectionC.removeEventListener('click', handlePathosChoice);
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
				selectionA.removeEventListener('click', handlePathosChoice);
				selectionA.removeEventListener('click', handleLogosChoice);
				selectionB.removeEventListener('click', handleEthosChoice);
				selectionB.removeEventListener('click', handlePathosChoice);
				selectionB.removeEventListener('click', handleLogosChoice);
				selectionC.removeEventListener('click', handleEthosChoice);
				selectionC.removeEventListener('click', handlePathosChoice);
				selectionC.removeEventListener('click', handleLogosChoice);
				protospace.classList.toggle("hidden");
				encounterButton.addEventListener('click', handleEncounter), {once: true};
			}
		} else {
			loseScreen.classList.toggle("hidden");
		}
	}

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

	let randomizer = Math.floor(Math.random() * 6) + 1;
	switch (randomizer) {
		case 1:
			selectionA.innerText = dictionChoices[0].ethos;
			selectionB.innerText = dictionChoices[0].pathos;
			selectionC.innerText = dictionChoices[0].logos;
			selectionA.addEventListener('click', handleEthosChoice);
			selectionB.addEventListener('click', handlePathosChoice);
			selectionC.addEventListener('click', handleLogosChoice);
			break;
		case 2:
			selectionA.innerText = dictionChoices[0].pathos;
			selectionB.innerText = dictionChoices[0].logos;
			selectionC.innerText = dictionChoices[0].ethos;
			selectionA.addEventListener('click', handlePathosChoice);
			selectionB.addEventListener('click', handleLogosChoice);
			selectionC.addEventListener('click', handleEthosChoice);
			break;
		case 3:
			selectionA.innerText = dictionChoices[0].logos;
			selectionB.innerText = dictionChoices[0].ethos;
			selectionC.innerText = dictionChoices[0].pathos;
			selectionA.addEventListener('click', handleLogosChoice);
			selectionB.addEventListener('click', handleEthosChoice);
			selectionC.addEventListener('click', handlePathosChoice);
			break;
		case 4:
			selectionA.innerText = dictionChoices[0].logos;
			selectionB.innerText = dictionChoices[0].pathos;
			selectionC.innerText = dictionChoices[0].ethos;
			selectionA.addEventListener('click', handleLogosChoice);
			selectionB.addEventListener('click', handlePathosChoice);
			selectionC.addEventListener('click', handleEthosChoice);
			break;
		case 5:
			selectionA.innerText = dictionChoices[0].pathos;
			selectionB.innerText = dictionChoices[0].ethos;
			selectionC.innerText = dictionChoices[0].logos;
			selectionA.addEventListener('click', handlePathosChoice);
			selectionB.addEventListener('click', handleEthosChoice);
			selectionC.addEventListener('click', handleLogosChoice);
			break;
		case 6:
			selectionA.innerText = dictionChoices[0].ethos;
			selectionB.innerText = dictionChoices[0].logos;
			selectionC.innerText = dictionChoices[0].pathos;
			selectionA.addEventListener('click', handleEthosChoice);
			selectionB.addEventListener('click', handleLogosChoice);
			selectionC.addEventListener('click', handlePathosChoice);
			break;
	}

	encounterspace.classList.toggle("hidden");

}

encounterButton.addEventListener('click', handleEncounter), {once: true};