/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kotitaloushallinta.domain;

/**
 *
 * @author wenlei
 */
public class Task {
    
    private String name;
    
    private int cycleLength;
    
    private int cycleNow = 0;
    
    public Task(String name, int cycleLength) {
        this.name = name;
        this.cycleLength = cycleLength;
    }
    
    public void startCycle() {
        
    }
    
    public String getName() {
        return this.name;
    }
    
    public int getCycleLength() {
        return this.cycleLength;
    }
    
    
    
}
