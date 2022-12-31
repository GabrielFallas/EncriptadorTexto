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
 * @param {String} texto
 */
const encriptarTexto = (texto) => {
	//Se quitan los espacios extra del texto.
	let mensaje = texto.replace(/\s+/g, " ");
	return mensaje.replaceAll(/[aeiou]/gi, (vocal) => mapper[vocal]);
};
/**
 *
 * @param {String} texto
 */
const desencriptarTexto = (texto) => {
	//Se quitan los espacios extra del texto.
	let mensaje = texto.replace(/\s+/g, " ");
	mensaje = mensaje.replaceAll("ai", "a");
	mensaje = mensaje.replaceAll("enter", "e");
	mensaje = mensaje.replaceAll("imes", "i");
	mensaje = mensaje.replaceAll("ober", "o");
	mensaje = mensaje.replaceAll("ufat", "u");
	return mensaje;
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
/**
 *
 * @param {String} texto
 */
const validarTexto = (texto) => {
	let regex = new RegExp("[^((0-9)|(a-z)|\\s)]", "g");
	return regex.test(texto);
};
btnCopy.addEventListener("click", () => {
	let texto = resultText.textContent;
	copiarAlPortapapeles(texto);
});

btnEncrypt.addEventListener("click", () => {
	let inputValue = inputText.value;
	if (!validarTexto(inputValue)) {
		resultText.textContent = encriptarTexto(inputValue);
	} else {
		alert("Solo letras minúsculas y sin acento.");
	}
});

btnDesencrypt.addEventListener("click", () => {
	let inputValue = inputText.value;
	if (!validarTexto(inputValue)) {
		resultText.textContent = desencriptarTexto(inputValue);
	} else {
		alert("Solo letras minúsculas y sin acento.");
	}
});

inputText.addEventListener("input", () => {
	if (inputText.value.length === 0) {
		btnCopy.style.display = "none";
		resultText.style.display = "none";
		noTextContainer.style.display = "block";
		if (window.outerWidth >= 1024) {
			image.style.display = "block";
		}
	} else {
		btnCopy.style.display = "block";
		resultText.style.display = "block";
		image.style.display = "none";
		noTextContainer.style.display = "none";
	}
});
