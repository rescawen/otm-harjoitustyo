package kotitaloushallinta.domain;

import kotitaloushallinta.dao.HashMapTaskDao;
import kotitaloushallinta.dao.TaskDao;


public class TaskService {
    
    private TaskDao taskdao;
    
    public TaskService(TaskDao taskdao) {
        
        this.taskdao = taskdao;
        
    }
    
    
    public boolean createTask(String name, int cycleLength) {
        Task task = new Task(name, cycleLength);
        try {   
            taskdao.create(task);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }
    
    
}
