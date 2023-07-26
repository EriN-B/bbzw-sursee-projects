package org.example;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class Person{

    private int m_PersNr;
    private String m_Anrede;
    private String m_Name;
    private String m_Vorname;
    private String m_Plz;
    private String m_Ort;
    private int m_Eintrittsjahr;
    private double m_Salaer;
    private double min_Salaer = 0.00;
    private double max_Salaer = 99999.00;
    private double m_Pensum;
    private static int sAnzahlPersonen = 0;

    public Person(){
        setM_PersNr(sAnzahlPersonen);
        setM_Anrede("Frau");
        setM_Name("Neue Person");
        setM_Vorname("");
        setM_Plz("6000");
        setM_Ort("Luzern");
        setM_Eintrittsjahr(Calendar.getInstance().get(Calendar.YEAR));
        setM_Salaer(5000.00);
        setM_Pensum(100);
    }

    public Person(String Anrede, String Name, String Vorname){
        setM_PersNr(sAnzahlPersonen);
        setM_Anrede(Anrede);
        setM_Name(Name);
        setM_Vorname(Vorname);
        sAnzahlPersonen++;
    }
    public Person(String Name, String Vorname, int Eintrittsjahr){
        setM_PersNr(sAnzahlPersonen);
        setM_Name(Name);
        setM_Vorname(Vorname);
        setM_Eintrittsjahr(Eintrittsjahr);
        sAnzahlPersonen++;
    }

    public int getM_PersNr() {
        return m_PersNr;
    }

    public void setM_PersNr(int m_PersNr) {
        this.m_PersNr = m_PersNr;
    }

    public String getM_Andrese() {
        return m_Anrede;
    }

    public void setM_Anrede(String m_Anrede) {
        this.m_Anrede = m_Anrede;
    }

    public String getM_Name() {
        return m_Name;
    }

    public void setM_Name(String m_Name) {
        this.m_Name = m_Name;
    }

    public String getM_Vorname() {
        return m_Vorname;
    }

    public void setM_Vorname(String m_Vorname) {
        this.m_Vorname = m_Vorname;
    }

    public String getM_Plz() {
        return m_Plz;
    }

    public void setM_Plz(String m_Plz) {
        this.m_Plz = m_Plz;
    }

    public String getM_Ort() {
        return m_Ort;
    }

    public void setM_Ort(String m_Ort) {
        this.m_Ort = m_Ort;
    }

    public int getM_Eintrittsjahr() {
        return m_Eintrittsjahr;
    }

    public void setM_Eintrittsjahr(int m_Eintrittsjahr) {
        if(this.m_Eintrittsjahr<1975||this.m_Eintrittsjahr>Calendar.getInstance().get(Calendar.YEAR)){
            //Alert
        }
        else {
            this.m_Eintrittsjahr = m_Eintrittsjahr;
        }
    }

    public double getM_Salaer() {
        return m_Salaer;
    }

    public void setM_Salaer(double m_Salaer) {
        if(this.m_Salaer<min_Salaer||this.m_Salaer>max_Salaer) {
            //alert
        }else{
            this.m_Salaer = m_Salaer;
        }
    }

    public double getM_Pensum() {
        return m_Pensum;
    }

    public void setM_Pensum(double m_Pensum) {
        this.m_Pensum = m_Pensum;
    }

    public static double CalculateLohn(double m_Salaer, double m_Pensum){
        return((m_Salaer/100)*m_Pensum);
    }

}
