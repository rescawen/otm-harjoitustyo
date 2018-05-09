/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kotitaloushallinta.domain;

import java.util.Timer;
import java.util.TimerTask;

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

   
    
    class CycleIncrease extends TimerTask {

    @Override
    public void run() {
        cycleNow++;
        
        System.out.println(cycleNow);
        
        if (cycleNow == cycleLength) {
            cycleNow = 0;
        }
    }
    
}
    
    public void startCycle() {
        
        Timer timer = new Timer();
        timer.schedule(new CycleIncrease(), 0, 1000); // eventually 1000 * 60 * 60 aka in hours
        
        
    }
    
    public String getName() {
        return this.name;
    }
    
    public int getCycleLength() {
        return this.cycleLength;
    }
    
    

}




