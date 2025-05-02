// nappia painettaessa tulostuu ikkuna jossa näkyy tekemisvinkkejä kesälle
// ikkuna ilmestyy vain jos ehdot täyttyvät 
// jokaiselle napille on määritetty millä aikavälillä se on mahdollista avata
// ehtona click toiminnon toteutumiselle on että tämän hetkinen päivämäärä vastaa napille määritettyä aikaväliä
// jos ehto ei täyty, tulostuu lause tyylillä "Malta odottaa vielä hetki ..."
// ehtoon kuuluu myös että jos napin määritetty aika on jo mennyt, se on avattavissa
/* vko 1 = 19.-25.5., vko 2 = 26.5-1.6., vko 3 = 2.-8.6., vko 4 = 9.-15.6., vko 5 = 16.-22.6., vko 6 = 23.-29.6., vko 7 = 30.6.-6.7., vko 8 = 7.-13.7., vko 9 = 14.-20.7., vko 10 = 21.-27.7., vko 11 = 28.7.-3.8., vko 12 = 4.-10.8., vko 13 = 11.-17.8.*/
let paivatanaan = new Date();
function KesaKalenteri1() {
    if (paivatanaan >= new Date(2025, 5, 19)){
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").innerHTML = "";
        document.getElementById("kappale").innerHTML = "";
    }else {
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}