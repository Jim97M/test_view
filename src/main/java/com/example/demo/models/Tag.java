package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tags")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @ManyToMany(fetch = FetchType.LAZY,
     cascade = {
            CascadeType.PERSIST,
             CascadeType.MERGE
     }, mappedBy = "tags")
    @JsonIgnore
    private Set<Test> test = new HashSet<>();
   public Tag(){

   }

   public Long getId(){
       return id;
   }

   public void setId(Long id){
       this.id = id;
   }

   public String getName(){
       return name;
   }

   public void setName(String name){
       this.name = name;
   }

   public Set<Test> getTest(){
       return test;
   }

   public void setTest(Set<Test> test){
       this.test = test;
   }
}
