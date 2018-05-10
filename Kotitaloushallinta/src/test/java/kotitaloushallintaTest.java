import kotitaloushallinta.domain.Task;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;


public class kotitaloushallintaTest {

    Task task;

    @Before
    public void setUp() {
        task = new Task("Washing Bedsheets", 7);
    }

    @Test
    public void createdTaskExists() {
        assertTrue(task != null);
    }

    @Test
    public void nameExists() {
        assertEquals("Washing Bedsheets", task.getName());
    }
    
    @Test
    public void cycleStarted() {
        
        assertTrue(task.startCycle()); 
    }

    @Test
    public void terminateCycle() {
        
        task.startCycle();
        
        assertFalse(task.endCycle()); 
        
        
    }
    
    
    

}
