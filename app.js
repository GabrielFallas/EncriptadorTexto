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
	return palabras.join(" ");
};
