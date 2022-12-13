//object
let team = [
    {
        nome: "Wayne Barnett",
        cognome: "Barnett",
        role: "Founder & CEO",
        image:"wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        role: "Chief Editor",
        image:"angela-caroll-chief-editor.jpg",

    },
    {
        nome: "Walter",
        cognome: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },

    {    
        nome:"Angela" ,
        cognome:"Lopez" ,
        role: "Social Media Manager",
        image:"angela-lopez-social-media-manager.jpg",

    },
    
    {    
        nome:"Scott " ,
        cognome:"Estrada" ,
        role: "Developer",
        image:"scott-estrada-developer.jpg",

    },
    
    {    
        nome:"Barbara" ,
        cognome:"Ramos" ,
        role: "Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg",

    }
]

// ---------- stampa in console---------------------
for(let i = 0; i<team.length; i++){
    let teams = team[i];
    console.log(teams)
}

//-----------------stampa su dom--------------------


let container = document.getElementById('container')
let member
let div
let teams


function newDiv(){
    div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<p>${teams.nome} <br> ${teams.role}</p> <img src="./img/${teams.image}">` ;
    return div;
}

for(let i = 0; i<team.length; i++){
    teams = team[i];
    newDiv(teams);
    container.appendChild(div);
}