const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const h2 = document.getElementsByTagName('h2');
const h2x = document.querySelectorAll('h2');


function h2R1(){
    r1 = h2[0].innerText = rand(1,6);
    r2 = h2[1].innerText = rand(1,6);
    r1 === r2 ? h2x.forEach(changeColor): h2x.forEach(changeColorNext);
}
function changeColor(element) {
    element.style.color = "red";
}
function changeColorNext(element) {
    element.style.color = "black";
}
/** 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti.*/
    let skaiciai = [];
/**  Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle.*/
    skaiciai.push(rand(1,10));
    console.log(skaiciai);
/** <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. */
    const h3 = document.getElementsByTagName('h3');
          h3[0].innerText = skaiciai;
        
/** 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.*/
    const ul = document.getElementById('ul');
    /** JS pagalba perskaitykite masyvą africa. */

/**
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
 */
for (const animals of africa) {
    if(animals != '') {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(animals));
        ul.appendChild(li);
    }
}
/**
4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
Pasirinkite patys sau patogiausius metodus tai atlikti.
 */

function calcTotal() {
let fnum = document.getElementById('fnum').value;
let snum = document.getElementById('snum').value;

if(action === 'plus') {
    let total = Number(fnum) + Number(snum);
}
    document.getElementById('answer').innerText = total;
}
/**

5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
 */