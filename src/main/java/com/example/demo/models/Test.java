package com.example.demo.models;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name="published")
    private Boolean published;
    @ManyToMany(fetch = FetchType.LAZY,
     cascade = {
           CascadeType.PERSIST,
           CascadeType.MERGE
     })
    @JoinTable(name = "test_tags", joinColumns = {@JoinColumn(name="test_id")},
     inverseJoinColumns = {@JoinColumn(name="tag_id")})
    private Set<Tag> tags = new HashSet<>();



    public Test(){

    }

    public Test(String title, String description, Boolean published){
        this.title = title;
        this.description = description;
        this.published = published;
    }

    //Getters and Setters
    public void addTag(Tag tag){
       this.tags.add(tag);
       tag.getTest().add(this);
    }

    
}
