package com.example.demo.repository;

import com.example.demo.models.Test;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Test, Long> {
    List<Test> findTagsByTestsId(Long TestId);
}
