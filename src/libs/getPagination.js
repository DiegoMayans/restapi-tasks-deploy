// Acá colocamos una función que recibe un objeto que extrae la cantidad de
// documentos a mostrar y la cantidad de páginas
// Trabaja con mongoose-pagination

export const getPagination = (page, size) => {
    // Si nos manda un size, lo convertimos en un número, si no existe damos 3 por defecto
    const limit = size ? +size : 3;
    // Esto define cuantas páginas nos vamos a saltear
    const offset = page ? page * limit : 0;
    return { limit, offset }
}