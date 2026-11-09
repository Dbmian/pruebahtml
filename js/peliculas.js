
const botonPelicula = document.getElementById("btn-pelicula");
const resultado = document.getElementById("resultado-pelicula");

const peliculas = [
    {
        titulo: "Interestelar",
        año: 2014,
        genero: "Ciencia ficción",
        descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    },
    {
        titulo: "El padrino",
        año: 1972,
        genero: "Drama / Crimen",
        descripcion: "La historia de la familia Corleone y su participación en el mundo del crimen organizado."
    },
    {
        titulo: "Volver al futuro",
        año: 1985,
        genero: "Ciencia ficción / Aventura",
        descripcion: "Marty McFly viaja accidentalmente al pasado utilizando una máquina del tiempo construida por Doc Brown."
    },
    {
        titulo: "Pulp Fiction",
        año: 1994,
        genero: "Crimen / Suspenso",
        descripcion: "Varias historias relacionadas entre sí muestran el lado más oscuro y absurdo del crimen en Los Ángeles."
    },
    {
        titulo: "El club de la pelea",
        año: 1999,
        genero: "Drama / Suspenso",
        descripcion: "Un hombre insatisfecho con su vida conoce a un misterioso vendedor de jabón y juntos crean un club de pelea clandestino."
    },
    {
        titulo: "The Batman",
        año: 2022,
        genero: "Acción / Crimen",
        descripcion: "Batman investiga una serie de asesinatos que revelan la corrupción de Gotham City."
    },
    {
        titulo: "La naranja mecánica",
        año: 1971,
        genero: "Ciencia ficción / Drama",
        descripcion: "Un joven delincuente es sometido a un controvertido tratamiento para eliminar su comportamiento violento."
    },
    {
        titulo: "Blade Runner 2049",
        año: 2017,
        genero: "Ciencia ficción",
        descripcion: "Un joven blade runner descubre un secreto que podría cambiar el destino de la humanidad."
    },
    {
        titulo: "El resplandor",
        año: 1980,
        genero: "Terror / Suspenso",
        descripcion: "Un escritor acepta cuidar un hotel aislado durante el invierno y comienza a perder la cordura."
    },
    {
        titulo: "Matrix",
        año: 1999,
        genero: "Ciencia ficción / Acción",
        descripcion: "Un programador descubre que la realidad que conoce es una simulación controlada por máquinas."
    },
    {
        titulo: "Whiplash",
        año: 2014,
        genero: "Drama / Música",
        descripcion: "Un joven baterista busca convertirse en uno de los mejores músicos bajo la exigente dirección de un profesor."
    },
    {
        titulo: "Taxi Driver",
        año: 1976,
        genero: "Drama / Crimen",
        descripcion: "Un veterano de guerra trabaja como taxista nocturno mientras desarrolla una creciente obsesión con la violencia."
    },
    {
        titulo: "Jurassic Park",
        año: 1993,
        genero: "Aventura / Ciencia ficción",
        descripcion: "Un parque temático con dinosaurios clonados se convierte en una pesadilla cuando sus sistemas de seguridad fallan."
    },
    {
        titulo: "El silencio de los inocentes",
        año: 1991,
        genero: "Suspenso / Terror",
        descripcion: "Una joven agente del FBI busca la ayuda de un peligroso asesino para atrapar a otro criminal."
    },
    {
        titulo: "Gladiador",
        año: 2000,
        genero: "Acción / Drama",
        descripcion: "Un general romano traicionado busca venganza mientras lucha como gladiador en el Coliseo."
    },
    {
        titulo: "Parásitos",
        año: 2019,
        genero: "Drama / Suspenso",
        descripcion: "Una familia de bajos recursos comienza a infiltrarse progresivamente en la vida de una familia adinerada."
    },
    {
        titulo: "Alien: El octavo pasajero",
        año: 1979,
        genero: "Ciencia ficción / Terror",
        descripcion: "La tripulación de una nave espacial debe sobrevivir a una criatura extraterrestre mortal."
    },
    {
        titulo: "El señor de los anillos: La comunidad del anillo",
        año: 2001,
        genero: "Fantasía / Aventura",
        descripcion: "Un joven hobbit emprende un peligroso viaje para destruir un anillo de poder."
    },
    {
        titulo: "Psicosis",
        año: 1960,
        genero: "Terror / Suspenso",
        descripcion: "Una secretaria llega a un solitario motel donde conoce a un joven de comportamiento inquietante."
    },
    {
        titulo: "Django sin cadenas",
        año: 2012,
        genero: "Western / Acción",
        descripcion: "Un esclavo liberado se une a un cazarrecompensas para rescatar a su esposa."
    },
    {
        titulo: "El viaje de Chihiro",
        año: 2001,
        genero: "Animación / Fantasía",
        descripcion: "Una niña queda atrapada en un mundo mágico habitado por espíritus y criaturas extraordinarias."
    },
    {
        titulo: "La sociedad de los poetas muertos",
        año: 1989,
        genero: "Drama",
        descripcion: "Un profesor poco convencional inspira a sus alumnos a pensar por sí mismos y aprovechar la vida."
    },
    {
        titulo: "Mad Max: Fury Road",
        año: 2015,
        genero: "Acción / Aventura",
        descripcion: "En un mundo postapocalíptico, Max se une a Furiosa en una peligrosa persecución por el desierto."
    },
    {
        titulo: "Réquiem por un sueño",
        año: 2000,
        genero: "Drama psicológico",
        descripcion: "Cuatro personas persiguen sus sueños mientras sus vidas se deterioran por diferentes adicciones."
    },
    {
        titulo: "2001: Odisea del espacio",
        año: 1968,
        genero: "Ciencia ficción",
        descripcion: "Una misteriosa estructura extraterrestre lleva a la humanidad a emprender un viaje más allá de lo conocido."
    }
];

function peliculaAleatoria() {

    const numero = Math.floor(Math.random() * peliculas.length);

    const pelicula = peliculas[numero];

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.titulo;

    const año = document.createElement("p");
    año.textContent = "Año: " + pelicula.año;

    const genero = document.createElement("p");
    genero.textContent = "Género: " + pelicula.genero;

    const descripcion = document.createElement("p");
    descripcion.textContent = pelicula.descripcion;

    resultado.replaceChildren();

    resultado.append(titulo, año, genero, descripcion);
}

botonPelicula.addEventListener("click", peliculaAleatoria);
