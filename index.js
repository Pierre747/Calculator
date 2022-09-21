//Je sélectionne tous les boutons de mon application
const buttons = document.querySelectorAll('.btn');

//Je sélectionne l'espace du résultat
const result = document.getElementById('result');

//Je récupère la valeur de l'élément cliqué grâce à son ID
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		result.textContent += e.target.id; // l'opérateur += me permet de mettre plusieurs chiffres dans le result
	});
});

//Je code mon bouton =
equal.addEventListener('click', () => {
	result.textContent = eval(result.textContent); //La méthode eval nous permet de faire le calcul
});

//Je code mon bouton C
clear.addEventListener('click', () => {
	result.textContent = '';
	342234;
});

//==================================================================================//
//=============================Ajout des touches du clavier=========================//
//==================================================================================//

document.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		result.textContent = eval(result.textContent);
	} else {
		result.textContent += e.key;
	}
});
