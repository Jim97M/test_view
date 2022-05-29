package com.example.demo.controllers;

import com.example.demo.models.Tag;
import com.example.demo.repository.TagRepository;
import com.example.demo.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/")
public class TagsController {
    @Autowired
    private TestRepository testRepository;

    @Autowired
    private TagRepository tagRepository;


}
