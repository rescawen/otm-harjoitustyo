package kotitaloushallinta;

import kotitaloushallinta.ui.EdesTakaisinSovellus;
import static javafx.application.Application.launch;
import kotitaloushallinta.domain.Task;
import kotitaloushallinta.ui.Treetest;


public class Main {
    
    public static void main(String[] args) {
        
        Task test = new Task("Washing Duvet and BedSheets", 7);
        
        test.startCycle();
        
        //launch(EdesTakaisinSovellus.class);
        launch(Treetest.class);
    }
}
