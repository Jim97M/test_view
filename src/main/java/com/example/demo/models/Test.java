package com.example.demo.models;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
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

    public Test() {
    }

    public Test(String title, String description, Boolean published){
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public Boolean getPublished(){
        return true;
    }

    public void  setPublished(Boolean published){
        this.published = published;
    }

    //Getters and Setters
    public void addTag(Tag tag){
       this.tags.add(tag);
       tag.getTest().add(this);
    }

    //Remove the Tag object Class
    public void removeTag(long tagId){
        Tag tag = this.tags.stream().filter(t->t.getId() == tagId).findFirst().orElse(null);
    }


    
}
