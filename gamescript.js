function generateTrait() {
	const trait = Math.random();
	console.log(trait);

	if (trait <=0.333) {
		return `easily-impressed`;
	} else if (trait >=0.667) {
		return `soft-hearted`;
	} else return `academic`;
}

