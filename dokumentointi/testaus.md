# Testausdokumentti

Ohjelmaa on testattu yksikkötestein Jest:llä [actions](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/test/actions/home.spec.js) ja [reducers](https://github.com/rescawen/otm-harjoitustyo/blob/master/Kotitaloushallinta/test/reducers/home.spec.js) kautta. 

Ohjelmassa ei ole tehty integraatio tai järjestelmätason testejä koska boilerplate:n struktuuria ei tarvittu muokata yhtään. Nämä testit jotka tehtiin oli boilerplate:n oletuksena suositeltuja testejä. 

## Testauskattavuus

Käyttöliittymäkerrosta lukuunottamatta sovelluksen testauksen rivikattavuus on 50%


## Sovellukseen jääneet laatuongelmat

Rivikattavuus ei toimi täydellisesti. Esimerkiksi actions kansioon kuuluvat testit eivät tule ollenkaan kattavuutteen mukaan. Testien kanssa oli ylipäätänsä tuskallista tämän projektin koska Jest ei ollut alkuperäinen suositeltu tapa tehdä asia. 

