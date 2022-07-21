package com.example.demo.models;
import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
     @Id
     @GeneratedValue(strategy =  GenerationType.IDENTITY)
     private  Integer id;
     @Enumarated(EnumType.STRING)
     @Column(length = 20)
     private Erole name;

     public Role(){

     }
     public  Role(Erole name){
          this.name = name;
     }

     public Integer getId(){
         return id;
     }

     public void setId(String name){
         this.id = id;
     }

     public Erole getName(){
         return name;
     }

     public void setName(Erole name){
         this.name = name;
     }

}
