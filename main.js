const match = /{{Pin\|-?[1-9][0-9]*\|-?[1-9][0-9]*\|-?[1-9]?[0-9]*\|[a-zA-Z -@]+}}/;

function process() {
	const pins = document.getElementById('pins').value.split('\n');
	let obj = [];

	let matches = 0;
	let nonMatches = 0;

	for (let i = 0; i < pins.length; i++) {
		obj.push({pin:pins[i],match:match.test(pins[i])});
		if (!obj[i].match) {
			nonMatches++;
		} else matches++;
	}

	const res = document.getElementById('result')
	console.log(`Tested ${pins.length} cases. ${matches} were valid, while ${nonMatches} were invalid.`);
	res.innerHTML = `Tested ${pins.length} cases. ${matches} were valid, while ${nonMatches} were invalid.`;
	console.log(`Valid Cases:`);
	res.innerHTML += `<br>Valid Cases:`;
	for (let i = 0; i < obj.length; i++) {
		if (obj[i].match) {
			console.log(`\t${i+1}: ${obj[i].pin}`);
			res.innerHTML += `<br>\t${i+1}: ${obj[i].pin}`;
		}
	}
	console.log(`Invalid Cases:`);
	res.innerHTML += `<br>Invalid Cases:`;
	for (let i = 0; i < obj.length; i++) {
		if (!obj[i].match) {
			console.log(`\t${i+1}: ${obj[i].pin}`);
			res.innerHTML += `<br>\t${i+1}: ${obj[i].pin}`;
		}
	}
}