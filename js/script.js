
'use strict';

const colors = ['yellow', 'lightgreen', 'red', 'blue', 'cyan', 'orange', 'pink'];

const randomInteger = function(n) {
	return Math.floor(Math.random() * (n + 1));
}

let height;

while (true) {
	height = prompt('How tall do you want the tree to be?', 10) * 1;

	if (height) { break; }
}

const tree = document.getElementById('tree');

for (let i = 0; i < height - 1; i++) {
	const row = document.createElement('div');
//	row.id = `row-${i}`;
	row.innerText = '*'.repeat(2*i+1);

	row.addEventListener('mouseover', (event) => {
		const el = event.target;
	//	el.classList.add('on');
		el.style.color = colors[randomInteger(colors.length - 1)];
	});

	row.addEventListener('mouseout', (event) => {
		const el = event.target;
	//	el.classList.remove('on');
		el.style.color = '';
	});

	tree.appendChild(row);
}

const stub = document.createElement('div');
stub.id = 'stub';
stub.innerText = '🟫';
tree.appendChild(stub);
