
package kotitaloushallinta.dao;

import java.util.List;
import kotitaloushallinta.domain.Task;

import java.util.HashMap;


public class HashMapTaskDao implements TaskDao {
    
    public HashMap<Integer, Task> database = new HashMap<>();
    
    
    
    private void save(int id, Task task) {
        
        database.put(id, task);
        
    }
    
    private int generateId() {
        return database.size() + 1;
    }

    @Override
    public Task create(Task task) {
        int newId = generateId();
        save(newId, task);
        return task; 
    }

    @Override
    public HashMap<Integer, Task> getAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
    
    

    
    
    
    
}
