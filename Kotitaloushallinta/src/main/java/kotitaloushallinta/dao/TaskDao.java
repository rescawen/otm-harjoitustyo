/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kotitaloushallinta.dao;

import java.util.HashMap;
import java.util.List;
import kotitaloushallinta.domain.Task;

/**
 *
 * @author wenlei
 */
public interface TaskDao {
    
    Task create (Task task);
    
    HashMap<Integer, Task> getAll();
    
    
    
}
