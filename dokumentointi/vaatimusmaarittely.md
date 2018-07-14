# Vaatimusmäärittely

## Sovelluksen tarkoitus

Sovelluksen avulla käyttäjä pitää kirjaa ja voi optimoida kotitalouden siivoomista ja ylläpitoa. Kaikki eri kotitalouden työt jaetaan sykleihin.

Sovellus pyrkii tuoda "mindful" tapaista ajattelua siivoomiseen. Käyttäjä voi vain vilkausta sovellusta pari sekunttia ja saada hyvän ymmärryksen mitä töitä pitäisi tehdä seuraavaksi, sen sijaan että pitäisi miettiä asiasta.  

Yksi sykli loppuu esimerkiksi kun imuri tai pesukone laitetaan päälle. Syklien synkronointi on ideaali tilanne, sillä koneet voidaan laittaa päälle kun et ole kotona.
Näin ei tarvitse sietää meluhaittoja.

## Käyttäjät

Sovelluksella on ainoastaan yksi käyttäjärooli eli _normaali käyttäjä_. 

## Käyttöliittymäluonnos

Sovellus tehdään graafisella käyttöliittymällä. Electronissa käyttöliittymä logiikka toteutetaan React:lla ja CSS style framework Materialize:lla. 

## Perusversion tarjoama toiminnallisuus

### Ohjelmalla on kaksi päänäkymää

### Lista kaikista töistä

- käyttäjä näkee tämän hetkisen tilanteen kaikista eri kotitalous töistä. Kuinka lähellä ne ovat syklin loppuun. 

- käyttäjä näkee listan kaikista eri kotitalous töistä. 
  - käyttäjä voi mennä tietyn työn sisälle

### Uuden työn luominen ja muuttaminen

- käyttäjä voi luoda uuden työn
  
- kun käyttäjä on tietyn työn sisällä hänellä on seuraavat vaihtoehdot
  - käyttäjä voi päivittää nykyisen syklin tilannetta
  - käyttäjä voi muuttaa syklin luonnollista etenemistä

## Jatkokehitysideoita

- Monta käyttäjää samalle kotitaloudelle, ilman ärsyttävää kirjautumista

- Realiaikainen aika täyttäminen jokaiselle päivälle

- Pitkille sykleille erilainen suorakulmio joka kuvaa kerrallaan viikkoa tai kuukkautta. Muuttuu dynamiisesti normi päiviksi kun viimeisellä viikolla

- Lista muuttuu dynaamisesti että se task joka juuri valmistumassa siirtyy listan ylhäälle. 

- Icon pushaa notifikation kun on se päivä jolloin pitää tehdä työn. 



