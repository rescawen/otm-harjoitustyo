package kotitaloushallinta.ui;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;
import javafx.scene.layout.StackPane;

public class EdesTakaisinSovellus extends Application {

    @Override
    public void start(Stage window) {

        Button status = new Button();
        status.setText("Status");
//        Button manage = new Button();
//        status.setText("Manage Cycles");
        Button back = new Button();
        back.setText("Back");
        
        StackPane root = new StackPane();
        root.getChildren().add(status);
//        root.getChildren().add(manage);
        
        Scene home = new Scene(root, 300 , 250);
        Scene statusview = new Scene(back, 300 , 250);

        status.setOnAction((event) -> {
            window.setScene(statusview);
        });

        back.setOnAction((event) -> {
            window.setScene(home);
        });
        
        window.setTitle("Kotitaloushallinta");
        window.setScene(home);
        window.show();
    }

    
}