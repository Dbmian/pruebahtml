
const botonJuego = document.getElementById("btn-juego");
const resultadoJuego = document.getElementById("resultado-recomendacion");

const juegos = [
    {
        titulo: "Red Dead Redemption 2",
        año: 2018,
        genero: "Acción / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "The Witcher 3: Wild Hunt",
        año: 2015,
        genero: "RPG / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "Minecraft",
        año: 2011,
        genero: "Supervivencia / Sandbox",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "Dark Souls III",
        año: 2016,
        genero: "RPG / Soulslike",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Elden Ring",
        año: 2022,
        genero: "RPG / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Resident Evil 4",
        año: 2005,
        genero: "Terror / Acción",
        plataforma: "PC, PlayStation, Xbox, Nintendo"
    },
    {
        titulo: "Silent Hill 2",
        año: 2001,
        genero: "Terror psicológico",
        plataforma: "PC, PlayStation"
    },
    {
        titulo: "Half-Life 2",
        año: 2004,
        genero: "FPS / Ciencia ficción",
        plataforma: "PC, Xbox"
    },
    {
        titulo: "Portal 2",
        año: 2011,
        genero: "Puzles / Aventura",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "The Last of Us",
        año: 2013,
        genero: "Acción / Aventura",
        plataforma: "PlayStation, PC"
    },
    {
        titulo: "Grand Theft Auto V",
        año: 2013,
        genero: "Acción / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Cyberpunk 2077",
        año: 2020,
        genero: "RPG / Ciencia ficción",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "God of War",
        año: 2018,
        genero: "Acción / Aventura",
        plataforma: "PlayStation, PC"
    },
    {
        titulo: "Baldur's Gate 3",
        año: 2023,
        genero: "RPG / Estrategia",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Hollow Knight",
        año: 2017,
        genero: "Metroidvania",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "The Elder Scrolls V: Skyrim",
        año: 2011,
        genero: "RPG / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "DOOM Eternal",
        año: 2020,
        genero: "FPS / Acción",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "BioShock",
        año: 2007,
        genero: "FPS / Suspenso",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Metal Gear Solid V: The Phantom Pain",
        año: 2015,
        genero: "Acción / Sigilo",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Stardew Valley",
        año: 2016,
        genero: "Simulación / RPG",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
        titulo: "The Legend of Zelda: Breath of the Wild",
        año: 2017,
        genero: "Aventura / Mundo abierto",
        plataforma: "Nintendo Switch, Wii U"
    },
    {
        titulo: "Sekiro: Shadows Die Twice",
        año: 2019,
        genero: "Acción / Soulslike",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Fallout: New Vegas",
        año: 2010,
        genero: "RPG / Mundo abierto",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "The Stanley Parable",
        año: 2013,
        genero: "Aventura / Narrativa",
        plataforma: "PC, PlayStation, Xbox"
    },
    {
        titulo: "Undertale",
        año: 2015,
        genero: "RPG / Aventura",
        plataforma: "PC, PlayStation, Xbox, Nintendo Switch"
    }
];

function juegoAleatorio() {

    const numero = Math.floor(Math.random() * juegos.length);
    const juego = juegos[numero];

    const etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta-recomendacion";
    etiqueta.textContent = "Juego elegido";

    const titulo = document.createElement("h3");
    titulo.textContent = juego.titulo;

    const año = document.createElement("p");
    año.textContent = "Año: " + juego.año;

    const genero = document.createElement("p");
    genero.textContent = "Género: " + juego.genero;

    const plataforma = document.createElement("p");
    plataforma.textContent = "Plataformas: " + juego.plataforma;

    resultadoJuego.replaceChildren();
    resultadoJuego.append(etiqueta, titulo, año, genero, plataforma);
}

botonJuego.addEventListener("click", juegoAleatorio);
