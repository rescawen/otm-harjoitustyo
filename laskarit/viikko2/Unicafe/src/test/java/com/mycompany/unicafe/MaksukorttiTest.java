package com.mycompany.unicafe;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class MaksukorttiTest {

    Maksukortti kortti;

    @Before
    public void setUp() {
        kortti = new Maksukortti(1000);
    }

    @Test
    public void luotuKorttiOlemassa() {
        assertTrue(kortti!=null);      
    }
    @Test
    public void saldoOlemassa() {
        kortti.saldo();
        assertEquals("saldo: 10.0", kortti.toString());
    }
    @Test
    public void konstruktoriAsettaaSaldonOikein() {
        System.out.println(kortti.toString());
        assertEquals("saldo: 10.0", kortti.toString());
    }
    @Test
    public void kortilleVoiLadataRahaa() {
        kortti.lataaRahaa(2500);
        assertEquals("saldo: 35.0", kortti.toString());
    }
    @Test
    public void kortiltaVoiOttaaRahaa() {
        kortti.otaRahaa(500);
        assertEquals("saldo: 5.0", kortti.toString());
        
    }
    @Test
    public void kortiltaEiVoiOttaaLiikaaRahaa() {
        kortti.otaRahaa(1500);
        assertEquals("saldo: 10.0", kortti.toString());
        
    }
}
