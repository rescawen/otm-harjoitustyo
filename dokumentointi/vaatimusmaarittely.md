# Vaatimusmäärittely

## Sovelluksen tarkoitus

Sovelluksen avulla käyttäjä pitää kirjaa ja voi optimoida kotitalouden siivoomista ja ylläpitoa. Kaikki eri kotitalouden työt jaetaan sykleihin.
Yksi sykli loppuu esimerkiksi kun imuri tai pesukone laitetaan päälle. Syklien synkronointi on ideaali tilanne, sillä koneet voidaan laittaa päälle kun et ole kotona.
Näin ei tarvitse kestää meluhaittoja.

## Käyttäjät

Sovelluksella on ainoastaan yksi käyttäjärooli eli _normaali käyttäjä_. 

## Käyttöliittymäluonnos

Sovellus tehdään komentoliittymällä. 

## Perusversion tarjoama toiminnallisuus

### Status

- käyttäjä voi luoda järjestelmään käyttäjätunnuksen
  - käyttäjätunnuksen täytyy olla uniikki ja pituudeltaan vähintään 3 merkkiä

- käyttäjä voi kirjautua järjestelmään
  - kirjautuminen onnistuu syötettäessä olemassaoleva käyttäjätunnus kirjautumislomakkeelle
  - jos käyttäjää ei olemassa, ilmoittaa järjestelmä tästä

### Manage Cycles

- käyttäjä näkee omat tekemättömät työt eli _todot_

- käyttäjä voi luoda uuden todon
  - luou todo näkyy ainoastaan sen luoneelle käyttäjälle

- käyttäjä voi merkitä todon tehdyksi, jolloin todo häviää listalta

- käyttäjä voi kirjautua ulos järjestelmästä

## Jatkokehitysideoita

20-30 vuoden päästä mennään Applelle tai Xiaomille tekemään älytaloja. Tässä on perusfilosofia miten älytalon tulisi funktioida.
