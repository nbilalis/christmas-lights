
'use strict';

const colors = ['yellow', 'yellowgreen', 'red', 'blue', 'cyan', 'orange', 'pink'];

const randomInteger = n => Math.floor(Math.random() * n); // Random number in [0, n)

/*
 * User input
 * -------------------------------------------------- */

let height;

while (true) {
	height = prompt('How tall do you want the tree to be?', 10) * 1;

	if (height) { break; }
}

/*
 * Tree construction
 * -------------------------------------------------- */

const tree = document.getElementById('tree');

let count = 0;

for (let i = 0; i < height - 1; i++) {
	const row = document.createElement('div');
//	row.id = `row-${i}`;

	for (let j = 0; j < 2*i+1; j++) {
		const light = document.createElement('span');
		light.id = `light-${count++}`;
		light.classList.add('light');
		light.innerText = '*';

		row.appendChild(light);

		if (i === 0) {
			light.id = 'star';
			light.innerText = '★';

			continue;
		}
	}

	tree.appendChild(row);
}

const stub = document.createElement('div');
stub.id = 'stub';
stub.innerText = '🟫';
tree.appendChild(stub);

/*
 * Events
 * -------------------------------------------------- */

tree.addEventListener('mouseover', (event) => {
	const el = event.target;
//	el.classList.add('on');
	if (el.classList.contains('light')) {
		el.style.color = colors[randomInteger(colors.length)];
	//	el.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	}
});

tree.addEventListener('mouseout', (event) => {
	const el = event.target;
	if (el.classList.contains('light')) {
	//	el.classList.remove('on');
		el.style.color = '';
	}
});

/*
 * Timers
 * -------------------------------------------------- */

setInterval(() => {
	const star = document.getElementById('star');
	star.classList.toggle('on');
}, 2 * 1000);

setInterval(() => {
	const light = document.getElementById(`light-${randomInteger(count+1)}`);
	if (light) {
	//	light.classList.toggle('on');
		light.style.color = colors[randomInteger(colors.length)];
	}
}, 1 * 1000);
