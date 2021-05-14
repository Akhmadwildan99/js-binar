//  DOM

// document.write(`<h2>Saya WILDAN</h2>`)

const tutor = document.getElementById('tut');
const pBaru = document.createElement('p');
const pTeks = document.createTextNode('javascript totrial');

pBaru.appendChild(pTeks);
tutor.appendChild(pBaru);