# Arkkitehtuurikuvaus

## Rakenne

Ohjelman rakenne on perjatteessa single page web applikaatio joka on pakattu electronin Main Process:in sisälle:

![Rakennekuva](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/kuvat/Kotitaloushallinta_arkkitehtuuri_rakenne_kuva.png)

_Index Page, React Components_ sisältää Materializecss:llä toteutetun käyttöliittymän _Actions, Reducers, React Containers_ sovelluslogiikan ja _Store, Local Storage_ tietojen pysyväistallennuksesta vastaavan koodin.

## Käyttöliittymä

Käyttöliittymä sisältää kolme erillistä näkymää
- HomePage
  -> Home
    -> Task
      -> Day
- AddTaskPage
  -> AddTask
- EditTaskPage
  -> Edit Task
  
jokainen näistä on toteutettu omana [Container](https://redux.js.org/basics/usagewithreact):ina. Esimerkiksi Homepage 
on toteutettu kolmella eri [Component](https://reactjs.org/docs/react-component.html):illa.

Käyttöliittymä on eristetty sovelluksen muista osista juuri Container:in avulla. Boilerplate oli oletuksena suunnitellut
tämän näin. 

Kun sovelluksen tilanne muuttuu, eli uusi Task luodaan tai muokataan, state päivittyy monella tasolla kunnes
renderoidaan uusi näkymä. Tämä tulee selitettyä tarkemmin alemassa kohdassa.

## Sovelluslogiikka

Sovelluksen loogisen datamallin muodostavat aiemassa käyttöliittymä kohdassa mainitut Container:it [HomePage](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/containers/HomePage.js), [AddTaskPage](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/containers/AddTaskPage.js), [EditTaskPage](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/containers/EditTaskPage.js) ja Component:it [Home](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/components/Home.js), [Task](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/components/Task.js), [Day](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/components/Day.js), [AddTask](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/components/AddTask.js), [EditTask](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/app/components/EditTask.js).

_HomePage_ on oletus route ja sieltä pääsee joko _AddTaskPage_ tai _EditTaskPage_

Luokka/pakkauskaavio: 

![Sovelluslogiikkakuva](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/kuvat/Kotitaloushallinta_arkkitehtuuri_sovellus_logiikka_kuva.png)

## Tietojen pysyväistallennus


