package com.example.demo.models;

import javax.persistence.*;

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

    @ManyToMany
}
