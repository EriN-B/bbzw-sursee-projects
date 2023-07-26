package org.example;

import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Dialog;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.StackPane;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.stage.Window;

import java.util.ArrayList;
import java.util.List;

public class MainPageController {
    @FXML
    Button back_1;
    @FXML
    Button back_2;
    @FXML
    Button forward_1;
    @FXML
    Button forward_2;
    @FXML
    Button add;
    @FXML
    Button remove;
    @FXML
    Button discard;
    @FXML
    Button safe;
    @FXML
    TextField pin;
    @FXML
    TextField name;
    @FXML
    TextField position;
    @FXML
    TextField prename;

    public static List<Person> Personen = new ArrayList<>();
    public static int m_Position = 0;
    public static int m_lastPosition = 0;
    public static int Pnr = 1;

    public void initialize(){
        for (int i = 1; i <= 3; i++){
            Person p = new Person();
            Pnr++;
            p.setM_PersNr(i);
            p.setM_Name("Mitarbeiter "+i);
            Personen.add(p);
            System.out.println(m_lastPosition++);
        }
        m_Position = 1; //Das erste Personenobjekt soll visualisiert werden
        FillForm();
    }

    private void FillForm(){
        Person p = Personen.get(m_Position - 1);
        pin.setText(String.valueOf(p.getM_PersNr()));
        name.setText(p.getM_Name());
        prename.setText(p.getM_Vorname());
        position.setText(String.valueOf(m_Position)+"/"+String.valueOf(m_lastPosition));
    }

    public void btn_click_add() throws Exception {
        App.startDialog(new Stage());
   }
    @FXML
    private void OnFirst() { //back_2
        m_Position = 1;
        Person p = Personen.get(m_Position-1);
        pin.setText(String.valueOf(p.getM_PersNr()));
        name.setText(p.getM_Name());
        prename.setText(p.getM_Vorname());
        position.setText(String.valueOf(1)+"/"+String.valueOf(m_lastPosition));
    }
    @FXML
    private void OnPrevious() {//back_1
        if(m_Position > 1) {
            m_Position--;
            System.out.println(m_Position);
            Person p = Personen.get(m_Position - 1);
            pin.setText(String.valueOf(p.getM_PersNr()));
            name.setText(p.getM_Name());
            prename.setText(p.getM_Vorname());
            position.setText(String.valueOf(m_Position) + "/" + String.valueOf(m_lastPosition));
        }
    }
    @FXML
    private void OnNext() {//forward_1
        if(m_Position < m_lastPosition) {
            m_Position++;
            System.out.println(m_Position);
            Person p = Personen.get(m_Position - 1);
            pin.setText(String.valueOf(p.getM_PersNr()));
            name.setText(p.getM_Name());
            prename.setText(p.getM_Vorname());
            position.setText(String.valueOf(m_Position) + "/" + String.valueOf(m_lastPosition));
        }
    }
    @FXML
    private void OnLast() {//forward_2
        m_Position = m_lastPosition;
        Person p = Personen.get(m_lastPosition-1);
        pin.setText(String.valueOf(p.getM_PersNr()));
        name.setText(p.getM_Name());
        prename.setText(p.getM_Vorname());
        position.setText(String.valueOf(m_lastPosition)+"/"+String.valueOf(m_lastPosition));
    }
    @FXML
    private void discard_action(){
        Person p = Personen.get(m_Position-1);
        pin.setText(String.valueOf(p.getM_PersNr()));
        name.setText(p.getM_Name());
        prename.setText(p.getM_Vorname());
        position.setText(String.valueOf(m_Position)+"/"+String.valueOf(m_lastPosition));
    }
    @FXML
    private void safe_action(){
        Person p = Personen.get(m_Position-1);
        p.setM_Name(name.getText());
        p.setM_Vorname(prename.getText());
        p.setM_PersNr(Integer.valueOf(pin.getText()));
        position.setText(String.valueOf(m_Position)+"/"+String.valueOf(m_lastPosition));
        name.setText(p.getM_Name());
        prename.setText(p.getM_Vorname());
        pin.setText(String.valueOf(p.getM_PersNr()));
    }

    public static void dialog(String Vorname, String Nachname){
        System.out.println(Vorname);
        System.out.println(Nachname);
        Person p = new Person();
        p.setM_Name(Nachname);
        p.setM_Vorname(Vorname);
        p.setM_PersNr(Pnr);
        Personen.add(p);
        m_lastPosition++;
    }

    @FXML
    public void remove_action() {
        Person p = Personen.get(m_Position - 1);
        Personen.remove(p);
        m_lastPosition--;
        OnLast();
    }

//Met
}
