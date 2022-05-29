package com.example.demo.controllers;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Test;
import com.example.demo.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("/api")
public class TestController {
    @Autowired
    TestRepository testRepository;

    @Autowired
    Test test;
    @GetMapping("/test")
    public ResponseEntity<List<Test>> getAllTests(@RequestParam(required = false) String title) {
        try {
            List<Test> tests = new ArrayList<Test>();
            if (title == null)
                testRepository.findAll().forEach(tests::add);
            if (tests.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tests, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/test/{id}")
    public ResponseEntity<Test> getTestById(@PathVariable("id") long id){
        Test test = testRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found Tutorial with id = " + id));
      return new ResponseEntity<>(test, HttpStatus.OK);
    }

    @PostMapping("/test")
     public ResponseEntity<Test> createTutorial(@RequestBody Test test){
        Test _test = testRepository.save(new Test(test.getTitle(), test.getDescription(), true));
        return new ResponseEntity<>(_test, HttpStatus.CREATED);
    }

    @PutMapping("/test/{id}")
    public ResponseEntity<Test> updateTutorial(@PathVariable("id") long id, @RequestBody Test test){
      Test _test = testRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resource With Id=" + id));
      _test.setTitle(test.getTitle());
      _test.setDescription(test.getDescription());
      _test.setPublished(test.getPublished());

      return new ResponseEntity<>(testRepository.save(_test), HttpStatus.OK);
    }

    @DeleteMapping("/test/{id}")
    public ResponseEntity<HttpStatus> deleteTest(@PathVariable("id") long id){
        testRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
