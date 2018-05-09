/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kotitaloushallinta.ui;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TreeItem;
import javafx.scene.control.TreeView;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

/**
 *
 * @author wenlei
 */
public class Treetest extends Application {
    
    Stage window;
    TreeView<String> tree;
    
    @Override
    public void start(Stage primaryStage) {
        
        window = primaryStage;
        window.setTitle("treetest");
        
        TreeItem<String> root, status, manageCycles;
        
        //Root
        root = new TreeItem<>();
        root.setExpanded(true);
        
        //status
        
        status = makeBranch("Status", root);
        makeBranch("Washing laundry", status);
        makeBranch("Washing dishes", status);
        makeBranch("Vacuuming floor", status);
        
        manageCycles = makeBranch("Manage Cycles", root);
        makeBranch("Washing laundry", manageCycles);
        
        //Create tree
        
        tree = new TreeView<>(root);
        tree.setShowRoot(false);
        
        
        // layout
        StackPane layout = new StackPane();
        layout.getChildren().add(tree);
        Scene scene = new Scene(layout, 300, 250);
        window.setScene(scene);
        window.show();
    }
    
    public TreeItem<String> makeBranch(String title, TreeItem<String> parent) {
        TreeItem<String> item = new TreeItem<>(title);
        item.setExpanded(true);
        parent.getChildren().add(item);
        return item;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
