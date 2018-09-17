# Kotitaloushallinta

Sovelluksen avulla käyttäjä pitää kirjaa ja voi optimoida kotitalouden siivoomista ja ylläpitoa. Kaikki eri kotitalouden työt jaetaan sykleihin.

Sovellus pyrkii tuoda "mindful" tapaista ajattelua siivoomiseen. Käyttäjä voi vain vilkausta sovellusta pari sekunttia ja saada hyvän ymmärryksen mitä töitä pitäisi tehdä seuraavaksi, sen sijaan että pitäisi miettiä asiasta.

## Kieli

Javascript ja Electron Framework

## Dokumentaatio

#### [Käyttöohje](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/kayttoohje.md)
#### [Vaatimusmäärittely](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/vaatimusmaarittely.md)
#### [Arkkitehtuurikuvaus](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/arkkitehtuuri.md)
#### [Testausdokumentti](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/testaus.md)
#### [Työaikakirjanpito](https://github.com/rescawen/otm-harjoitustyo/blob/master/dokumentointi/tuntikirjanpito.md)

## Releaset

[Viikko 5/6](https://github.com/rescawen/otm-harjoitustyo/releases)

## Komentorivitoiminnot

### Asentaminen

Kloonaa tämä kyseinen repositorio

```
cd Kotitaloushallinta
npm install
```

### Suorittaminen

Tuotanto sovelluksen käynnistäminen komennolla

```
npm run develop
```

### Testaus

Testit suoritetaan komennolla

```
npm run test
```

Testikattavuusraportti luodaan komennolla

```
npm run coverage
```

Kattavuusraporttia voi tarkastella avaamalla selaimella tiedosto _otm-harjoitustyo/Kotitaloushallinta/coverage/lcov-report/index.html_

### Suoritettavan tiedoston generointi

Tiedostot generoidaan komenolla

```
npm run pack:mac
npm run pack:win 
npm run pack:linux
```

generoi hakemistoon _dist_ suoritettavan tiedoston _Kotitaloushallinta Setup 0.0.0_ kyseiselle alustalle

Kaikille yhtää aikaa komenolla

```
npm run pack
```

pitäisi generoida kaikille alustoille paketin, mutta esimerkiksi windows:lla ei pysty koska macOS takia heittää virheilmoituksen.


### Checkstyle

Tiedostoon [.eslintrc](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/.eslintrc) määrittelemät tarkistukset suoritetaan komennolla

```
npm run lint
```
Mahdolliset virheilmoitukset tulostuvat komentoriville.
