package org.example;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.text.Text;
import javafx.stage.Stage;



public class DialogPageController {

 @FXML
 static Button save;
 @FXML
 public TextField prename;
 @FXML
 public TextField name;
 @FXML
 public Text save_bool;
 @FXML
 Button cancel;

 @FXML
 private void saving_action(){
  MainPageController.dialog(prename.getText(), name.getText());
  save_bool.setText("✓");
  terminateStage();
 }

 @FXML
 public void terminateStage() {
  Stage stage = (Stage) cancel.getScene().getWindow();
  stage.close();
 }
}
