// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const ospitiFelini = [
    {
        nome: "Baghera",
        eta: 18,
        colore: "#FFFFFF",
        sesso: "f"
    },

    {
        nome: "Muzzi",
        eta: 12,
        colore: "#332F2C",
        sesso: "f"
    },

    {
        nome: "Wimbledon",
        eta: 16,
        colore: "#641804",
        sesso: "m"
    },

    {
        nome: "Stregatto",
        eta: 114,
        colore: "#D360B3",
        sesso: "m"
    },

    {
        nome: "Garfield",
        eta: 45,
        colore: "#4D438B",
        sesso: "m"
    },

    {
        nome: "Chimney-sweep",
        eta: 6,
        colore: "#505457",
        sesso: "m"
    },

    {
        nome: "Azrael",
        eta: 0,
        colore: "#DA6E29",
        sesso: "f"
    },

    {
        nome: "Birba",
        eta: 3,
        colore: "#D4BEA9",
        sesso: "f"
    }
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// il colore va trasformato in un'icon colorata

ospitiFelini.forEach((gatto, i) => {
    document.getElementById("guests-list").innerHTML += `
    ${i+1}) ${gatto.nome}, colore: <i class="fas fa-cat" style='color:${gatto.colore}'></i>; </br>`
});

// Milestone 2 
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

const fem = [];
const mas = [];

let gattoVecchio = ospitiFelini[0];
ospitiFelini.forEach(gatto => {
    if(gatto.eta > gattoVecchio.eta){
        return gattoVecchio = gatto;
    }
});
// console.log(gattoVecchio);

const rosa = "#E08DAF";
const azzurro = "#15255F";

const catsRibbon = ospitiFelini.map(gatto =>{
    let colRibbon = (gatto.sesso == "f") ? rosa : azzurro;
    // console.log("gatto.eta, ", gatto.eta);
    // console.log("gattoVecchio.eta, ", gattoVecchio.eta);
    let opacity = (gatto.eta / gattoVecchio.eta + 0.57).toFixed(1);
    // console.log(opacity);
    const{nome, eta, colore, sesso} = gatto;
    
    return {nome, eta, colore, sesso, ribbon: {colRibbon, opacity}};
});

// console.log(catsRibbon);
catsRibbon.forEach((gatto, i) => {
    if(gatto.sesso == "f"){ 
        fem.push(gatto); 
        document.getElementById("femmine").innerHTML += `
        ${i+1}) ${gatto.nome} <i class="fas fa-cat" style="color:${gatto.colore}"></i>; <i class="fas fa-ribbon" style = "color:${gatto.ribbon.colRibbon}; opacity:${gatto.ribbon.opacity};"></i>; </br>`;
    }else {
        mas.push(gatto);
        document.getElementById("maschi").innerHTML += `
        ${i+1}) ${gatto.nome} <i class="fas fa-cat" style="color:${gatto.colore}"></i>; <i class="fas fa-ribbon" style= "color:${gatto.ribbon.colRibbon}; opacity:${gatto.ribbon.opacity};"></i>; </br>`;
    }
    return fem, mas;
});

const catsFemMas = [...fem,...mas];


catsFemMas.forEach((gatto, i)=> {
    document.getElementById("tutti").innerHTML += `${i+1}) ${gatto.nome}  <i class="fas fa-cat" style="color:${gatto.colore}"></i>; <i class="fas fa-ribbon" style= "color:${gatto.ribbon.colRibbon}; opacity:${gatto.ribbon.opacity};"></i>; </br>`
});


