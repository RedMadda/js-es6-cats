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
        eta: 116,
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
        eta: 2,
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

console.log(ospitiFelini);

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// il colore va trasformato in un'icon colorata

ospitiFelini.forEach((gatto, i)=>{
    document.getElementById("guests-list").innerHTML += `Ospite ${i+1}: nome ${gatto.nome}, colore: <i class="fas fa-cat" style='color:${gatto.colore}'></i>; </br>`
});

// Milestone 2 
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

// prendo gatti maschi

const maschi = ospitiFelini.filter(gatto=>{
    if(gatto.sesso == "m"){
        return true;
    }
    return false;
});

// console.log(maschi);

// li metto in ordine dal più giovane al più vecchio

maschi.sort((a, b) => (a.eta > b.eta) ? 1 : -1);

// console.log("eta: ", maschi);

// li stampo


let aFio = 1;

let colFiocMasc;
maschi.forEach((gatto, i)=>{
    
    aFio += 2;
    colFiocMasc = "rgba(0,0,255," + aFio / 10 + ")";
    // console.log(colFiocMasc);
    document.getElementById("maschi").innerHTML += i+1 + ") " + gatto.nome + ": <i class='fas fa-ribbon' style='color:" + colFiocMasc + "'></i>; </br>";
    
});

// idem per femmine:

const femmine = ospitiFelini.filter((gatto) =>{
    if(gatto.sesso == "f"){
        return true;
    }
    return false;
});

// console.log(femmine);

femmine.sort((a,b) => (a.eta > b.eta) ? 1 : -1);

let colFiocFem;
    
aFio = 1; 

femmine.forEach((gatta, i) => {
console.log(aFio);
    aFio += 2;
    colFiocFem = "rgba(255,13,116," + aFio / 10 + ");";
    console.log(colFiocFem);
    document.getElementById("femmine").innerHTML += `
    ${i+1}) ${gatta.nome} <i class='fas fa-ribbon' style='color:${colFiocFem}'></i>; </br>
    `
});



















// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
