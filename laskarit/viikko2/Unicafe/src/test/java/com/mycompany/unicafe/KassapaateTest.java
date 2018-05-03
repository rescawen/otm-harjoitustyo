/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.unicafe;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author wenlei
 */
public class KassapaateTest {
    
    Kassapaate paate;
    
    @Before
    public void setUp() {
        paate = new Kassapaate();
    }
    
    @Test
    public void luotuPaateOlemassa() {
        assertTrue(paate!=null);      
    }
    
    @Test
    public void rahaOlemassa() {
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    @Test
    public void edullisiaAlussaNolla() {
        assertEquals(0, paate.edullisiaLounaitaMyyty());
    }
    
    @Test
    public void maukkaitaAlussaNolla() {
        assertEquals(0, paate.maukkaitaLounaitaMyyty());
    }
    
    @Test
    public void edullisenVoiOstaaTasaRahalla() {
        assertEquals(0, paate.syoEdullisesti(240));
        assertEquals(1, paate.edullisiaLounaitaMyyty());
        assertEquals(100240, paate.kassassaRahaa());
    }
    
    @Test
    public void edullisenVoiOstaaIsomallaRahalla() {
        assertEquals(10, paate.syoEdullisesti(250));
        assertEquals(1, paate.edullisiaLounaitaMyyty());
        assertEquals(100240, paate.kassassaRahaa());
    }
    
    @Test
    public void edullisenEiVoiOstaaPienemallaRahalla() {
        assertEquals(230, paate.syoEdullisesti(230));
        assertEquals(0, paate.edullisiaLounaitaMyyty());
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    @Test
    public void edullisenVoiOstaaJosKortillaOnRiittavastiRahaa() {
        Maksukortti kortti = new Maksukortti(240);        
        assertTrue(paate.syoEdullisesti(kortti)); 
        assertEquals(1, paate.edullisiaLounaitaMyyty());
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    @Test
    public void edullisenEiVoiOstaaJosKortillaEiOleRiittavastiRahaa() {
        Maksukortti kortti = new Maksukortti(230);        
        assertFalse(paate.syoEdullisesti(kortti)); 
        assertEquals("saldo: 2.30", kortti.toString());
        assertEquals(0, paate.edullisiaLounaitaMyyty());
    }
    
    @Test
    public void maukkaanVoiOstaaTasaRahalla() {
        assertEquals(0, paate.syoMaukkaasti(400));
        assertEquals(1, paate.maukkaitaLounaitaMyyty());
        assertEquals(100400, paate.kassassaRahaa());
    }
    
    @Test
    public void maukkaanVoiOstaaIsomallaRahalla() {
        assertEquals(10, paate.syoMaukkaasti(410));
        assertEquals(1, paate.maukkaitaLounaitaMyyty());
        assertEquals(100400, paate.kassassaRahaa());
    }
    
    @Test
    public void maukkaanEiVoiOstaaPienemallaRahalla() {
        assertEquals(390, paate.syoMaukkaasti(390));
        assertEquals(0, paate.maukkaitaLounaitaMyyty());
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    @Test
    public void maukkaanVoiOstaaJosKortillaOnRiittavastiRahaa() {
        Maksukortti kortti = new Maksukortti(400);        
        assertTrue(paate.syoMaukkaasti(kortti)); 
        assertEquals(1, paate.maukkaitaLounaitaMyyty());
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    @Test
    public void maukkaanEiVoiOstaaJosKortillaEiOleRiittavastiRahaa() {
        Maksukortti kortti = new Maksukortti(390);        
        assertFalse(paate.syoMaukkaasti(kortti)); 
        assertEquals("saldo: 3.90", kortti.toString());
        assertEquals(0, paate.maukkaitaLounaitaMyyty());
    }
    
    @Test
    public void kortilleVoiLadataRahaaVainJosMaaraOnIsompiKuin0() {
        Maksukortti kortti = new Maksukortti(0);
        paate.lataaRahaaKortille(kortti, 1000);
        assertEquals("saldo: 10.0", kortti.toString());
        assertEquals(101000, paate.kassassaRahaa());
    }
    
    @Test
    public void kortilleEiVoiLadataRahaaJosMaaraOnPienempiKuin0() {
        Maksukortti kortti = new Maksukortti(0);
        paate.lataaRahaaKortille(kortti, -1);
        assertEquals("saldo: 0.0", kortti.toString());
        assertEquals(100000, paate.kassassaRahaa());
    }
    
    
    

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}
