
const botonMusica = document.getElementById("btn-cancion");
const resultadoMusica = document.getElementById("resultado-recomendacion");

const canciones = [
    {
        titulo: "21st Century Schizoid Man",
        artista: "King Crimson",
        año: 1969,
        genero: "Rock progresivo"
    },
    {
        titulo: "Stairway to Heaven",
        artista: "Led Zeppelin",
        año: 1971,
        genero: "Rock"
    },
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        año: 1975,
        genero: "Rock"
    },
    {
        titulo: "Comfortably Numb",
        artista: "Pink Floyd",
        año: 1979,
        genero: "Rock progresivo"
    },
    {
        titulo: "Hotel California",
        artista: "Eagles",
        año: 1976,
        genero: "Rock"
    },
    {
        titulo: "De Música Ligera",
        artista: "Soda Stereo",
        año: 1990,
        genero: "Rock nacional"
    },
    {
        titulo: "Ji Ji Ji",
        artista: "Patricio Rey y sus Redonditos de Ricota",
        año: 1986,
        genero: "Rock nacional"
    },
    {
        titulo: "Persiana Americana",
        artista: "Soda Stereo",
        año: 1986,
        genero: "Rock nacional"
    },
    {
        titulo: "Seminare",
        artista: "Serú Girán",
        año: 1978,
        genero: "Rock nacional"
    },
    {
        titulo: "Muchacha (Ojos de Papel)",
        artista: "Almendra",
        año: 1969,
        genero: "Rock nacional"
    },
    {
        titulo: "Paranoid",
        artista: "Black Sabbath",
        año: 1970,
        genero: "Heavy metal"
    },
    {
        titulo: "Master of Puppets",
        artista: "Metallica",
        año: 1986,
        genero: "Thrash metal"
    },
    {
        titulo: "The Trooper",
        artista: "Iron Maiden",
        año: 1983,
        genero: "Heavy metal"
    },
    {
        titulo: "Chop Suey!",
        artista: "System of a Down",
        año: 2001,
        genero: "Metal alternativo"
    },
    {
        titulo: "Smells Like Teen Spirit",
        artista: "Nirvana",
        año: 1991,
        genero: "Grunge"
    },
    {
        titulo: "Everlong",
        artista: "Foo Fighters",
        año: 1997,
        genero: "Rock alternativo"
    },
    {
        titulo: "Do I Wanna Know?",
        artista: "Arctic Monkeys",
        año: 2013,
        genero: "Indie rock"
    },
    {
        titulo: "505",
        artista: "Arctic Monkeys",
        año: 2007,
        genero: "Indie rock"
    },
    {
        titulo: "Take On Me",
        artista: "a-ha",
        año: 1985,
        genero: "Synth-pop"
    },
    {
        titulo: "Enjoy the Silence",
        artista: "Depeche Mode",
        año: 1990,
        genero: "Synth-pop"
    },
    {
        titulo: "Little Wing",
        artista: "Jimi Hendrix",
        año: 1967,
        genero: "Blues rock"
    },
    {
        titulo: "Roundabout",
        artista: "Yes",
        año: 1971,
        genero: "Rock progresivo"
    },
    {
        titulo: "Lateralus",
        artista: "Tool",
        año: 2001,
        genero: "Metal progresivo"
    },
    {
        titulo: "Dream On",
        artista: "Aerosmith",
        año: 1973,
        genero: "Hard rock"
    },
    {
        titulo: "Where Is My Mind?",
        artista: "Pixies",
        año: 1988,
        genero: "Rock alternativo"
    }
];

function musicaAleatoria() {

    const numero = Math.floor(Math.random() * canciones.length);
    const cancion = canciones[numero];

    const etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta-recomendacion";
    etiqueta.textContent = "Canción elegida";

    const titulo = document.createElement("h3");
    titulo.textContent = cancion.titulo;

    const artista = document.createElement("p");
    artista.textContent = "Artista: " + cancion.artista;

    const año = document.createElement("p");
    año.textContent = "Año: " + cancion.año;

    const genero = document.createElement("p");
    genero.textContent = "Género: " + cancion.genero;

    resultadoMusica.replaceChildren();
    resultadoMusica.append(etiqueta, titulo, artista, año, genero);
}

botonMusica.addEventListener("click", musicaAleatoria);
