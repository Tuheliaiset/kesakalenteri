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
    if (paivatanaan >= new Date("2025-04-19")) {
        document.getElementById("otsikko").innerHTML = "Linnanmäen hupietupäivä 19.05.2025";
        document.getElementById("kuva").src = "kuvat/pexels-silvia-17374-89505 (1).jpg";
        document.getElementById("kappale").innerHTML = "Hanki ranneke edullisempaan hintaan:<br>Isohupi 49,00EUR (normaalihinta 53,00EUR)<br>Pikkuhupi 41,00EUR (normaalihinta 43,00EUR)<br><br>Hupietupäivinä S-ryhmästä saa rannekkeen vielä tätäkin edulliemmin. S-etukortilla Isohupi 47 e pikkuhupi 39 e. S-etuhintaiset liput ovat myynnissä Prismoissa, Sokoksissa ja S‑marketeissa sekä osassa pääkaupunkiseudun Sokos- ja Radisson Blu -hotelleista majoituksen yhteydessä. Rannekkeiden osto ei kerrytä S‑ryhmän Bonusta.​";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 1 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri2() {
    if (paivatanaan >= new Date("2025-04-26")) {
        document.getElementById("otsikko").innerHTML = "Nuorten aikuisten yökahvila 30.05.2025";
        document.getElementById("kuva").src = "kuvat/VK2.jpg";
        document.getElementById("kappale").innerHTML = "Nuorten päihteettömään yökahvilaan ovat tervetulleita kaikki 18–29-vuotiaat nuoret. Yökahvilassa voi hengailla, opiskella, jutella ja tutustua muihin nuoriin. Paikalla on Sirkus Magentan kaksi sirkusohjaajaa, joiden kanssa voi halutessaan kokeilla sirkusvälineitä ja -lajeja turvallisesti. Sirkustilassa on mahdollisuus esimerkiksi ilma-akrobatian, trampoliinin, jongleerauksen, yksipyöräisen ja lattia-akrobatian kokeiluun. Yökahvila järjestetään sirkustilassamme Itäkeskuksessa Helsingissä kerran viikossa perjantaisin klo 20:30-23:30 ";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 2 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }
}
function KesaKalenteri3() {
    if (paivatanaan >= new Date("2025-04-02")) {
        document.getElementById("otsikko").innerHTML = "Opastettu kierros Suomenlinnassa kesä-elokuussa päivittäin klo 12";
        document.getElementById("kuva").src = "kuvat/VK3.jpg";
        document.getElementById("kappale").innerHTML = "Opastetulla kävely­kierroksella kuljetaan historiallisilla paikoilla, ja kuullaan linnoituksen kiehtovasta menneisyydestä ja nykypäivästä. Kierrokset alkavat Suomenlinna-museolta.<br><br>Liput on hyvä ostaa ennakkoon.<br><br>Liput 15e (aikuiset), 5e (lapset 7-17v)";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 3 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri4() {
    if (paivatanaan >= new Date("2025-04-09")) {
        document.getElementById("otsikko").innerHTML = "Helsinki Samba Carnaval kulkue 14.06.2025 klo 15 alkaen ";
        document.getElementById("kuva").src = "kuvat/VK4.jpg";
        document.getElementById("kappale").innerHTML = "Tule seuraamaan Suomen sambakoulujen kulkuetta.<br><br>Reitti: Senaatintori – Unioninkatu – Eteläesplanadi – Mannerheimintie – Aleksanterinkatu<br><br>Helsinki Samba Carnaval huipentuu Stadin kuumimpiin bileisiin, kun Baile do Carnaval valtaa Kulttuuritehdas Korjaamon lauantaina 14. kesäkuuta! Tiedossa on unohtumaton karnevaalitunnelma – sambarytmejä, näyttäviä esityksiä, live-musiikkia ja loistava DJ.<br><br> Liput tikestistä";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 4 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri5() {
    if (paivatanaan >= new Date("2025-04-16")) {
        document.getElementById("otsikko").innerHTML = "Seurasaaren juhannusvalkeat 20.6.2025 klo 17:00 – 21.6.2025 klo 01:00";
        document.getElementById("kuva").src = "kuvat/VK5.jpg";
        document.getElementById("kappale").innerHTML = "Seurasaaressa juhlitaan keskikesää ja tehdään elävää kulttuuriperintöä näkyväksi! Vehreä kansanpuisto ja idyllinen museoalue luovat erinomaiset puitteet viettää juhannusta. Juhannusvalkeilla ihastuttavat värikkäät kansallispuvut, taitavat kansantanssijat ja pelimannit kokkojen roihutessa. (Metsäpalovaroituksen voimassaoloaikana kokkoja ei voida sytyttää).<br><br>Paikka: Seurasaaren ulkomuseo";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 5 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri6() {
    if (paivatanaan >= new Date("2025-04-23")) {
        document.getElementById("otsikko").innerHTML = "Tuska 27.-29.06.2025";
        document.getElementById("kuva").src = "kuvat/VK6.jpg";
        document.getElementById("kappale").innerHTML = "Suvilahdessa järjestettävä Tuska Festival on nykyään Pohjoismaiden suurin metallifestivaali. Tänä vuonna esiintyjinä mm. Lorna Shore, In Flames, Electric Callboy, Powerwolf, Apocalyptica, Nothin More, Orbit Culture, Mokoma";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 6 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri7() {
    if (paivatanaan >= new Date("2025-04-30")) {
        document.getElementById("otsikko").innerHTML = "Kipinä Festival 04.-05.07.2025";
        document.getElementById("kuva").src = "kuvat/VK7.jpg";
        document.getElementById("kappale").innerHTML = "Kipinä Festivalit juhlitaan Helsingissä Oulunkylän urheilupuistossa.<br><br>Esiintyjinä nähdään perjantaina JVG, Earth, Wind & Fire Experience, Abreu, Isac Elliot, Elastinen, Viivi, Ege Zulu, Arttu Wiskari ja Jannika B. Lauantaina vuoronsa saavat Jenni Vartiainen, Gasellit, Mirella, Robin Packalen, Dire Straits Legacy, Kaija Koo, Ani, Karri Koira ja Tuuli.<br><br>Tietokirjailija Emilia Vuorisalmi tuo Kipinä Festivaaleille aivan uudenlaisen tilan, jossa festivaalivieraat saavat kokea uusia fiiliksiä ja löytää sisäisen kipinän. Tapahtumaan tulee myös käyttöön sinkkuasiakkaille suunnattu sinkkuranneke.";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 7 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri8() {
    if (paivatanaan >= new Date("2025-04-07")) {
        document.getElementById("otsikko").innerHTML = "Lonna";
        document.getElementById("kuva").src = "kuvat/VK8.jpg";
        document.getElementById("kappale").innerHTML = "Lonna on pieni, mutta monipuolinen saari Suomenlinnan lähellä. Sinne pääsee näppärästi vesibussilla Kauppatorilta. Lonnassa voi saunoa, hengailla ja nauttia saaren keittiön upeista tarjottavista. Saaressa järjestetään ulkoilmaelokuvailtoja, joogataan, vietetään erilaisia tapahtumia sekä juhlitaan juhannusta.";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 8 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri9() {
    if (paivatanaan >= new Date("2025-04-14")) {
        document.getElementById("otsikko").innerHTML = "Aleksis Kiven kadun kirppis 20.07.2025 ";
        document.getElementById("kuva").src = "kuvat/VK9.jpg";
        document.getElementById("kappale").innerHTML = "Dallapénpuistossa toukokuusta syyskuuhun sunnuntaisin järjestettävä ulkokirppis. Kuka tahansa voi mennä tavaroineen Aleksis kiven kadulle kirppispäivän ajaksi myymään, kunhan vie myymättömät tavarat mukanaan pois ja siivoaa jälkensä. Muistathan siis viedä paitsi roskasi mukanasi, myös myymättömät vaatteet ja muut tavarat.<br><br>Tapahtumasta on muodostunut myös ruokamatka lukuisten kulttuurien makuihin ja keittiöihin. Se onkin kaupungin vilkkain ja eläväisin katuruokatapahtuma kesäisin. Myös satokauden herkkuja, kuten loppukesästä kanttarelleja myydään kojuissa vain puolella Kauppatorin hinnoista.";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 9 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri10() {
    if (paivatanaan >= new Date("2025-04-21")) {
        document.getElementById("otsikko").innerHTML = "Smash into Pieces 24.07.2025 Allas Live K18";
        document.getElementById("kuva").src = "kuvat/VK10.jpg";
        document.getElementById("kappale").innerHTML = "Allas Live tarjoaa kävijöilleen kesän kuumimman keikkasarjan ja unohtumattomia hetkiä musiikin parissa! Ruotsalainen metalliyhtye Smash into Pieces esiintyy Allas Poolilla.";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 10 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri11() {
    if (paivatanaan >= new Date("2025-04-28")) {
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK11.jpg";
        document.getElementById("kappale").innerHTML = "";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 11 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
function KesaKalenteri12() {
    if (paivatanaan >= new Date("2025-04-04")) {
        document.getElementById("otsikko").innerHTML = "Kasarmitorin kesäterassi 12.06.-15.08.2025";
        document.getElementById("kuva").src = "kuvat/vko12.1.jpg";
        document.getElementById("kappale").innerHTML = "Torille on tulossa jopa 1000 asiakaspaikkaa ja 16 ravintolaa. Terassilla on ruoan ja juoman lisäksi luvassa ohjelmaa lähes joka päivä. Torille suunnitellaan ohjelmaa kaikenikäisille- Meet&greet -tapahtumia lapsille ja nuorille, sekä mummodiskoa ja yhteislaulutilaisuuksia varttuneemmille.<br><br>Ravintoloita mukana ovat mm. hienostunut Finnjävel, viinibaari Bricco, mehukkaita höyrytettyjä ja täytettyjä sämpylöitä loihtiva baobao, Kauppatorin mehevistä lihapiirakoista ja muista leivonnaisistaan tunnettu Eromanga, sekä Hampurilaisistaan palkittu ja Herttoniemestä ponnistava kortteliravintola Treffipub.";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 12 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }
}
function KesaKalenteri13() {
    if (paivatanaan >= new Date("2025-04-11")) {
        document.getElementById("otsikko").innerHTML = "";
        document.getElementById("kuva").src = "kuvat/VK13.jpg";
        document.getElementById("kappale").innerHTML = "";
    } else {
        document.getElementById("otsikko").innerHTML = "Vko 13 ei vielä avattavissa";
        document.getElementById("kuva").src = "kuvat/placeholder_image.jpg";
        document.getElementById("kappale").innerHTML = "Tämä luukku ei ole vielä avattavissa. Maltathan mielesi! ";
    }

}
