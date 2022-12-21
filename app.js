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
