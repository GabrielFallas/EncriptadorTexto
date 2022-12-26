const inputText = document.querySelector("textarea");
const resultText = document.querySelector("#resultText");
const image = document.querySelector("#noTextImage");
const card = document.querySelector(".card");
const btnCopy = document.querySelector("#btnCopy");
const noTextContainer = document.querySelector("#noTextContainer");
const btnEncrypt = document.querySelector("#btnEncrypt");
const btnDesencrypt = document.querySelector("#btnDesencrypt");

const mapper = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};
/**
 *
 * @param {String} palabra
 */
const encriptarPalabra = (palabra) => {
	return palabra.replace(/[aeiou]/gi, (vocal) => mapper[vocal]);
};
/**
 *
 * @param {String} texto
 */
const encriptarTexto = (texto) => {
	//Se quitan los espacios extra del texto.
	const palabras = texto.replace(/\s+/g, " ").split(" ");
	//Se recorre el array y se encripta cada palabra.
	palabras.forEach((palabra, indice) => {
		palabras[indice] = encriptarPalabra(palabra);
	});
	//Se toman las palabras del arreglo y se unen en un solo string.
	return palabras.join(" ");
};
/**
 *
 * @param {String} palabra
 */
const desencriptarPalabra = (palabra) => {
	palabra = palabra.replace("ai", "a");
	palabra = palabra.replace("enter", "e");
	palabra = palabra.replace("imes", "i");
	palabra = palabra.replace("ober", "o");
	palabra = palabra.replace("ufat", "u");
	return palabra;
};
/**
 *
 * @param {String} texto
 */
const desencriptarTexto = (texto) => {
	//Se quitan los espacios extra del texto.
	const palabras = texto.replace(/\s+/g, " ").split(" ");
	//Se recorre el array y se encripta cada palabra.
	palabras.forEach((palabra, indice) => {
		palabras[indice] = desencriptarPalabra(palabra);
	});
	//Se toman las palabras del arreglo y se unen en un solo string.
	return palabras.join(" ");
};
/**
 *
 * @param {String} texto
 */
const copiarAlPortapapeles = (texto) => {
	try {
		navigator.clipboard.writeText(texto);
		alert("Texto copiado al portapapeles!");
	} catch (error) {
		console.log(error);
	}
};

btnCopy.addEventListener("click", () => {
	let texto = resultText.textContent;
	copiarAlPortapapeles(texto);
});

btnEncrypt.addEventListener("click", () => {
	let inputValue = inputText.value;
	resultText.textContent = encriptarTexto(inputValue);
});

btnDesencrypt.addEventListener("click", () => {
	let inputValue = inputText.value;
	resultText.textContent = desencriptarTexto(inputValue);
});

inputText.addEventListener("input", () => {
	if (inputText.value.length === 0) {
		btnCopy.style.display = "none";
		resultText.style.display = "none";
		noTextContainer.style.display = "block";
		image.style.display = "block";
	} else {
		btnCopy.style.display = "block";
		resultText.style.display = "block";
		image.style.display = "none";
		noTextContainer.style.display = "none";
	}
});
