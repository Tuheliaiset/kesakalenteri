// nappia painettaessa tulostuu ikkuna jossa näkyy tekemisvinkkejä kesälle
// ikkuna ilmestyy vain jos ehdot täyttyvät 
// jokaiselle napille on määritetty millä aikavälillä se on mahdollista avata
// ehtona click toiminnon toteutumiselle on että tämän hetkinen päivämäärä vastaa napille määritettyä aikaväliä
// jos ehto ei täyty, tulostuu lause tyylillä "Malta odottaa vielä hetki ..."
// ehtoon kuuluu myös että jos napin määritetty aika on jo mennyt, se on avattavissa
/* vko 1 = 19.-25.5., vko 2 = 26.5-1.6., vko 3 = 2.-8.6., vko 4 = 9.-15.6., vko 5 = 16.-22.6., vko 6 = 23.-29.6., vko 7 = 30.6.-6.7., vko 8 = 7.-13.7., vko 9 = 14.-20.7., vko 10 = 21.-27.7., vko 11 = 28.7.-3.8., vko 12 = 4.-10.8., vko 13 = 11.-17.8.

HUOM kuukaudet alkavat nollasta esim 0 = tammikuu :D
*/
let paivatanaan = new Date();
console.log(paivatanaan);



function KesaKalenteri1() {
    if (paivatanaan >= new Date(2025-4-2)){
        document.getElementById("otsikko").innerHTML = "Linnanmäen hupietupäivä 19.05.2025";
        document.getElementById("kuva").src = "kuvat/VK1.jpg";
        document.getElementById("kappale").innerHTML = "Hanki ranneke edullisempaan hintaan:<br>Isohupi 49,00EUR (normaalihinta 53,00EUR)<br>Pikkuhupi 41,00EUR (normaalihinta 43,00EUR)<br><br>Hupietupäivinä S-ryhmästä saa rannekkeen vielä tätäkin edulliemmin. S-etukortilla Isohupi 47 e pikkuhupi 39 e. S-etuhintaiset liput ovat myynnissä Prismoissa, Sokoksissa ja S‑marketeissa sekä osassa pääkaupunkiseudun Sokos- ja Radisson Blu -hotelleista majoituksen yhteydessä. Rannekkeiden osto ei kerrytä S‑ryhmän Bonusta.​";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri2() {
    if (paivatanaan >= new Date(2025-4-26)){
        document.getElementById("otsikko").innerHTML = "Nuorten aikuisten yökahvila 30.05.2025";
        document.getElementById("kuva").src = "kuvat/VK2.jpg";
        document.getElementById("kappale").innerHTML = "Nuorten päihteettömään yökahvilaan ovat tervetulleita kaikki 18–29-vuotiaat nuoret. Yökahvilassa voi hengailla, opiskella, jutella ja tutustua muihin nuoriin. Paikalla on Sirkus Magentan kaksi sirkusohjaajaa, joiden kanssa voi halutessaan kokeilla sirkusvälineitä ja -lajeja turvallisesti. Sirkustilassa on mahdollisuus esimerkiksi ilma-akrobatian, trampoliinin, jongleerauksen, yksipyöräisen ja lattia-akrobatian kokeiluun. Yökahvila järjestetään sirkustilassamme Itäkeskuksessa Helsingissä kerran viikossa perjantaisin klo 20:30-23:30 ";
    }else if (paivatanaan < new Date(2025-4-26)){
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }
}
function KesaKalenteri3() {
    if (paivatanaan >= new Date(2025-5-2)){
        document.getElementById("otsikko").innerHTML = "Opastettu kierros Suomenlinnassa kesä-elokuussa päivittäin klo 12";
        document.getElementById("kuva").src = "kuvat/VK3.jpg";
        document.getElementById("kappale").innerHTML = "Opastetulla kävely­kierroksella kuljetaan historiallisilla paikoilla, ja kuullaan linnoituksen kiehtovasta menneisyydestä ja nykypäivästä. Kierrokset alkavat Suomenlinna-museolta.<br><br>Liput on hyvä ostaa ennakkoon.<br><br>Liput 15e (aikuiset), 5e (lapset 7-17v)";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri4() {
    if (paivatanaan >= new Date(2025-5-9)){
        document.getElementById("otsikko").innerHTML = "Helsinki Samba Carnaval kulkue 14.06.2025 Klo 15 alkaen ";
        document.getElementById("kuva").src = "kuvat/VK4.jpg";
        document.getElementById("kappale").innerHTML = "Tule seuraamaan Suomen sambakoulujen kulkuetta.<br><br>Reitti: Senaatintori – Unioninkatu – Eteläesplanadi – Mannerheimintie – Aleksanterinkatu<br><br>Helsinki Samba Carnaval huipentuu Stadin kuumimpiin bileisiin, kun Baile do Carnaval valtaa Kulttuuritehdas Korjaamon lauantaina 14. kesäkuuta! Tiedossa on unohtumaton karnevaalitunnelma – sambarytmejä, näyttäviä esityksiä, live-musiikkia ja loistava DJ.<br><br> Liput tikestistä";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri5() {
    if (paivatanaan >= new Date(2025-5-16)){
        document.getElementById("otsikko").innerHTML = "Seurasaaren juhannusvalkeat 20.6.2025 klo 17:00 – 21.6.2025 klo 01:00";
        document.getElementById("kuva").src = "kuvat/VK5.jpg";
        document.getElementById("kappale").innerHTML = "Seurasaaressa juhlitaan keskikesää ja tehdään elävää kulttuuriperintöä näkyväksi! Vehreä kansanpuisto ja idyllinen museoalue luovat erinomaiset puitteet viettää juhannusta. Juhannusvalkeilla ihastuttavat värikkäät kansallispuvut, taitavat kansantanssijat ja pelimannit kokkojen roihutessa. (Metsäpalovaroituksen voimassaoloaikana kokkoja ei voida sytyttää).<br><br>Paikka: Seurasaaren ulkomuseo";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri6() {
    if (paivatanaan >= new Date(2025-5-23)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK6.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri7() {
    if (paivatanaan >= new Date(2025-5-30)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK7.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri8() {
    if (paivatanaan >= new Date(2025-6-7)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK8.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri9() {
    if (paivatanaan >= new Date(2025-6-14)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK9.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri10() {
    if (paivatanaan >= new Date(2025-6-21)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK10.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri11() {
    if (paivatanaan >= new Date(2025-6-28)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK11.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri12() {
    if (paivatanaan >= new Date(2025-7-4)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK12.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri13() {
    if (paivatanaan >= new Date(2025-7-11)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK13.jpg";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}