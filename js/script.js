// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const catHotel = [
    {
        nome: "Baghera",
        eta: 16,
        colore: "#030303",
        sesso: "f"
    },

    {
        nome: "Muzzi",
        eta: 14,
        colore: "#464646" ,
        sesso: "f"
    },

    {
        nome: "Wimbledon",
        eta: 18,
        colore: "#8E3921",
        sesso: "m"
    },

    {
        nome: "Ares",
        eta: 12,
        colore: "#4E4023",
        sesso: "m"
    },

    {
        nome: "Gobi",
        eta: 20,
        colore: "#60362F",
        sesso: "m"
    }
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

// catHotel.forEach(element => console.log(element));

catHotel.forEach((element, index) => {
    document.getElementById("print1").innerHTML +=
    `</br> ${index + 1}) ${element.nome} - colore: <i class="fas fa-cat" style="color:${element.colore}"></i>; </br>
    `;
});

// // Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso
// const maschi = [];
// const femmine = [];

// // e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

// let coloreFemmine = "#B10005";
// let coloreMaschio = "#002969";
// // creo un nuovo array con elementi di prima, ma aggiungo il fiocco
// const plusFiocco = catHotel.map((element) => {
//     let nome = element.nome;
//     let eta = element.eta;
//     let colore = element.colore;
//     let sesso = element.sesso;
//     let coloreFiocco = "#B10005";

//     // cambio colore

//     if (element.sesso == "m"){
//         coloreFiocco = "#002969";
//     }
    
//     return {
//         nome,
//         eta,
//         colore,
//         sesso,
//         fiocco : {
//             color : coloreFiocco,
//             opacity: element.eta / 20
//         }
//     }
// });

// const maschi = plusFiocco.filter((element) => {
//  return element.gender == "m";
// });

// maschi.forEach((element) => {
//     document.getElementById("print2").innerHTML +=
//     ` ${element.name} <i class="fas fa-cat" style="color:$      {element.colore}"></i>;<i class="fas fa-ribbon" style="color:${element.fiocco.color}; opacity:${element.fiocco.opacity}"></i>;
//     `
   
// });
